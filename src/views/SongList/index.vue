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
              <router-link to="/playersong"
                ><span
                  ><i class="iconfont icon-kongxinjiantou33"></i
                  ><i>播放全部 </i>
                </span></router-link
              >
              <a href="javascript:void(0)"
                ><span @click="share"
                  ><i class="iconfont icon-fenxiang1"></i><i>分享</i>
                </span></a
              >
              <el-dialog
                title="分享歌曲"
                :visible.sync="shareShow"
                width="30%"
                :before-close="handleClose2"
              >
                <div class="el-dialog-box-two">
                  <a
                    ><span
                      class="el-dialog-box-two-span1"
                      style="
                        background: url( background: url(https://staticssl.kugou.com/public/root/images/share_weixin.png));
                      "
                    ></span
                  ></a>

                  <a
                    target="_blank"
                    href="https://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Ft1.kugou.com%2Fsong.html%3Fid%3D1nmRJ64xTV2&desc=&title=%E9%B9%BF%E6%99%97%20-%20%E6%80%9C%E5%9F%8E%E8%BE%9E&summary=%E6%88%91%E5%9C%A8%E9%85%B7%E7%8B%97%E5%B8%B8%E5%90%AC%E7%9A%84%E3%80%8A%E9%B9%BF%E6%99%97%20-%20%E6%80%9C%E5%9F%8E%E8%BE%9E%E3%80%8B%EF%BC%8C%E4%BD%A0%E4%B9%9F%E6%9D%A5%E5%90%AC%E5%90%AC%E5%90%A7%EF%BC%81%EF%BC%88%E6%9D%A5%E8%87%AA%20web%20%E9%85%B7%E7%8B%97%E9%9F%B3%E4%B9%90%EF%BC%89&pics=http://www.kugou.com/yy/static/images/share-cover.png&flash=&site=www.kugou.com"
                    ><span class="el-dialog-box-two-span2"></span
                  ></a>
                  <a
                    target="_blank"
                    href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https%3A%2F%2Ft1.kugou.com%2Fsong.html%3Fid%3D1ntlWd5xTV2&title=%E6%9D%A8%E5%B0%8F%E5%A3%AE%20-%20%E7%83%9F%E9%9B%A8%E6%88%90%E6%80%9D&pics=http://www.kugou.com/yy/static/images/share-cover.png&summary=%E6%88%91%E5%9C%A8%E9%85%B7%E7%8B%97%E5%B8%B8%E5%90%AC%E7%9A%84%E3%80%8A%E6%9D%A8%E5%B0%8F%E5%A3%AE%20-%20%E7%83%9F%E9%9B%A8%E6%88%90%E6%80%9D%E3%80%8B%EF%BC%8C%E4%BD%A0%E4%B9%9F%E6%9D%A5%E5%90%AC%E5%90%AC%E5%90%A7%EF%BC%81%EF%BC%88%E6%9D%A5%E8%87%AA%20web%20%E9%85%B7%E7%8B%97%E9%9F%B3%E4%B9%90%EF%BC%89"
                    ><span class="el-dialog-box-two-span3"></span
                  ></a>
                  <a
                    target="_blank"
                    href="https://service.weibo.com/share/share.php?appkey=340086183&pic=http://www.kugou.com/yy/static/images/share-cover.png&url=https%3A%2F%2Ft3.kugou.com%2Fsong.html%3Fid%3D1nuGf7bxTV2&title=%E6%88%91%E5%9C%A8%E9%85%B7%E7%8B%97%E5%B8%B8%E5%90%AC%E7%9A%84%E3%80%8A%E6%9D%A8%E5%B0%8F%E5%A3%AE%20-%20%E7%83%9F%E9%9B%A8%E6%88%90%E6%80%9D%E3%80%8B%EF%BC%8C%E4%BD%A0%E4%B9%9F%E6%9D%A5%E5%90%AC%E5%90%AC%E5%90%A7%EF%BC%81%EF%BC%88%E6%9D%A5%E8%87%AA%20web%20%E9%85%B7%E7%8B%97%E9%9F%B3%E4%B9%90%EF%BC%89#_loginLayer_1609935763639"
                    ><span class="el-dialog-box-two-span4"></span
                  ></a>
                </div>
              </el-dialog>
              <!-- <el-dialog
                title="分享歌曲"
                :visible.sync="shareShow"
                width="30%"
                :before-close="handleClose2"
                append-to-body
              > -->
              <!-- <div class="el-dialog-box-two">
                  <span class="el-dialog-box-two-span1"></span>
                  <a
                    target="_blank"
                    href="https://connect.qq.com/widget/shareqq/index.html?url=https%3A%2F%2Ft1.kugou.com%2Fsong.html%3Fid%3D1nmRJ64xTV2&desc=&title=%E9%B9%BF%E6%99%97%20-%20%E6%80%9C%E5%9F%8E%E8%BE%9E&summary=%E6%88%91%E5%9C%A8%E9%85%B7%E7%8B%97%E5%B8%B8%E5%90%AC%E7%9A%84%E3%80%8A%E9%B9%BF%E6%99%97%20-%20%E6%80%9C%E5%9F%8E%E8%BE%9E%E3%80%8B%EF%BC%8C%E4%BD%A0%E4%B9%9F%E6%9D%A5%E5%90%AC%E5%90%AC%E5%90%A7%EF%BC%81%EF%BC%88%E6%9D%A5%E8%87%AA%20web%20%E9%85%B7%E7%8B%97%E9%9F%B3%E4%B9%90%EF%BC%89&pics=http://www.kugou.com/yy/static/images/share-cover.png&flash=&site=www.kugou.com"
                    ><span class="el-dialog-box-two-span2"></span
                  ></a>
                  <a
                    target="_blank"
                    href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https%3A%2F%2Ft1.kugou.com%2Fsong.html%3Fid%3D1ntlWd5xTV2&title=%E6%9D%A8%E5%B0%8F%E5%A3%AE%20-%20%E7%83%9F%E9%9B%A8%E6%88%90%E6%80%9D&pics=http://www.kugou.com/yy/static/images/share-cover.png&summary=%E6%88%91%E5%9C%A8%E9%85%B7%E7%8B%97%E5%B8%B8%E5%90%AC%E7%9A%84%E3%80%8A%E6%9D%A8%E5%B0%8F%E5%A3%AE%20-%20%E7%83%9F%E9%9B%A8%E6%88%90%E6%80%9D%E3%80%8B%EF%BC%8C%E4%BD%A0%E4%B9%9F%E6%9D%A5%E5%90%AC%E5%90%AC%E5%90%A7%EF%BC%81%EF%BC%88%E6%9D%A5%E8%87%AA%20web%20%E9%85%B7%E7%8B%97%E9%9F%B3%E4%B9%90%EF%BC%89"
                    ><span class="el-dialog-box-two-span3"></span
                  ></a>
                  <a
                    target="_blank"
                    href="https://service.weibo.com/share/share.php?appkey=340086183&pic=http://www.kugou.com/yy/static/images/share-cover.png&url=https%3A%2F%2Ft3.kugou.com%2Fsong.html%3Fid%3D1nuGf7bxTV2&title=%E6%88%91%E5%9C%A8%E9%85%B7%E7%8B%97%E5%B8%B8%E5%90%AC%E7%9A%84%E3%80%8A%E6%9D%A8%E5%B0%8F%E5%A3%AE%20-%20%E7%83%9F%E9%9B%A8%E6%88%90%E6%80%9D%E3%80%8B%EF%BC%8C%E4%BD%A0%E4%B9%9F%E6%9D%A5%E5%90%AC%E5%90%AC%E5%90%A7%EF%BC%81%EF%BC%88%E6%9D%A5%E8%87%AA%20web%20%E9%85%B7%E7%8B%97%E9%9F%B3%E4%B9%90%EF%BC%89#_loginLayer_1609935763639"
                    ><span class="el-dialog-box-two-span4"></span
                  ></a>
                </div> -->
              <!-- <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false"
                        >取 消</el-button
                      >
                      <el-button type="primary" @click="dialogVisible = false"
                        >确 定</el-button
                      >
                    </span> -->
              <!-- </el-dialog> -->
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
      shareShow: false,
    };
  },
  created() {
    // this.loadData();
  },

  methods: {
    // 点击分享按钮
    share() {
      this.shareShow = true;
    },
    // 关闭分享对话框
    handleClose2() {
      this.shareShow = false;
    },
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
            .el-dialog__body {
              .el-dialog-box-two {
                display: flex;
                justify-content: space-around;
                margin: 0 auto;
                .el-dialog-box-two-span1 {
                  width: 62px;
                  height: 62px;
                  display: block;
                  cursor: pointer;
                  background: url(https://staticssl.kugou.com/public/root/images/share_weixin.png)
                    no-repeat left top;
                  padding: 0;
                  margin-right: 30px;
                }
                .el-dialog-box-two-span2 {
                  width: 62px;
                  height: 62px;
                  display: block;
                  cursor: pointer;
                  background: url(https://staticssl.kugou.com/public/root/images/share_qq.png)
                    no-repeat left top;
                  padding: 0;
                  margin-right: 30px;
                }
                .el-dialog-box-two-span3 {
                  width: 62px;
                  height: 62px;
                  display: block;
                  cursor: pointer;
                  background: url(https://staticssl.kugou.com/public/root/images/share_qqspace.png)
                    no-repeat left top;
                  padding: 0;
                  margin-right: 30px;
                }
                .el-dialog-box-two-span4 {
                  width: 62px;
                  height: 62px;
                  display: block;
                  cursor: pointer;
                  background: url(https://staticssl.kugou.com/public/root/images/share_weibo.png)
                    no-repeat left top;
                  padding: 0;
                  margin-right: 30px;
                }
              }
            }
            a {
              text-decoration: none;
            }
            span {
              padding: 7px 20px 7px 20px;
              background: #169af3;
              margin-right: 30px;
              text-align: center;
              color: white;

              &:hover {
                background: #0b66a3;
              }
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