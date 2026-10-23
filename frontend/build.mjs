import {build} from 'esbuild';
import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await build({entryPoints:['src/main.jsx'],bundle:true,minify:true,outdir:'dist',entryNames:'app',loader:{'.js':'jsx'},define:{'process.env.NODE_ENV':'"production"'}});
await copyFile('index.html','dist/index.html');
