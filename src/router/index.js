import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@views/Home')

Vue.use(VueRouter)


const router = new VueRouter({
    // 模式
    // mode: 'hash', // 默认模式
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        }
    ],
    // 每次切换路由页面滚动条位置
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router