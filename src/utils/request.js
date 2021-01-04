import axios from 'axios';


const instance = axios.create({

});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config;
    }
);
// 响应拦截器
instance.interceptors.response.use(
    (res) => {
        if (res.data.code === 200) {
            return res.data.data;
        }

        return Promise.reject(res.data.message);
    },
    (error) => {
        // 处理错误信息
        const message = error.message || '网络错误';
        return Promise.reject(message);
    }
);

export default instance;
