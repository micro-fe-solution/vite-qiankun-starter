import { mergeConfig } from 'vite'
import path from 'path'
import { isBoolean } from 'lodash'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer as viteVisualizerPlugin } from 'rollup-plugin-visualizer'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
import vitePluginImp from 'vite-plugin-imp'

import type { UserConfig } from 'vite'
import type { PluginVisualizerOptions } from 'rollup-plugin-visualizer'
import type { GetViteConfigOptions, Frame } from './types';

const defaultImpLibList = [
  {
    libName: '@ant-design/icons',
    libDirectory: '',
    camel2DashComponentName: false,
  },
];

export const getViteConfig = ({
  root = process.cwd(),
  frame = 'react',
  micro = true,
  moduleName = '',
  externals = {},
  pluginImport = {},
  visualizer = false,
  html,
}: GetViteConfigOptions = {}) => {
  const serverConfig = {
    strictPort: true,
    proxy: {},
  }

  const initialPluginsConfig: Record<Frame, UserConfig['plugins']> = {
    vue: [vue()],
    react: [
      react(),
      vitePluginImp({
        ...pluginImport,
        libList: [
          ...pluginImport.libList,
          ...defaultImpLibList,
        ],
      }),
    ]
  };

  const visualizerOpts: PluginVisualizerOptions = {
    open: true,
    gzipSize: true,
    brotliSize: true,
    ...((isBoolean(visualizer)) ? {} : visualizer)
  };

  const initialPlugins = initialPluginsConfig[frame] ?? [];

  const sharedViteConfig: UserConfig = {
    root,
    server: serverConfig,
    preview: serverConfig,
    resolve: {
      alias: [
        // fix less import by: @import ~
        // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
        // https://github.com/vitejs/vite/issues/2185
        { find: /^~/, replacement: '' },
        { find: '@', replacement: path.resolve(root, './src') },
        {
          find: 'mqtt',
          replacement: 'mqtt/dist/mqtt.js',
        },
      ],
    },
    plugins: [
      ...initialPlugins,
      viteExternalsPlugin(externals),
      html && createHtmlPlugin(html),
      visualizer && viteVisualizerPlugin(visualizerOpts),
    ].filter(Boolean),
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        },
      },
    },
  }

  if (frame === 'react') {
    sharedViteConfig.optimizeDeps = {
      include: ['react/jsx-runtime'],
    }
  }

  if (!micro) {
    return sharedViteConfig
  }

  const microViteConfig = mergeConfig(sharedViteConfig, {
    base: moduleName ?`/${moduleName}/` : `/`,
    plugins: [qiankun(moduleName, {})],
    build: {
      rollupOptions: {
        external: ['@/hmr.fix'],
      },
    },
  })

  return microViteConfig
}
