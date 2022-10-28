<p align="center">
  <img width="200" src="https://vite-qiankun-starter.vercel.app/assets/logo.9b6166e5.svg">
</p>

<h1 align="center">Vite Qiankun Starter</h1>

<div align="center">
基于Vite、乾坤的微前端解决方案
</div>

本项目采用 [pnpm](https://pnpm.io/zh) 作为包管理工具

## 注意：

1. 路由文件导出具名函数，不要匿名导出，避免使用 `export default () => ...`

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

## 感谢

- [mono-micro-project](https://github.com/CJY0208/mono-micro-project)
