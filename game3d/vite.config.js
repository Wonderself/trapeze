import { defineConfig } from 'vite';

// base: './' -> relative asset URLs so the build works from any path
// (GitHub Pages project sub-path, PWA, file preview, etc.)
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    target: 'es2020',
    assetsInlineLimit: 0,
  },
});
