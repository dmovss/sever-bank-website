import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // Explicit assets directory
    emptyOutDir: true,    // Clear output directory before build
  },
  base: './',  // Relative base path
});