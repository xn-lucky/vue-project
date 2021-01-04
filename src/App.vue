<template>
  <div id="app">
    <Home />
    <router-view></router-view>
    <SongList />
    <Footer />
  </div>
</template>

<script>
import Home from "@views/Home";
import SongList from "@views/SongList";
import Footer from "@comps/Footer";

export default {
  name: "App",
  components: {
    Home,
    SongList,
    Footer,
  },
};
</script>

<style>
</style>
