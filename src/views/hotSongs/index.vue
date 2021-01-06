<template>
  <div class="hotSongs">
    <div class="hotSongs-right">
      <HotList :hotList="hotList" :changeSongs="changeSongs" />
    </div>
    <div class="hotSongs-left">
      <div class="hotSongs-left-box">
        <header class="hotSongs-left-box-headerbox">
          <div class="hotSongs-left-box-header-title">
            <span class="hotSongs-left-box-header-title-name">{{
              hotListcontentName
            }}</span>
            <span class="hotSongs-left-box-header-title-data"
              >{{ updatahotListcontentTime }} 更新</span
            >
            <button class="hotSongs-left-box-header-button" @click="toPlayer">
              <div class="hotSongs-left-box-header-button-item">
                <i class="hotSongs-left-box-header-button-item-i"></i
                ><span>播放全部</span>
              </div>
            </button>
          </div>
        </header>
        <div class="hotSongs-left-box-main">
          <div class="hotSongs-left-box-main-quanxuan">
            <label><input type="checkbox" v-model="allCheck" />全选</label>
          </div>
          <ul
            class="hotSongs-left-box-main-ul"
            v-for="item in hotListcontent"
            :key="item.id"
          >
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox" v-model="item.check"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1"
                  >{{ item.id }}
                  <i
                    v-if="item.hotIcon"
                    class="hotSongs-left-box-main-li-a-span1-i"
                  ></i
                ></span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >{{ item.singer }} - {{ item.songsName }}</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i
                    class="hotSongs-left-box-main-li-a-span3-i1"
                    @click="PlayerSongs"
                  ></i>
                  <i
                    class="hotSongs-left-box-main-li-a-span3-i2"
                    @click="downLoad"
                  ></i>
                  <el-dialog
                    title="下载歌曲"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose"
                    append-to-body
                  >
                    <div class="el-dialog-box" style="text-align: center">
                      <i class="el-dialog-box-i" style="color: orange"></i>
                      <span class="el-dialog-box-span"
                        >下载歌曲需要在酷狗音乐客户端操作</span
                      >
                    </div>
                    <div class="el-dialog-box1">
                      <span class="el-dialog-box1-span1">打开客户端</span>
                      <span class="el-dialog-box1-span2">下载新版客户端</span>
                    </div>
                    <!-- <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false"
                        >取 消</el-button
                      >
                      <el-button type="primary" @click="dialogVisible = false"
                        >确 定</el-button
                      >
                    </span> -->
                  </el-dialog>

                  <i
                    class="hotSongs-left-box-main-li-a-span3-i3"
                    @click="share"
                  ></i>
                  <el-dialog
                    title="分享歌曲"
                    :visible.sync="shareShow"
                    width="30%"
                    :before-close="handleClose2"
                    append-to-body
                  >
                    <div class="el-dialog-box-two">
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
                    </div>
                    <!-- <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false"
                        >取 消</el-button
                      >
                      <el-button type="primary" @click="dialogVisible = false"
                        >确 定</el-button
                      >
                    </span> -->
                  </el-dialog>
                </span>
                <span class="hotSongs-left-box-main-li-a-span4"
                  >0{{ Math.floor(item.songsTime / 60) }}:{{
                    Math.floor(item.songsTime % 60) >= 10
                      ? Math.floor(item.songsTime % 60)
                      : "0" + Math.floor(item.songsTime % 60)
                  }}</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hotSongs-left-footer">
        <p class="hotSongs-left-footer-p">查看更多内容,请下载客户端</p>
        <a target="_blank" href="https://download.kugou.com/download/kugou_pc"
          ><button class="hotSongs-left-footer-button">立即下载</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";
import HotList from "../../components/hotList";
// import dayjs from "dayjs";

