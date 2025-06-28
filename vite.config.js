import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    commonjsOptions: {
      include: [/tsparticles/, /node_modules/]
    }
  },
  optimizeDeps: {
    include: ['react-tsparticles', 'tsparticles']
  },
  base: './',
});