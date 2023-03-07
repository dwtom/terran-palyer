/*
 * @Description: 网易云接口node服务
 * @Author: Dong Wei
 * @Date: 2023-03-07 17:09:00
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 17:10:47
 * @FilePath: \audio-player\electron\neteaseService.cjs
 */
const server = require('NeteaseCloudMusicApi/server');

//启动网易云音乐API
module.exports = async function startNeteaseMusicApi() {
  await server.serveNcmApi({
    checkVersion: true,
    port: 9110,
  });
};
