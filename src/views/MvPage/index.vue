<template>
  <!-- 头部组件 -->
  <div class="mvpageContainer">
    <!-- <button @click="toVideo">点击</button> -->
    <div class="mvpage-header">
      <!-- 轮播图 -->
      <div class="banners">
        <Carousel :banners="mvBanners" />
      </div>
      <!-- mvhotlist -->
      <div class="mv-hotlist">
        <h3 class="title">
          <span class="rank">MV热播总排行</span>
          <span class="more">更多</span>
        </h3>
        <ul class="hotlist">
          <li
            v-for="(rank, index) in allRank"
            :key="rank.id"
            @click="toVideo(index, 'allRank')"
          >
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
            :class="currentIndex === index ? 'active' : ''"
            @click="handleClick(index)"
          >
            {{ type.name }}
          </li>
        </ul>
      </div>
      <div class="right" v-if="singerListData && singerListData.name">
        <div class="title">{{ singerListData.name }}</div>
        <div class="video-container">
          <ul class="video-list">
            <li
              class="item"
              v-for="(content, index) in singerListData.itemList"
              :key="content.id"
              @click="toVideo(index)"
            >
              <a class="link">
                <img :src="content.imgUrl.replace(' ', '')" alt="" />
                <em></em>
                <i></i>
              </a>
              <span>{{ content.name }}</span>
            </li>
          </ul>
          <!-- 分页器 -->
          <el-pagination
            layout="prev, pager, next,total"
            :total="total"
            :current-page.sync="currentPage"
            @current-change="handleCurrentChange"
            :page-size="size"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
  <!-- 底部组件 -->
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swiper, { Pagination, Autoplay } from "swiper";
import Carousel from "@comps/Carousel";
Swiper.use([Pagination, Autoplay]);

export default {
  name: "MvPage",
  data() {
    return {
      currentIndex: 0, //当前的mv分类的下标
      currentBannersIndex: 0,

      // 分页器的参数
      currentPage: 1, //当前页
      size: 10, // 默认当前页展示数据条数
      total: 0, //数据总数
    };
  },
  computed: {
    ...mapState({
      mvType: (state) => state.mv.mvType,
      allRank: (state) => state.mv.allRank,
      mvBanners: (state) => state.mv.mvBanners,
      singerListData: (state) => state.mv.singerListData,
    }),
    // ...mapGetters(["allRank", "mvBanners"]),
  },
  watch: {
    mvType: {
      handler() {
        let {
          mvType: { list },
          currentIndex,
          currentPage,
        } = this;
        if (list) {
          // 开始默认配置的数据，currentIndex为0,当前页为1,每页条数为size->10
          this.publicFunc(currentPage);
          // // 获取总数
          this.total = list[currentIndex].itemList.length;
        }
      },
      immediate: true,
    },
    mvBanners: {
      handler() {
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
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
  },
  methods: {
    ...mapActions(["getMvData"]),
    //测试点击跳转video页面
    toVideo(index, type) {
      // console.log("singerData", singerData);
      this.$router.push({
        path: "/video",
        query: {
          videoLink: type
            ? this[type][index].videoLink
            : this.singerListData.itemList[index].videoLink,
          imgName: type
            ? this[type][index].name
            : this.singerListData.itemList[index].name,
        },
      });
    },
    //当前页改变的时候触发的事件
    handleCurrentChange(currentPage) {
      this.publicFunc(currentPage);
    },
    //获取当前类别下的对应当前页数据
    publicFunc(currentPage = this.currentPage) {
      this.$store.commit("GETCURRENTPAGEDATA", {
        currentIndex: this.currentIndex, //直接在this中获取
        currentPage,
        size: this.size,
      });
    },
    // 点击切换分类
    async handleClick(index) {
      //点击mv分类,根据下标获取对应的数据
      this.currentIndex = index;
      // 切换分类后,将当前页改为1
      this.currentPage = 1;
      //获取对应下标的数据
      this.publicFunc();
      // 获取总数
      this.total = this.mvType.list[index].itemList.length;
    },
  },
  async mounted() {
    //请求数据,触发action
    await this.getMvData();
  },
  components: {
    Carousel,
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
.banners {
  position: relative;
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
    height: 293px;
    background: #363636;
    color: #fff;
    margin-top: 2px;
    font-size: 13px;
    li {
      height: 29px;
      line-height: 29px;
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
  height: 557px;
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
