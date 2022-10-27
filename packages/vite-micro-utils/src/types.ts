import type { PluginVisualizerOptions } from 'rollup-plugin-visualizer'
import type { Externals } from 'vite-plugin-externals/dist/types'

export type Frame = 'react' | 'vue';

export interface GetViteConfigOptions {
  /** 对应的框架 */
  frame?: Frame;
  /**
   * 是否启用微前端
   * @default true
   */
  micro?: boolean;
  /**
   * 模块的名称
   */
  moduleName?: string;
  /**
   * 项目根目录
   * @default process.cwd()
   */
  root?: string;
  html?: Record<string, any>;
  pluginImport?: Record<string, any>;
  externals?: Externals;
  visualizer?: boolean | PluginVisualizerOptions;
}
