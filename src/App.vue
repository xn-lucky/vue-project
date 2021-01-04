<template>
  <div id="app">
    <Home />
    <router-view></router-view>
    <SongList />
    <Footer />
    <Singer />
  </div>
</template>

<script>
import Home from "@views/Home";
import SongList from "@views/SongList";
import Footer from "@comps/Footer";
import Singer from "@views/Singer";
export default {
  name: "App",
  components: {
    Home,
    SongList,
    Footer,
    Singer,
  },
};
</script>

<style lang="less">
  
</style>
