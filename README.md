<p align="center">
  <img width="200" src="https://vite-qiankun-starter.vercel.app/assets/logo.9b6166e5.svg">
</p>

<h1 align="center">Vite Qiankun Starter</h1>

<div align="center">
基于Vite、乾坤的微前端解决方案
</div>

本项目采用 [pnpm](https://pnpm.io/zh) 作为包管理工具

## 启动方式

```
# 安装依赖
pnpm i

# 编译依赖包
pnpm build:all

# 启动 dev 命令，默认基座在 8700 端口
pnpm start
```

## 常用命令

```
# 删除所有node_modules
pnpm clean

# 启动 dev 命令
pnpm start

# 编译
pnpm build:all

# 产物预览
pnpm preview
```

## 部署方案

编译后目录如下：

```
├── sub-project1
│   ├── assets
│   └── index.html
├── sub-project2
│   ├── assets
│   └── index.html
├── sub-project3
│   ├── assets
│   └── index.html
├── assets 
└── index.html
```

1. 基座项目的编译结果放置于根目录，
2. 子项目的编译结果放在以子项目为目录名的目录中(比如sub-project1)

启动一个 nginx 服务，核心配置如下

```
location / {
  try_files $uri $uri/ /index.html;
}
```

## 问题记录

### 1. `React.lazy` 组件在 `vite` 中无法热更新

资料:
  - https://github.com/vitejs/vite/issues/2719
  - https://github.com/facebook/react/issues/21181

解决方案
  - 路由文件导出具名函数，不要匿名导出，避免使用 `export default () => ...`

### 2. 部署后，子项目报没有导出生命周期

检查子项目命名和目录是否一致

## 感谢

- [mono-micro-project](https://github.com/CJY0208/mono-micro-project)
- [vite-plugin-qiankun](https://github.com/tengmaoqing/vite-plugin-qiankun)
