/*
 * @Description: axios公共类型声明
 * @Author: Dong Wei
 * @Date: 2022-06-15 14:10:51
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 17:28:24
 * @FilePath: \audio-player\src\api\interface\common.ts
 */
// 基础返回
export interface Result {
  // errCode: number;
  // errMessage: string;
  // success: boolean;
  code: number;
  // [propName: string]: any;
}

// 返回data字段
export interface ResultData<T> extends Result {
  data: T;
}