export default {
  name: "hotSongs",
  data() {
    return {
      checkedSongs: [],
      hotList: [],
      hotListcontent: [],
      hotListcontentName: "",
      updatahotListcontentTime: "2021-01-03",
      // isAllChecked: true,
      dialogVisible: false,
      shareShow: false,
    };
  },
  async mounted() {
    document.body.style.height = "";
    document.body.style["overflow-y"] = "";
    let hotList = await request("/getHotList");
    this.hotList = hotList;
    let hotsongs = this.changeSongs(472427);
    this.hotListcontentName = hotsongs.name;
    this.hotListcontent = hotsongs.content;
    // this.$emit("changeSongs");
  },
  methods: {
    async changeSongs(HotListId) {
      // console.log(HotListId);
      let hotsongs = await request(`/getHotListSongs?HotListId=${HotListId}`);
      this.hotListcontentName = hotsongs.name;
      this.hotListcontent = hotsongs.content;
    },
    // 关闭下载对话框
    handleClose() {
      this.dialogVisible = false;
    },
    // 关闭分享对话框
    handleClose2() {
      this.shareShow = false;
    },
    // 点击全选按钮键
    checkedAll() {
      // this.selectSongs = this.hotListcontent.filter(item => item.)
      // console.log(e.target.checked);
      /* for (var i = 0; i <= this.hotListcontent.length; i++) {
          console.log(this.hotListcontent);
          this.hotListcontent[i].check = e.target.checked;
        } */
      // this.hotListcontent.forEach((item) => {
      //   item.check = e.target.checked;
      //   if (item.check === true) {
      //     this.songList.push(item);
      //     const ss = new Set(this.songList);
      //     this.songList = Array.from(ss);
      //   }
      //   // console.log(item.check);
      // });
      // console.log(this.songList);
    },
    // 点击播放按钮添加歌曲到播放页面
    PlayerSongs() {
      // console.log("111");
      this.$message.success("已成功添加歌曲到播放列表");
    },
    // 点击单选按钮键
    checkSingle(check, index, e) {
      this.hotListcontent[index].check = e.target.checked;
    },
    // 点击下载按钮
    downLoad() {
      // if (window.confirm("你确认下载此首歌曲吗？")) {
      //   window.open("#/playerSong");
      // }
      this.dialogVisible = true;
    },
    // 点击分享按钮
    share() {
      this.shareShow = true;
    },
    // 点击进入播放页面功能
    toPlayer() {
      this.$router.push("/playerSong");
    },
  },
  watch: {},
  computed: {
    // check: function () {
    //   let isAllChecked;
    //   /* if (this.hotListcontent) {
    //     this.hotListcontent.forEach((item) => {
    //       if (item.check === true) {
    //         console.log(item.check);
    //         isAllChecked = true;
    //       }
    //       if (item.check === false) {
    //         console.log(item.check);
    //         isAllChecked = false;
    //       }
    //     });
    //   } */
    //   if (this.hotListcontent) {
    //     for (var i = 0; i <= this.hotListcontent.length - 1; i++) {
    //       // console.log(this.hotListcontent[i].check);
    //       if (this.hotListcontent[i].check === false) {
    //         isAllChecked = false;
    //         return;
    //       }
    //       if (this.hotListcontent[i].check === true) {
    //         isAllChecked = true;
    //       }
    //     }
    //   }
    //   return isAllChecked;
    // },
    allCheck: {
      get() {
        this.checkedSongs = this.hotListcontent
          ? this.hotListcontent.filter((item) => item.check)
          : [];
        return this.hotListcontent
          ? this.hotListcontent.every((item) => item.check)
          : false;
      },
      set(val) {
        this.hotListcontent.map((item) => {
          item.check = val;
          return item;
        });
      },
    },
  },
  components: {
    HotList,
  },
};
</script>

