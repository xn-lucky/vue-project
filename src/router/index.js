import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ( /* webpackChunkName: "Home" */ '@views/Home')
const SongShowList = () =>
    import ( /* webpackChunkName: "Home" */ "@views/SongShowList");
const SongList = () =>
    import ( /* webpackChunkName: "Home" */ "@views/SongList");


Vue.use(VueRouter)


const router = new VueRouter({
    // 模式
    // mode: 'hash', // 默认模式
    mode: 'history',
    routes: [{
            path: '/songlist',
            component: SongList,
        }, {
            path: '/',
            component: Home,
        },
        {
            path: '/songshowlist',
            component: SongShowList,
        }
    ],
    // 每次切换路由页面滚动条位置
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router