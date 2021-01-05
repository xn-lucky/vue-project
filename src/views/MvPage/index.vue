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
              v-for="banner in mvBanners"
              :key="banner.id"
            >
              <img :src="banner.imgUrl.replace(' ', '')" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- mvhotlist -->
      <div class="mv-hotlist">
        <h3 class="title">
          <span class="rank">MV热播总排行</span>
          <span class="more">更多</span>
        </h3>
        <ul class="hotlist">
          <li v-for="(rank, index) in allRank" :key="rank.id">
            <span class="num">{{ index + 1 }}</span
            ><span class="name">{{ rank.name }}</span>
            <i class="icon"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="mvpage-content">
      <div class="left">
        <div class="title">{{ mvType && mvType.title }}</div>
        <ul class="list" v-if="mvType">
          <li
            v-for="(type, index) in mvType.list"
            :key="index"
            :class="currentId === index ? 'active' : ''"
            @click="handleClick(index)"
          >
            {{ type.name }}
          </li>
        </ul>
      </div>
      <div class="right" v-if="typeContent && typeContent.name">
        <div class="title">{{ typeContent.name }}</div>
        <div class="video-container">
          <ul class="video-list">
            <li
              class="item"
              v-for="content in typeContent.itemList"
              :key="content.id"
            >
              <a class="link">
                <img :src="content.imgUrl.replace(' ', '')" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>{{ content.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- 底部组件 -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Swiper from "swiper";

export default {
  name: "MvPage",
  data() {
    return {
      currentId: 0,
      typeContent: {},
    };
  },
  computed: {
    ...mapGetters(["allRank", "mvBanners", "mvType"]),
  },
  watch: {
    mvType: {
      handler() {
        // console.log(newValue);
        //获取对应下标的数据
        this.typeContent = this.mvType && this.mvType.list[0];
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["getMvData"]),
    async handleClick(index) {
      //点击mv分类,根据下标获取对应的数据
      this.currentId = index;
      //获取对应下标的数据
      this.typeContent = this.mvType.list[index];
    },
  },
  async mounted() {
    //请求数据,触发action
    await this.getMvData();
    //设置当前默认id
    // this.currentId = this.mvType.list[0].id;
    // console.log(this.mvType);
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
.mv-hotlist {
  width: 317px;
  height: 325px;
  // background-color: aqua;
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
  .hotlist {
    width: 100%;
    background: #363636;
    color: #fff;
    margin-top: 2px;
    font-size: 13px;
    li {
      height: 30px;
      line-height: 30px;
      display: flex;
      &:hover {
        background-color: #959595;
        .icon {
          display: inline-block;
          height: 18px;
          width: 18px;
          position: relative;
          top: 6px;
          background: url(./images/play1.png) no-repeat;
        }
      }
      .num {
        width: 37px;
        text-align: center;
      }
      .name {
        width: 220px;
        overflow: hidden;
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
    // background-color: red;
    text-align: center;
    .title {
      height: 30px;
      line-height: 30px;
      background-color: #cfcfcf;
      font-size: 16px;
      color: #fff;
    }
    .list {
      padding-top: 10px;
      li {
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        &:hover {
          color: #fff;
          background-color: #85d4f3;
        }
        &.active {
          background-color: #85d4f3;
          color: #fff;
        }
      }
    }
  }
  .right {
    width: 780px;
    height: 300px;
    // background-color: green;
    text-align: center;
    .title {
      height: 30px;
      line-height: 30px;
      background-color: #cfcfcf;
      font-size: 16px;
      color: #fff;
    }
    .video-container {
      width: 780px;
      overflow: hidden;
      .video-list {
        width: 800px;
        padding-top: 10px;
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 140px;
          height: 110px;
          margin: 0px 20px 10px 0px;
          display: flex;
          flex-direction: column;
          .link {
            width: 140px;
            height: 78px;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
            em {
              position: absolute;
              width: 22px;
              height: 22px;
              background: url("./images/play.png") no-repeat;
              bottom: 11px;
              right: 11px;
            }
            i {
              position: absolute;
              width: 140px;
              height: 44px;
              background: url("./images/btn_bg.png") no-repeat;
              bottom: 0;
              left: 0;
            }
          }
          span {
            height: 20px;
            width: 124px;
            font-size: 14px;
            color: #555;
            margin: 5px 0 0 3px;
            display: block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
