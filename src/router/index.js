import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
  import( /* webpackChunkName: "Home" */ '@views/Home')
const MvPage = () =>
  import( /* webpackChunkName: "Home" */ '@views/MvPage')
const Video = () =>
  import( /* webpackChunkName: "Home" */ '@views/Video')
const hotSongs = () =>
  import( /* webpackChunkName: "hotSongs" */ '@views/hotSongs');
const playerSong = () =>
  import( /* webpackChunkName: "hotSongs" */ '@views/playerSongs');
const Singer = () =>
  import('@views/Singer')
const SongShowList = () =>
  import( /* webpackChunkName: "Home" */ "@views/SongShowList");
const SingerDetails = () =>
  import('@views/Singer/SingerDetails')
const SongList = () =>
  import( /* webpackChunkName: "Home" */ "@views/SongList");
const Search = () =>
  import("@views/search");

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
      path: '/mvweb',
      component: MvPage,
    },
    {
      path: '/video',
      component: Video,
    },
    {
      path: '/hotsongs',
      component: hotSongs
    },
    {
      path: '/playersong',
      component: playerSong,
      meta: {
        isFooterHide: true,
      },
    },
    {
      path: '/songshowlist/:id?',
      component: SongShowList,
    },
    {
      name: "Singer",
      path: '/singer',
      component: Singer
    },
    {
      name: SingerDetails,
      path: '/singerDetails',
      component: SingerDetails
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    },
    {
      name: SongList,
      path: '/songlist',
      component: SongList
    }],
  // 每次切换路由页面滚动条位置
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

export default router