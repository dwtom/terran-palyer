## Terran-player

简介：桌面端音乐播放器 demo，部分内容参考了https://github.com/Kaidesuyo/Hydrogen-Music

技术栈：electron+Vue3+Typescript

开发环境建议 node 版本 18.14.0

## 如何启动

建议第一次启动项目时分别启动 vite 和 electron，否则可能会出现白屏，也可以在白屏时刷新页面

```
npm run dev // 直接启动本地客户端(合并了后两个命令)
```

如需分别启动则分别执行以下命令

```
npm run web-dev // 启动前端服务

npm run electron-dev // 启动electron服务
```

打包

```
npm run make
```
