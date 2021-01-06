<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isFooterHide" />
  </div>
</template>

<script>
import Header from "@comps/Header";
import Footer from "@comps/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // SongShowList,
  },
};
</script>
<style lang="less">
body {
  padding-right: 0 !important;
}
</style>
