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
            <button class="hotSongs-left-box-header-button">
              <div class="hotSongs-left-box-header-button-item">
                <i class="hotSongs-left-box-header-button-item-i"></i
                ><span>播放全部</span>
              </div>
            </button>
          </div>
        </header>
        <div class="hotSongs-left-box-main">
          <div class="hotSongs-left-box-main-quanxuan">
            <label><input type="checkbox" />全选</label>
          </div>
          <ul
            class="hotSongs-left-box-main-ul"
            v-for="item in hotListcontent"
            :key="item.id"
          >
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
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
                  ><i class="hotSongs-left-box-main-li-a-span3-i1"></i>
                  <i class="hotSongs-left-box-main-li-a-span3-i2"></i>
                  <i class="hotSongs-left-box-main-li-a-span3-i3"></i
                ></span>
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
        <button class="hotSongs-left-footer-button">立即下载</button>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";
import HotList from "../../component/hotList";
// import dayjs from "dayjs";
export default {
  name: "hotSongs",
  data() {
    return {
      hotList: [],
      hotListcontent: [],
      hotListcontentName: "",
      updatahotListcontentTime: "2021-01-03",
    };
  },
  async mounted() {
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
      }
    }
  }
}
</style>