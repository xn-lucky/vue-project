const path = require("path");

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://42.192.85.86:3001",
                // changeOrigin: true, // 允许跨域
                pathRewrite: { // 重写路径: 去掉路径中开头的'/dev-api'
                    '^/api': ''
                }
            },
        },
    },
    // 配置路径别名,可以简写路径
    configureWebpack: {
        resolve: {
            alias: {
                "@views": path.resolve(__dirname, 'src/views'),
                "@assets": path.resolve(__dirname, 'src/assets'),
                "@comps": path.resolve(__dirname, 'src/components'),
                "@store": path.resolve(__dirname, 'src/store'),
                "@utils": path.resolve(__dirname, 'src/utils'),
                "@api": path.resolve(__dirname, 'src/api'),
            }
        }
    }
};
