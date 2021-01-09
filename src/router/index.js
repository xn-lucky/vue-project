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
const Vplayer = () =>
  import("@views/vplayer");

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => { });
};

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => { });
};

Vue.use(VueRouter)

const router = new VueRouter({

  // 模式
  // mode: 'hash', // 默认模式
  mode: 'history',
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
    },
    {
      path: '/vplayer',
      component: Vplayer
    }],
  // 每次切换路由页面滚动条位置
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router