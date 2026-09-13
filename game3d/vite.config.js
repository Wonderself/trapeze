import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));

function walk(relativeDir) {
  const absoluteDir = path.join(root, relativeDir);
  return readdirSync(absoluteDir, { withFileTypes: true })
    .flatMap(entry => {
      const relativePath = path.posix.join(relativeDir, entry.name);
      return entry.isDirectory() ? walk(relativePath) : [relativePath];
    });
}

function sourceFingerprint() {
  const files = [
    'index.html',
    'package.json',
    'package-lock.json',
    'vite.config.js',
    ...walk('public'),
    ...walk('src'),
  ].sort();
  const hash = createHash('sha256');
  for (const file of files) {
    hash.update(file);
    hash.update('\0');
    hash.update(readFileSync(path.join(root, file)));
    hash.update('\0');
  }
  return hash.digest('hex').slice(0, 12);
}

const buildId = sourceFingerprint();

// Relative assets keep the build portable across GitHub Pages, Coolify and file previews.
export default defineConfig({
  base: './',
  define: {
    __TRAPEZE_BUILD_ID__: JSON.stringify(buildId),
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
    assetsInlineLimit: 0,
  },
});
