<template>
  <!-- 头部组件 -->
  <div class="mvpageContainer">
    <div class="mvpage-header">
      <!-- 轮播图 -->
      <div class="banners">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="banner in bannersList"
              :key="banner.id"
            >
              <img :src="banner.imgUrl" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- mvhotlist -->
      <div class="mvhotlist">
      <h3 class="title">
        <span class="">MV分类</span>
        <span class="more">更多</span>
      </h3>
        <ul>
          <li>新歌推荐</li>
          <li>华语精选</li>
          <li>日韩精选</li>
          <li>欧美精选</li>
        </ul>
      </div>
    </div>
    <div class="mvpage-content">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
  <!-- 底部组件 -->
</template>

<script>
import Swiper from "swiper";
import { getMvBanners } from "@api/mv";

export default {
  name: "MvPage",
  data() {
    return {
      bannersList: [],
    };
  },
  async mounted() {
    //请求数据
    let bannersList = await getMvBanners();
    this.bannersList = bannersList.banners;
    const mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //等同于以下设置
      /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
    });
    console.log(mySwiper);
    // console.log(bannersList);
  },
};
</script>

<style lang="less" scoped>
.mvpageContainer {
  width: 1000px;
  margin: 0 auto;
}
.mvpage-header {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.swiper-container {
  width: 663px;
  height: 325px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mvhotlist {
  width: 317px;
  height: 325px;
  background-color: aqua;
  .title {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    font-weight: normal;
    .rank {
      width: 219px;
      padding-left: 15px;
      background: #deb200;
      margin-right: 1px;
    }
    .more {
      width: 84px;
      text-align: center;
      background: #363636;
    }
  }
  .hotList {
    width: 100%;
    background: #363636;
    color: #fff;
    margin-top: 2px;
    font-size: 13px;
    li {
      height: 30px;
      line-height: 30px;
      display: flex;
      span {
        width: 37px;
        text-align: center;
      }
    }
  }
}
.mvpage-content {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  .left {
    width: 210px;
    height: 300px;
    background-color: red;
  }
  .right {
    width: 780px;
    height: 300px;
    background-color: green;
  }
}
</style>
