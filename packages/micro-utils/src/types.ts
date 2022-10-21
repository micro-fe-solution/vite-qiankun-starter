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
}
