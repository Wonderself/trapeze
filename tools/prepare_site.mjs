import { cp, mkdir, rename, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const outputIndex = args.indexOf('--output');
const requestedOutput = outputIndex >= 0 ? args[outputIndex + 1] : '_site';
if (!requestedOutput) throw new Error('--output requires a directory');
const output = path.resolve(root, requestedOutput);
const sync3d = args.includes('--sync-3d');
const dist = path.join(root, 'game3d', 'dist');

if (!existsSync(path.join(dist, 'index.html'))) {
  throw new Error('game3d/dist is missing; run npm --prefix game3d run build first');
}

const protectedTargets = [root, path.join(root, '2d'), path.join(root, '3d'), path.join(root, 'game3d'), path.join(root, 'docs')];
if (!output.startsWith(`${root}${path.sep}`)) throw new Error(`Output must stay inside the repository: ${output}`);
if (protectedTargets.includes(output)) throw new Error(`Refusing unsafe output directory: ${output}`);

async function replaceDirectory(source, target) {
  const temporary = `${target}.next-${process.pid}`;
  await rm(temporary, { recursive: true, force: true });
  await cp(source, temporary, { recursive: true });
  await rm(target, { recursive: true, force: true });
  await rename(temporary, target);
}

if (sync3d) await replaceDirectory(dist, path.join(root, '3d'));

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const publicFiles = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'trapeze-stars-v1.html',
  'trapeze-stars-v2.html',
  'trapeze-city-v3.html',
];
for (const file of publicFiles) await cp(path.join(root, file), path.join(output, file));
for (const directory of ['assets', '2d']) {
  await cp(path.join(root, directory), path.join(output, directory), { recursive: true });
}
await cp(dist, path.join(output, '3d'), { recursive: true });
await writeFile(path.join(output, '.nojekyll'), '');

console.log(JSON.stringify({ output, synced3d: sync3d, publicFiles: publicFiles.length, publicDirectories: 3 }));
