/*
 * @Description: axios全局配置
 * @Author: Dong Wei
 * @Date: 2022-06-13 16:26:27
 * @LastEditors: Dong Wei
 * @LastEditTime: 2023-03-08 11:11:22
 * @FilePath: \audio-player\src\api\index.ts
 */
import axios from 'axios';
import { axiosWrap } from './helper/tools';

import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { Result } from './interface/common';

// axios基础配置
const baseConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

class HttpRequest {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    // 请求拦截
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 设置请求所带的token/session/'Content-Type'等
        return config;
      },
      (err: AxiosError) => {
        console.error('连接服务器失败，请稍后再试');
        return Promise.reject(err);
      }
    );
    // 响应拦截
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const res = response.data;
        // 根据实际情况来设置
        /* ------------- */
        const resCode = res.code;
        const resMessage = res.message;
        const successCodes = [200]; // 正常返回
        /* ------------- */
        if (response.config.responseType === 'blob') {
          return response;
        }
        if (Object.hasOwn(res, 'code')) {
          if (successCodes.includes(resCode)) {
            // 正常情况
            return res;
          } else {
            // 其它报错
            // Toast.fail(resMessage || '好像出错了');
            console.error(resMessage || '好像出错了');
            return Promise.reject(res);
          }
        } else {
          // 不规范的接口以及其它外部接口直接正常处理
          return res;
        }
      },
      (err: AxiosError) => {
        const { response } = err;
        if (response) {
          console.log(response.status);
        } else {
          console.error('连接服务器失败');
        }
        return Promise.reject(err);
      }
    );
  }

  // 常用请求方法进行ts类型包装
  get<T>(url: string, params?: object, _object = {}) {
    return axiosWrap<T>(this.service.get(url, { params, ..._object }));
  }
  post<T>(url: string, params?: object, _object = {}) {
    return axiosWrap<T>(this.service.post(url, params, _object));
  }
  put<T>(url: string, params?: object, _object = {}) {
    return axiosWrap<T>(this.service.put(url, params, _object));
  }
  delete<T>(url: string, params?: any, _object = {}) {
    return axiosWrap<T>(this.service.delete(url, { params, ..._object }));
  }
}

export default new HttpRequest(baseConfig);
