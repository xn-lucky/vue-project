<template>
  <div id="app">
    <Home />
    <SongList />
  </div>
</template>

<script>
import Home from "@views/Home";
import SongList from "@views/SongList";

export default {
  name: "App",
  components: {
    Home,
    SongList,
  },
};
</script>

<style>
</style>
