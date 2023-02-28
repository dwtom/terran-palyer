/*
 * @Description: 从主进程到渲染进程的异步通信
 * @Author: Dong Wei
 * @Date: 2023-02-27 10:35:44
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-02-27 14:38:06
 * @FilePath: \audio-player\electron\ipcMain.cjs
 */
const { ipcMain } = require('electron');

const IpcMainEvent = win => {
  // 最大化最小化及关闭窗口
  ipcMain.on('window-min', () => {
    win.minimize();
  });
  ipcMain.on('window-max', () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });
  ipcMain.on('window-close', () => {
    win.close();
  });
};

module.exports = IpcMainEvent;
