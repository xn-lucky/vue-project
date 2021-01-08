import axios from "axios";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

// const prefix_url =
//       process.env.NODE_ENV === "development" ? "/" : "http://42.192.85.86:3001";


const instance = axios.create({
  baseURL: ``,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {

    // 开始设置进度条
    NProgress.start();
    let arr = ['/artist', '/search', '/personalized', '/dj', '/mv', '/captcha', '/song']
    for (let i = 0; i < arr.length; i++) {
      if (config.url.indexOf(arr[i]) !== -1) {
        config.baseURL = ''
      }
    }
    // }
    // if (arr.indexOf(config.url) !== -1) {
    //   config.baseURL = ''
    // }
    // if (config.url.indexOf('/artist') !== -1) {
    //   config.baseURL = ''
    // }
    // if (config.url.indexOf('/mv') !== -1) {
    //   config.baseURL = ''
    // }
    // if (config.url.indexOf('/captcha') !== -1) {
    //   config.baseURL = ''
    // }
    // if (config.url.indexOf('/song') !== -1) {
    //   config.baseURL = ''
    // }
    // if (config.url.indexOf('/search') !== -1) {
    //   config.baseURL = ''
    // }
    // if (config.url.indexOf('/dj') !== -1) {
    //   config.baseURL = ''
    // }

    return config;
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // debugger
    // debugger
    // 不管是不是成功还是失败，都结束进度条
    NProgress.done();
    let { data, config } = res;
    // let { data } = res;
    // let arr = ['/artist', '/search', '/personalized', '/dj', '/mv', '/mcaptchav', '/song']
    // if (arr.indexOf(config.url) > -1) {
    //   return data;
    // }

    if (config.url.indexOf("/artist") !== -1) {
      return data;
    }
    if (config.url.indexOf("/search") !== -1) {
      return data;
    }
    if (config.url.indexOf("/personalized") !== -1) {
      return data;
    }
    if (config.url.indexOf("/dj") !== -1) {
      return data;
    }
    if (config.url.indexOf('/mv') !== -1) {
      return data
    }
    if (config.url.indexOf('/mcaptchav') !== -1) {
      return data
    }


    if (data.code === 200) {
      return data.data;
    }
    return Promise.reject(data.message);
  },
  (error) => {
    NProgress.done();
    // 处理错误信息
    const message = error.message || "网络错误";
    return Promise.reject(message);
  }
);

export default instance;
