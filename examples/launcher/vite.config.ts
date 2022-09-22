import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import * as path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

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

// initialize dev server proxy for sub applications
const proxy: Record<string, any> = {};
/* eslint-disable @typescript-eslint/no-var-requires */
const MicroConfig = require('./micro.config.json');
(MicroConfig as MicroInterface).apps.map((item) => {
    proxy[`^/${item.name}/`] = item.devEntry;
});

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
            },
        },
    },
    build: {
        minify: false,
    },
    plugins: [
        vue(),
        createHtmlPlugin({
            minify: true,
            /**
             * Data that needs to be injected into the index.html ejs template
             */
            inject: {
                data: {
                    title: 'vue-ts-starter',
                },
            },
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    server: {
        cors: true,
        port: 8000,
        hmr: {
            host: '127.0.0.1',
            port: 8000,
        },
        proxy,
    },
});
