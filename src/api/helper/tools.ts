/*
 * @Description: 工具方法
 * @Author: Dong Wei
 * @Date: 2022-08-09 16:54:22
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-07 17:41:50
 * @FilePath: \audio-player\src\api\helper\tools.ts
 */
import type { AxiosError } from 'axios';

interface WrapResult<T> {
  res?: T;
  err?: AxiosError;
}

// axios包装
export const axiosWrap = <T>(promise: any): Promise<WrapResult<T>> => {
  return promise
    .then((res: T) => {
      return { res };
    })
    .catch((err: AxiosError) => {
      return { err };
    });
};
