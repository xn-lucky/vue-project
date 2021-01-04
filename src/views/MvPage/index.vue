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
      <div class="mv-hotlist">
        <h3 class="title">
          <span class="rank">MV热播总排行</span>
          <span class="more">更多</span>
        </h3>
        <ul class="hotlist">
          <li><span>1</span>AAAAAAAAA</li>
          <li><span>2</span>AAAAAAAAA</li>
          <li><span>3</span>AAAAAAAAA</li>
          <li><span>4</span>AAAAAAAAA</li>
          <li><span>5</span>AAAAAAAAA</li>
          <li><span>6</span>AAAAAAAAA</li>
          <li><span>7</span>AAAAAAAAA</li>
          <li><span>8</span>AAAAAAAAA</li>
          <li><span>9</span>AAAAAAAAA</li>
          <li><span>10</span>AAAAAAAAA</li>
        </ul>
      </div>
    </div>
    <div class="mvpage-content">
      <div class="left">
        <div class="title">MV分类</div>
        <ul class="list">
          <li class="active">新歌推荐</li>
          <li>华语精选</li>
          <li>日韩精选</li>
          <li>欧美精选</li>
        </ul>
      </div>
      <div class="right">
        <div class="title">新歌推荐(12345)</div>
        <div class="video-container">
          <ul class="video-list">
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
            <li class="item">
              <a class="link">
                <img src="./images/1.png" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>景象12345674324234865432谁依</span>
            </li>
          </ul>
        </div>
      </div>
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
      }
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
            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
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
