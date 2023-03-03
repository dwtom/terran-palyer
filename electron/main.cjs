const { app, BrowserWindow } = require('electron');
const path = require('path');
const IpcMainEvent = require('./ipcMain.cjs');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 672,
    minWidth: 1024,
    minHeight: 672,
    frame: false,
    backgroundColor: '#fff',
    // alwaysOnTop: true, // 窗口永远在最前
    webPreferences: {
      // 预加载脚本
      preload: path.join(__dirname, './preload.cjs'),
    },
  });
  // 判断是否是生产环境
  if (app.isPackaged) {
    win.loadURL('https://www.leeknostory.cn/');
  } else {
    win.loadURL('http://localhost:8110');
  }

  //ipcMain初始化
  IpcMainEvent(win);
};

app.whenReady().then(() => {
  createWindow();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
