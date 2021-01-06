<template>
  <!-- <div class="banners"> -->
  <div>
    <div class="swiper-container" ref="swi">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner, index) in banners"
          :key="banner.id"
          @click="toVideo(index)"
        >
          <img :src="banner.imgUrl.replace(' ', '')" alt="" />
          <!-- 蒙版 -->
          <i class="mark">
            <span>{{ banner.imgName }}<em></em></span>
          </i>
          <div class="bg"></div>
        </div>
      </div>
      <!-- 小点点 -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    <!-- pagination自定义, swiper-pagination写在了swiper-container外面可以自定义-->
    <ul class="pagin swiper-pagination" v-if="banners">
      <li v-for="(item, index) in banners.length" :key="index"></li>
    </ul>
  </div>
</template>

<script>
import Swiper, { Pagination, Autoplay } from "swiper";
Swiper.use([Pagination, Autoplay]);
export default {
  name: "Carousel",
  props: {
    banners: Array,
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        new Swiper(this.$refs.swi, {
          loop: true,
          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          // 自动轮播
          autoplay: {
            delay: 2000, // 间隔时间
            disableOnInteraction: false, // 当用户点击下一页之后，轮播继续
          },
        });
      });
    },
  },
  methods: {
    toVideo(index) {
      //点击跳转到video页面播放视频
      let { videoLink, imgName } = this.banners[index];
      // console.log("singerData", singerData);
      this.$router.push({
        path: "/video",
        query: {
          videoLink,
          imgName,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.pagin {
  width: 120px;
  height: 30px;
  position: absolute;
  display: flex;
  bottom: 4px;
  right: 0px;
  z-index: 6;
  align-items: center;
  justify-content: center;
  /deep/.swiper-pagination-bullet,
  li {
    width: 12px;
    height: 11px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 3px;
  }
}

.swiper-container {
  width: 663px;
  height: 325px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .bg {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 40px;
    z-index: 3;
    bottom: 0;
    opacity: 0.7;
  }
  .mark {
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    z-index: 5;
    font-weight: bold;
    font-size: 13px;
    padding-left: 20px;
    span {
      position: relative;
    }
    em {
      position: absolute;
      width: 22px !important;
      height: 22px;
      background: url("../../assets/images/play.png") no-repeat;
      right: -35px;
      top: -3px;
    }
  }
}
</style>
