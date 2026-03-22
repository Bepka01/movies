import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(rootDir, 'src/pages'),
  publicDir: resolve(rootDir, 'public'),
  build: {
    outDir: resolve(rootDir, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(rootDir, 'src/pages/index.html'),
        auth: resolve(rootDir, 'src/pages/auth.html'),
      },
    },
  },
});
