import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

const isProd = process.env.NODE_ENV === 'production';
const isMicro = process.env.VITE_MICRO_MODE === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: true,
  },
  plugins: [react()],
  server: {
    port: 8603
  }
})
