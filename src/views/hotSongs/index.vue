<template>
  <div class="hotSongs">
    <div class="hotSongs-right">
      <HotList :hotList="hotList" />
    </div>
    <div class="hotSongs-left">
      <div class="hotSongs-left-box">
        <header class="hotSongs-left-box-headerbox">
          <div class="hotSongs-left-box-header-title">
            <span class="hotSongs-left-box-header-title-name">酷狗TOP500</span>
            <span class="hotSongs-left-box-header-title-data"
              >2021-01-03 更新</span
            >
            <button class="hotSongs-left-box-header-button">
              <div class="hotSongs-left-box-header-button-item">
                <i>▶</i><span>播放全部</span>
              </div>
            </button>
          </div>
        </header>
        <div class="hotSongs-left-box-main">
          <div class="hotSongs-left-box-main-quanxuan">
            <label><input type="checkbox" />全选</label>
          </div>
          <ul class="hotSongs-left-box-main-ul">
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a href="#" class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
            <li class="hotSongs-left-box-main-li">
              <a class="hotSongs-left-box-main-li-a">
                <label class="hotSongs-left-box-main-li-a-label"
                  ><input type="checkbox"
                /></label>
                <span class="hotSongs-left-box-main-li-a-span1">1</span>
                <span class="hotSongs-left-box-main-li-a-span2"
                  >程响 - 四季予你</span
                >
                <span class="hotSongs-left-box-main-li-a-span3"
                  ><i>▶</i><i>下载🧡</i><i>分享💜</i></span
                >
                <span class="hotSongs-left-box-main-li-a-span4">4:08</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";
import HotList from "../../component/hotList";
export default {
  name: "hotSongs",
  data() {
    return {
      hotList: [],
    };
  },
  async mounted() {
    let hotList = await request("/getHotList");
    this.hotList = hotList;
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
                position: relative;
                left: -100px;
              }

              .hotSongs-left-box-main-li-a-span2 {
                position: relative;
                left: -200px;
              }
              .hotSongs-left-box-main-li-a-span3 {
                position: relative;
                left: 100px;
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
          }
        }
      }
    }
  }
}
</style>