<style lang="less" scoped>
.hotSongs {
  display: flex;
  margin: 40px auto;
  min-width: 1000px;
  width: 1000px !important;
  padding-left: 12px;
  .hotSongs-right {
    width: 218px;
    border: 1px solid #ccc;
  }
  .hotSongs-left {
    padding-left: 30px;
    border-left: none;
    width: 750px;
    .hotSongs-left-box {
      display: flex;
      flex-direction: column;
      .hotSongs-left-box-headerbox {
        padding-top: 15px;
        height: 57px;
        border-bottom: 1px dotted #999;
        .hotSongs-left-box-header-title {
          display: flex;
          justify-content: space-between;
          position: relative;
          top: 0;
          .hotSongs-left-box-header-title-name {
            color: #333;
            font-size: 24px;
            display: inline-block;
            font-weight: 400;
            line-height: 100%;
          }
          .hotSongs-left-box-header-title-data {
            position: relative;
            left: -140px;
            display: inline-block;
            font-size: 13px;
            color: #999;
          }
        }
        .hotSongs-left-box-header-button {
          width: 112px;
          height: 33.6px;
          background-color: rgb(21, 143, 225);
          //消除button的默认样式
          margin: 0;
          padding: 0;
          border: 1px solid transparent; //自定义边框
          outline: none; //消除默认点击蓝色边框效果
          color: white;
          .hotSongs-left-box-header-button-item {
            display: flex;
            justify-content: space-evenly;
            cursor: pointer;
            span {
              font-size: 14px;
            }
            .hotSongs-left-box-header-button-item-i {
              position: relative;
              left: 7px;
              top: 2px;
              background: url(https://www.kugou.com/yy/static/images/play_icon.png)
                no-repeat;
              display: inline-block;
              width: 14px;
            }
          }
        }
      }
      .hotSongs-left-box-main {
        display: flex;
        flex-direction: column;
        .hotSongs-left-box-main-quanxuan {
          padding-top: 20px;
          font-size: 14px;
          color: #999999;
          label {
            padding-left: 10px;
          }
          input {
            margin-right: 10px;
          }
        }
        .hotSongs-left-box-main-ul {
          .hotSongs-left-box-main-li {
            height: 55px;
            padding: 3px 0;
            border-bottom: 1px solid rgb(242, 242, 242);
            .hotSongs-left-box-main-li-a {
              display: block;
              display: flex;
              justify-content: space-between;
              line-height: 55px;
              font-size: 14px;
              color: #999;
              label {
                padding-left: 10px;
              }
              span {
                color: #333333;
              }
              .hotSongs-left-box-main-li-a-span1 {
                float: left;
                left: -100px;
                .hotSongs-left-box-main-li-a-span1-i {
                  display: inline-block;
                  width: 17px;
                  height: 10px;
                  background-image: url("https://staticssl.kugou.com/common/images/pc_temp_v2/icon_splice.png?20150814");
                  background-position: -240px -240px;
                }
              }
              .hotSongs-left-box-main-li-a-span2 {
                width: 400px;
                text-align: left;
              }

              .hotSongs-left-box-main-li-a-span3 {
                opacity: 0;
                width: 150px;
                float: left;
                text-align: right;
                .hotSongs-left-box-main-li-a-span3-i1 {
                  display: inline-block;
                  width: 14px;
                  height: 15px;
                  margin-top: 5px;
                  background-image: url("https://staticssl.kugou.com/common/images/pc_temp_v2/icon_splice.png?20150814");
                  background-position: 0 0;
                }
                .hotSongs-left-box-main-li-a-span3-i2 {
                  display: inline-block;
                  padding-left: 16px;
                  margin-left: 10px;
                  height: 13px;
                  background-image: url("https://staticssl.kugou.com/common/images/pc_temp_v2/icon_splice.png?20150814");
                  background-position: -90px 0;
                }

                .hotSongs-left-box-main-li-a-span3-i3 {
                  padding-left: 16px;
                  margin-left: 10px;
                  height: 14px;
                  background-image: url("https://staticssl.kugou.com/common/images/pc_temp_v2/icon_splice.png?20150814");
                  background-position: -298px 0;
                }
              }
              .hotSongs-left-box-main-li-a-span4 {
                color: #999999;
                padding-right: 10px;
              }
            }
          }
          .hotSongs-left-box-main-li:hover {
            background-color: rgb(245, 248, 251);
            span {
              color: rgb(21, 143, 225);
            }
            .hotSongs-left-box-main-li-a-span3 {
              opacity: 1;
            }
            .hotSongs-left-box-main-li-a-span3 i {
              cursor: pointer;
            }
          }
        }
      }
    }
    .hotSongs-left-footer {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      .hotSongs-left-footer-p {
        height: 120px;
        line-height: 120px;
        text-align: center;
        font-size: 16px;
        color: #666;
      }
      .hotSongs-left-footer-button {
        width: 108px;
        height: 36px;
        border: 0;
        margin: 39px;
        outline: none;
        line-height: 36px;
        margin-left: 20px;
        border-radius: 3px;
        vertical-align: middle;
        background-color: #169af3;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
.el-dialog-box {
  display: flex;
  justify-content: space-evenly;

  .el-dialog-box-i {
    position: relative;
    top: -6px;
    display: block;
    width: 31px;
    height: 31px;

    background: url(https://staticssl.kugou.com/public/root/images/warn.png)
      no-repeat left top;
  }
}
.el-dialog-box1 {
  display: flex;
  justify-content: space-around;
  .el-dialog-box1-span1 {
    height: 10px;
    padding: 10px;
    border-radius: 20px;
    line-height: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
  }
  .el-dialog-box1-span2 {
    height: 10px;
    padding: 10px;
    line-height: 10px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #ccc;
  }
}
.el-dialog-box-two {
  display: flex;
  justify-content: space-evenly;
  .el-dialog-box-two-span1 {
    width: 62px;
    height: 62px;
    display: block;
    cursor: pointer;
    background: url(https://staticssl.kugou.com/public/root/images/share_weixin.png)
      no-repeat left top;
  }
  .el-dialog-box-two-span2 {
    width: 62px;
    height: 62px;
    display: block;
    cursor: pointer;
    background: url(https://staticssl.kugou.com/public/root/images/share_qq.png)
      no-repeat left top;
  }
  .el-dialog-box-two-span3 {
    width: 62px;
    height: 62px;
    display: block;
    cursor: pointer;
    background: url(https://staticssl.kugou.com/public/root/images/share_qqspace.png)
      no-repeat left top;
  }
  .el-dialog-box-two-span4 {
    width: 62px;
    height: 62px;
    display: block;
    cursor: pointer;
    background: url(https://staticssl.kugou.com/public/root/images/share_weibo.png)
      no-repeat left top;
  }
}
</style>