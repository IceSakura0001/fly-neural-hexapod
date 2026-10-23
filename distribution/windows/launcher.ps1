param(
    [ValidateSet('start','stop','status','diagnose')][string]$Action='start',
    [ValidatePattern('^[a-z][a-z0-9_-]{2,60}$')][string]$ProjectName='hexapod-share-20261023',
    [switch]$NoBrowser
)
$ErrorActionPreference='Stop'
Set-StrictMode -Version 2
$root=$PSScriptRoot
$stateDir=Join-Path $root '.runtime'
$diagDir=Join-Path $root 'diagnostics'
New-Item -ItemType Directory -Force -Path $stateDir,$diagDir | Out-Null
$script:LogPath=Join-Path $diagDir 'launcher.log'
$runtimeEnv=Join-Path $stateDir ($ProjectName+'.env')
$composeFile=Join-Path $root 'compose.yaml'
$script:DockerPath=$null
$mutex=$null
$hasLock=$false

function Write-Log([string]$Message) {
    $line=('['+(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')+'] '+$Message)
    Write-Host $line
    Add-Content -LiteralPath $script:LogPath -Value $line -Encoding UTF8
}

function Invoke-Docker {
    param([string[]]$DockerArgs,[switch]$AllowFailure,[switch]$Quiet)
    $saved=$ErrorActionPreference
    try {
        $ErrorActionPreference='Continue'
        $lines=@(& $script:DockerPath @DockerArgs 2>&1)
        $code=$LASTEXITCODE
        $output=($lines | ForEach-Object { $_.ToString() }) -join [Environment]::NewLine
    } finally { $ErrorActionPreference=$saved }
    if(-not $Quiet -and $output){ Write-Log $output }
    if($code -ne 0 -and -not $AllowFailure){ throw ('Docker command failed ('+$code+'). '+$output) }
    return [pscustomobject]@{Code=$code;Text=$output}
}

function Read-Settings([string]$Path) {
    $values=@{}
    if(Test-Path -LiteralPath $Path){
        foreach($line in [IO.File]::ReadAllLines($Path)){
            if($line -match '^\s*(HEXAPOD_[A-Z]+)\s*=\s*([^#\s]+)\s*$'){$values[$matches[1]]=$matches[2]}
        }
    }
    return $values
}

function Test-FreePort([int]$Port) {
    $listener=New-Object Net.Sockets.TcpListener([Net.IPAddress]::Loopback,$Port)
    try { $listener.Server.ExclusiveAddressUse=$true;$listener.Start();return $true }
    catch [Net.Sockets.SocketException] { return $false }
    finally { $listener.Stop() }
}

function Compose-Args([string[]]$Tail) {
    $envFile=if(Test-Path -LiteralPath $runtimeEnv){$runtimeEnv}else{Join-Path $root 'settings.env'}
    return @('compose','--project-name',$ProjectName,'--file',$composeFile,'--env-file',$envFile)+$Tail
}

try {
    Write-Log ('Action: '+$Action+'; project: '+$ProjectName)
    $dockerCommand=Get-Command docker -ErrorAction SilentlyContinue
    if(-not $dockerCommand){throw 'Docker Desktop was not found. Install Docker Desktop for Windows x64, enable WSL2/Linux containers, then run this launcher again.'}
    $script:DockerPath=$dockerCommand.Source
    $version=Invoke-Docker -DockerArgs @('compose','version','--short') -Quiet
    Write-Log ('Docker Compose: '+$version.Text)
    $info=Invoke-Docker -DockerArgs @('info','--format','{{.OSType}}|{{.Architecture}}|{{.MemTotal}}|{{.NCPU}}') -AllowFailure -Quiet
    if($info.Code -ne 0 -and $Action -eq 'start'){
        Write-Log 'Starting Docker Desktop. Waiting up to four minutes for its Linux engine...'
        $desktop=Join-Path $env:ProgramFiles 'Docker\Docker\Docker Desktop.exe'
        if(Test-Path -LiteralPath $desktop){Start-Process -FilePath $desktop -WindowStyle Hidden | Out-Null}
        else {Invoke-Docker -DockerArgs @('desktop','start') -AllowFailure | Out-Null}
        $deadline=(Get-Date).AddSeconds(240)
        do {
            Start-Sleep -Seconds 3
            $info=Invoke-Docker -DockerArgs @('info','--format','{{.OSType}}|{{.Architecture}}|{{.MemTotal}}|{{.NCPU}}') -AllowFailure -Quiet
        } while($info.Code -ne 0 -and (Get-Date) -lt $deadline)
    }
    if($info.Code -ne 0){throw 'Docker Linux engine is not ready. Open Docker Desktop, finish its initial setup, and wait for Engine running.'}
    $engine=$info.Text.Trim().Split('|')
    if($engine[0] -ne 'linux'){throw 'This package needs Docker Linux containers. Switch Docker Desktop to Linux containers, then retry.'}
    if($engine[1] -notin @('x86_64','amd64')){throw 'This offline image targets Linux amd64 (Windows x64). This package has not been validated for ARM64.'}
    Write-Log ('Engine: '+$engine[0]+'/'+$engine[1]+'; CPUs: '+$engine[3]+'; RAM GiB: '+([math]::Round([double]$engine[2]/1GB,1)))
    $release=Get-Content -LiteralPath (Join-Path $root 'release.json') -Raw -Encoding UTF8 | ConvertFrom-Json
    $image=Invoke-Docker -DockerArgs @('image','inspect',$release.image_tag,'--format','{{.Id}}') -AllowFailure -Quiet

    if($Action -eq 'start'){
        $mutex=New-Object System.Threading.Mutex($false,('Local\'+$ProjectName+'-launcher'))
        try { $hasLock=$mutex.WaitOne(0) }
        catch [System.Threading.AbandonedMutexException] { $hasLock=$true }
        if(-not $hasLock){throw 'Another launcher for this package is already running. Wait for it to finish.'}
        if($image.Code -ne 0 -or $image.Text.Trim() -ne $release.image_id){
            $imageFile=Join-Path $root $release.image_file
            if(-not(Test-Path -LiteralPath $imageFile)){throw 'runtime/image.tar is missing. Fully extract the ZIP before launching.'}
            Write-Log 'Checking offline image integrity...'
            $digest=(Get-FileHash -LiteralPath $imageFile -Algorithm SHA256).Hash.ToLowerInvariant()
            if($digest -ne $release.image_sha256){throw 'Offline image checksum does not match. Copy/extract the original package again.'}
            Write-Log 'Importing the bundled image. No dependency downloads are required.'
            Invoke-Docker -DockerArgs @('load','--input',$imageFile) | Out-Null
            $image=Invoke-Docker -DockerArgs @('image','inspect',$release.image_tag,'--format','{{.Id}}') -Quiet
            if($image.Text.Trim() -ne $release.image_id){throw 'Loaded image ID does not match this release.'}
        } else {Write-Log 'The release image is already imported.'}

        $settings=Read-Settings (Join-Path $root 'settings.env')
        if(-not $settings.ContainsKey('HEXAPOD_PORT')){$settings.HEXAPOD_PORT='8765'}
        if(-not $settings.ContainsKey('HEXAPOD_CPUS')){$settings.HEXAPOD_CPUS='2'}
        if(-not $settings.ContainsKey('HEXAPOD_MEMORY')){$settings.HEXAPOD_MEMORY='4g'}
        if($settings.HEXAPOD_PORT -notmatch '^\d+$' -or [int]$settings.HEXAPOD_PORT -lt 1024 -or [int]$settings.HEXAPOD_PORT -gt 65515){throw 'HEXAPOD_PORT must be an integer from 1024 to 65515.'}
        if($settings.HEXAPOD_CPUS -notmatch '^\d+$' -or [int]$settings.HEXAPOD_CPUS -lt 1 -or [int]$settings.HEXAPOD_CPUS -gt [int]$engine[3]){throw 'HEXAPOD_CPUS must be between 1 and the Docker engine CPU count.'}
        if($settings.HEXAPOD_MEMORY -notmatch '^[1-9]\d*[mg]$'){throw 'HEXAPOD_MEMORY must use a positive integer followed by m or g, such as 4g.'}
        $memory=[double]$settings.HEXAPOD_MEMORY.Substring(0,$settings.HEXAPOD_MEMORY.Length-1)
        $memory*=if($settings.HEXAPOD_MEMORY.EndsWith('g')){1GB}else{1MB}
        if([double]$engine[2] -lt $memory+512MB){throw 'Docker has insufficient memory for this limit. Increase Docker/WSL memory or adjust settings.env; 4g for this app plus engine overhead is recommended.'}
        $port=[int]$settings.HEXAPOD_PORT
        $existing=Invoke-Docker -DockerArgs (Compose-Args @('ps','--quiet','console')) -AllowFailure -Quiet
        $ownPort=0
        if($existing.Code -eq 0 -and $existing.Text.Trim()){
            $bound=Invoke-Docker -DockerArgs @('port',$existing.Text.Trim(),'8000/tcp') -AllowFailure -Quiet
            if($bound.Text -match '127\.0\.0\.1:(\d+)'){$ownPort=[int]$matches[1]}
        }
        if($ownPort){$port=$ownPort}
        else {
            $last=$port+20
            while($port -le $last -and -not(Test-FreePort $port)){$port++}
            if($port -gt $last){throw 'No free local port in the configured range. Choose another HEXAPOD_PORT in settings.env.'}
        }
        $settings.HEXAPOD_PORT=[string]$port
        @(
            ('HEXAPOD_PORT='+$port)
            ('HEXAPOD_CPUS='+$settings.HEXAPOD_CPUS)
            ('HEXAPOD_MEMORY='+$settings.HEXAPOD_MEMORY)
        ) | Set-Content -LiteralPath $runtimeEnv -Encoding ASCII
        Write-Log ('Starting on http://127.0.0.1:'+$port+'/ ; first neural compilation may take a minute.')
        Invoke-Docker -DockerArgs (Compose-Args @('up','--detach','--no-build','--wait','--wait-timeout','240')) | Out-Null
        $url='http://127.0.0.1:'+$port+'/'
        $health=Invoke-RestMethod -Uri ($url+'api/health') -TimeoutSec 15
        if(-not $health.ok -or $health.model -ne 'user_nbs_v5'){throw 'The application health response is unexpected.'}
        [IO.File]::WriteAllText((Join-Path $stateDir 'last-url.txt'),$url)
        Write-Log ('READY: '+$url)
        Write-Log 'W/A/S/D or on-screen buttons move the simulated robot. Release to stop.'
        if(-not $NoBrowser){Start-Process $url | Out-Null}
    }
    elseif($Action -eq 'stop'){
        Invoke-Docker -DockerArgs (Compose-Args @('stop','--timeout','10')) | Out-Null
        Write-Log 'Stopped this package. Saved stance and other Docker projects were preserved.'
    }
    elseif($Action -eq 'status'){
        Invoke-Docker -DockerArgs (Compose-Args @('ps','--all')) | Out-Null
        if(Test-Path -LiteralPath (Join-Path $stateDir 'last-url.txt')){Write-Log ([IO.File]::ReadAllText((Join-Path $stateDir 'last-url.txt')))}
    }
    else {
        Write-Log ('Release: '+$release.version+'; image present: '+($image.Code -eq 0))
        Invoke-Docker -DockerArgs (Compose-Args @('ps','--all')) -AllowFailure | Out-Null
        $logs=Invoke-Docker -DockerArgs (Compose-Args @('logs','--no-color','--tail','100')) -AllowFailure -Quiet
        [IO.File]::WriteAllText((Join-Path $diagDir 'containers.log'),$logs.Text)
        Write-Log 'Container logs saved to diagnostics/containers.log.'
    }
    exit 0
} catch {
    Write-Log ('ERROR: '+$_.Exception.Message)
    Write-Log 'See diagnostics/launcher.log. Run the diagnostic shortcut for container logs.'
    exit 1
} finally {
    if($hasLock){$mutex.ReleaseMutex()}
    if($mutex){$mutex.Dispose()}
}
