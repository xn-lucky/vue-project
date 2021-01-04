<template>
  <div>home</div>
</template>

<script>
import { getHomeData } from "@api/home";
export default {
  name: "Home",
  async mounted() {
    let banners = await getHomeData();
    console.log(banners);
  },
};
</script>

<style lang="less" scoped>
</style>
