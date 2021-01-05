<template>
  <div id="app">
    <Home />
    <router-view></router-view>
    <SongList />
    <Singer />
    <MvPage />
    <Footer />
  </div>
</template>

<script>
import Home from "@views/Home";
import SongList from "@views/SongList";
import Footer from "@comps/Footer";
import Singer from "@views/Singer";
import MvPage from "@views/MvPage";

export default {
  name: "App",
  components: {
    Home,
    SongList,
    Footer,
    Singer,
    MvPage,
  },
};
</script>

<style lang="less">
</style>
