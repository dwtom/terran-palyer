/*
 * @Description: 预加载脚本
 * @Author: Dong Wei
 * @Date: 2023-02-27 10:23:37
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-02-27 15:34:01
 * @FilePath: \audio-player\electron\preload.cjs
 */
const { contextBridge, ipcRenderer } = require('electron');

// 将调用nodejs的api暴露给渲染器
// Main World在electron中指渲染器代码运行的js上下文
// electronAPIs为暴露给渲染进程的全局变量
// ipcRenderer为渲染进程到主进程的异步通信
contextBridge.exposeInMainWorld('electronAPIs', {
  // 最小化
  windowMin() {
    ipcRenderer.send('window-min');
  },
  // 最大化
  windowMax() {
    ipcRenderer.send('window-max');
  },
  // 关闭窗口
  windowClose() {
    ipcRenderer.send('window-close');
  },
});
