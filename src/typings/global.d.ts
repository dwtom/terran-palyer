/*
 * @Description: 全局类型声明
 * @Author: Dong Wei
 * @Date: 2023-02-27 13:25:31
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-02-28 10:12:07
 * @FilePath: \audio-player\src\typings\global.d.ts
 */
// 通过contextBridge暴露的api
declare const electronAPIs: {
  windowMin: () => void;
  windowMax: () => void;
  windowClose: () => void;
  [propName: string]: Function;
};
