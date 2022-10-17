import { defineConfig, UserConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

interface AppInterface {
  name: string;
  type: string;
  devEntry: string;
  entry: string;
  container: string;
  activeRule: string;
}

interface MicroInterface {
  apps: AppInterface[];
}

const DEV_PORT = 8600;

const proxy: UserConfig['server']['proxy'] = {};

const MicroConfig: MicroInterface = require('./micro.config.json');
MicroConfig.apps.map((item) => {
  proxy[`^/${item.name}/`] = item.devEntry;
});

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: false,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [react()],
  server: {
    cors: true,
    port: DEV_PORT,
    hmr: {
      host: '127.0.0.1',
      port: DEV_PORT,
    },
    proxy,
  },
})
