<template>
  <div class="songContainer">
    <div class="left">
      <dl class="dl">
        <dt>
          <a
            :class="currentIndex === 1 ? 'active' : ''"
            href="javascript:;"
            @click.prevent="changeSong(1)"
            >推荐</a
          >
        </dt>
        <dt>
          <a
            href="javascript:;"
            @click.prevent="changeSong(2)"
            :class="currentIndex === 2 ? 'active' : ''"
            >最热</a
          >
        </dt>
        <dt>
          <a
            href="javascript:;"
            @click.prevent="changeSong(3)"
            :class="currentIndex === 3 ? 'active' : ''"
            >热藏</a
          >
        </dt>
        <dt>
          <a
            href="javascript:;"
            @click.prevent="changeSong(4)"
            :class="currentIndex === 4 ? 'active' : ''"
            >飙升</a
          >
        </dt>
      </dl>
    </div>
    <div class="right">
      <ul class="ulAlbums" ref="wrapper">
        <li v-for="item in songList" :key="item.id">
          <div class="pic">
            <router-link :to="`/songshowlist/${item.id}`">
              <img :src="item.image" alt="" />
            </router-link>
          </div>
          <div class="detail">
            <div class="top">
              <strong
                ><a
                  :title="item.title"
                  href="https://www.kugou.com/yy/special/single/3205324.html"
                  >{{ item.title }}</a
                >
                <!--<span>()</span>-->
              </strong>
              <em>制作人：{{ item.producer }}</em>
            </div>
            <div class="text">{{ item.paper }}</div>
            <div class="btn">
              <a href="javascript:void(0)"
                ><span
                  ><i class="iconfont icon-kongxinjiantou33"></i><i>播放全部</i>
                </span></a
              >
              <a href="javascript:void(0)"
                ><span
                  ><i class="iconfont icon-fenxiang1"></i><i>分享</i>
                </span></a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSongList } from "@api/songList";

export default {
  name: "SongList",
  data() {
    return {
      currentIndex: 1,
      songList: [],
      result: {},
    };
  },
  created() {
    // this.loadData();
  },

  methods: {
    changeSong(index) {
      if (index === 1) {
        this.songList = this.result.songList1;
        this.currentIndex = 1;
      }
      if (index === 2) {
        this.songList = this.result.songList2;
        this.currentIndex = 2;
      }
      if (index === 3) {
        this.songList = this.result.songList3;
        this.currentIndex = 3;
      }
      if (index === 4) {
        this.songList = this.result.songList4;
        this.currentIndex = 4;
      }
    },

    /* loadData() {
      getSongList().then((res) => {
        this.result = res;
        // console.log(res);
        // console.log(!this.songList);

        // console.log(res);
        // this.songList = this.result.songList1;
        // console.log(this.songList );
        // console.log(res.songList2, "2222");
        this.songList = this.songList.concat(res.songList2);
        // console.log(this.songList);
        // console.log(this.songList);
      });
    }, */
  },
  async mounted() {
    let result = await getSongList();
    this.result = result;
    // console.log(result);
    this.songList = result.songList1;

    window.onscroll = () => {
      if (
        //html滚动高度大于html本身高度大于视口高度时候触发这个事件，用concat连接即可
        document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - window.innerHeight
      ) {
        // this.loadData();
        this.songList = this.songList.concat(this.result.songList4);
      }
    };
  },
  // watch: {
  //   songList(value) {
  //     if (!value.length) return;
  //     this.$nextTick(() => {});
  //   },
  // },
};
</script>



<style lang="less" scoped>
.songContainer {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  .left {
    width: 210px;
    height: 235px;
    color: #8e8e8e;
    margin-top: 20px;
    position: relative;
    padding-top: 0;
    .dl {
      margin-bottom: 27px;
      padding-top: 10px;
      color: #555;
      font-size: 14px;
      background: white;
      dt {
        height: 36px;
        line-height: 36px;
        margin-bottom: 18px;
        text-decoration: none;
        .active {
          background: #169af3;
          color: white;
        }
        a {
          display: block;
          height: 36px;
          line-height: 36px;
          color: #555;
          text-align: center;
          text-decoration: none;
          &:hover {
            background: #169af3;
            color: white;
          }
        }
      }
    }
  }
  .right {
    width: 790px;

    color: #8e8e8e;
    margin-top: 20px;
    position: relative;
    padding-top: 0;
    padding-left: 20px;
    .ulAlbums {
      list-style: none;
      li {
        width: 100%;
        float: none;
        height: 123px;
        overflow: hidden;
        margin-bottom: 16px;
        position: relative;
        border-bottom: 1px solid #dcdcdc;
        .pic {
          display: block;
          float: left;
          width: 108px;
          padding: 4px 0 0 4px;
          a {
            display: block;
            width: 102px;
            height: 102px;
            border: 2px solid #ccc;
            text-decoration: none;
            &:hover {
              border: 2px solid #169af3;
              box-shadow: 0px 0px 2px #169af3;
            }
            img {
              padding: 1px;
              width: 100px;
              height: 100px;
            }
          }
        }
        .detail {
          float: right;
          width: 650px;
          text-decoration: none;

          .top {
            color: #333;
            font-weight: 400;
            font-style: normal;
            height: 25px;
            padding-top: 3px;
            text-decoration: none;
            a {
              text-decoration: none;
            }
            em {
              float: right;
            }
          }
          .text {
            color: #999;
            margin: 5px 13px 6px 0;
            height: 40px;
            clear: both;
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .btn {
            margin-top: 8px;
            a {
              text-decoration: none;
            }
            span {
              padding: 7px 20px 7px 20px;
              background: #169af3;
              margin-right: 30px;
              text-align: center;
              color: white;
              i {
                width: 16px;
                height: 16px;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
