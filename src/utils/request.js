import axios from 'axios';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';

const instance = axios.create({
    baseURL: '/api'
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // debugger
        // 开始设置进度条
        NProgress.start();
        if (config.url.indexOf('artist') !== -1) {
            config.baseURL = ''
        }

        return config;
    }

);
// 响应拦截器
instance.interceptors.response.use(
    (res) => {
        // debugger
        // 不管是不是成功还是失败，都结束进度条
        NProgress.done();
        let { data } = res
        if (data.code === 200) {
            return data.data;
        }
        return Promise.reject(data.message);
    },
    (error) => {
        NProgress.done();
        // 处理错误信息
        const message = error.message || '网络错误';
        return Promise.reject(message);
    }
);

export default instance;