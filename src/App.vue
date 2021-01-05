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
// import SongShowList from "@views/SongShowList";

export default {
  name: "App",
  components: {
    Home,
    SongList,
    Footer,
    // SongShowList,
  },
};
</script>

<style>
</style>
