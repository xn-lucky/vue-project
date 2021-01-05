import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@views/Home')
const Singer = () => import('@views/Home/Singer')
const SingerDetails = () => import('@views/Home/Singer/SingerDetails')
Vue.use(VueRouter)


const router = new VueRouter({
  // 模式
  // mode: 'hash', // 默认模式
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      name: Singer,
      path: '/singer',
      component: Singer
    },
    {
      name: SingerDetails,
      path: '/singerDetails',
      component: SingerDetails
    }
  ],
  // 每次切换路由页面滚动条位置
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
});

export default router