import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      ViteImageOptimizer({
        /* pass your config for image optimization here */
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 80,
        },
      }),
    ],
  };
});