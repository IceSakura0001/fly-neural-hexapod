$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
docker info *> $null
if ($LASTEXITCODE -ne 0) {
    docker desktop start
    if ($LASTEXITCODE -ne 0) { throw '无法启动 Docker Desktop' }
}
docker compose up -d --build --wait
if ($LASTEXITCODE -ne 0) { throw '容器启动失败，请查看 docker compose logs' }
Start-Process 'http://127.0.0.1:8765/'
