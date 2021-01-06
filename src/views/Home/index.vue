<template>
  <div class="mainPage">
    <!-- 轮播图 -->
    <div class="banners">
      <div class="swiper-container" ref="homeSwi">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
            <!-- 新加的 -->
            <a :style="'background-image:url(' + banner.imgUrl + ')'"></a>
          </div>
        </div>
        <!-- 小点点 -->
        <ul class="pagin swiper-pagination" v-if="banners">
          <li v-for="(item, index) in banners.length" :key="index"></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="subContent">
        <div class="selectSongList">
          <div class="itemTitle">
            <h3>
              <b>精选</b>
              <span>歌单</span>
            </h3>
            <a href="#">更多</a>
          </div>
          <div class="itemContent">
            <div class="cptBig">
              <p class="cptT">
                <i class="iconfont icon-erji"></i>
                <span class="num">36.2万</span>
              </p>
              <img src="@assets/images/ia_100000003.jpg" alt="" />
              <div class="cover">
                <a target="_blank" href="#"> </a>
                <div
                  class="playBtn iconfont icon-jiantou"
                  data-index="0"
                  data-id="3339907"
                ></div>
              </div>
              <div class="cptB">
                <p class="songListName">乡村之旅：安静惬意·与自然同在</p>
                <p class="songListSinger">蔓若</p>
              </div>
            </div>
            <div class="smallDiv">
              <div class="cptMid">
                <p class="cptT">
                  <span class="iconfont icon-erji"></span>
                  <span class="num">2.1万</span>
                </p>
                <img src="@assets/images/ia_100000004.jpg" />
                <div class="cover">
                  <a target="_blank" href="#"> </a>
                  <div
                    class="playBtn iconfont icon-jiantou"
                    data-index="0"
                    data-id="3339907"
                  ></div>
                </div>
                <div class="cptB">
                  <p class="songListName">通勤必备！独享耳机里欢快的小轻松</p>
                  <p class="songListSinger">高珊珊</p>
                </div>
              </div>
              <div class="cptMid">
                <p class="cptT">
                  <span class="iconfont icon-erji"></span>
                  <span class="num">2.1万</span>
                </p>
                <img src="@assets/images/ia_100000004.jpg" />
                <div class="cover">
                  <a target="_blank" href="#"> </a>
                  <div
                    class="playBtn iconfont icon-jiantou"
                    data-index="0"
                    data-id="3339907"
                  ></div>
                </div>
                <div class="cptB">
                  <p class="songListName">通勤必备！独享耳机里欢快的小轻松</p>
                  <p class="songListSinger">高珊珊</p>
                </div>
              </div>
              <div class="cptMid">
                <p class="cptT">
                  <span class="iconfont icon-erji"></span>
                  <span class="num">2.1万</span>
                </p>
                <img src="@assets/images/ia_100000004.jpg" />
                <div class="cover">
                  <a target="_blank" href="#"> </a>
                  <div
                    class="playBtn iconfont icon-jiantou"
                    data-index="0"
                    data-id="3339907"
                  ></div>
                </div>
                <div class="cptB">
                  <p class="songListName">通勤必备！独享耳机里欢快的小轻松</p>
                  <p class="songListSinger">高珊珊</p>
                </div>
              </div>
              <div class="cptMid">
                <p class="cptT">
                  <span class="iconfont icon-erji"></span>
                  <span class="num">2.1万</span>
                </p>
                <img src="@assets/images/ia_100000004.jpg" />
                <div class="cover">
                  <a target="_blank" href="#"> </a>
                  <div
                    class="playBtn iconfont icon-jiantou"
                    data-index="0"
                    data-id="3339907"
                  ></div>
                </div>
                <div class="cptB">
                  <p class="songListName">通勤必备！独享耳机里欢快的小轻松</p>
                  <p class="songListSinger">高珊珊</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hotSongList">
          <div class="itemTitle">
            <h3>
              <b>热门</b>
              <span>榜单</span>
            </h3>
            <a href="#">更多</a>
          </div>
          <div class="itemContent">
            <div class="listItem">
              <a href="#">
                <span></span>
                <img src="@assets/images/ia_100000008.jpg" alt="" />
                <div>
                  <dl class="list">
                    <dt>酷狗飙升榜</dt>
                    <dd>1 . 黄凯芹 - 焚情</dd>
                    <dd>2 . 阮言Ruany - 难生恨</dd>
                  </dl>
                </div>
              </a>
            </div>
            <div class="listItem">
              <a href="#">
                <span></span>
                <img src="@assets/images/ia_100000008.jpg" alt="" />
                <div>
                  <dl class="list">
                    <dt>酷狗飙升榜</dt>
                    <dd>1 . 黄凯芹 - 焚情</dd>
                    <dd>2 . 阮言Ruany - 难生恨</dd>
                  </dl>
                </div>
              </a>
            </div>
            <div class="listItem">
              <a href="#">
                <span></span>
                <img src="@assets/images/ia_100000008.jpg" alt="" />
                <div>
                  <dl class="list">
                    <dt>酷狗飙升榜</dt>
                    <dd>1 . 黄凯芹 - 焚情</dd>
                    <dd>2 . 阮言Ruany - 难生恨</dd>
                  </dl>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hardWare">
        <a href="#" class="bannerLink">
          <img class="bannerImg" src="@assets/images/ia_100000011.jpg" alt="" />
        </a>
      </div>
      <div class="subContentM">
        <div class="newSongList">
          <div class="itemTitle">
            <div class="massBlock">
              <h3>
                <b>精选</b>
                <span>歌单</span>
              </h3>
              <div class="tabT">
                <span class="MenuItem" data="0">华语</span>
                <span class="MenuItem" data="1">欧美</span>
                <span class="MenuItem" data="2">韩国</span>
                <span class="MenuItem active" data="3">日本</span>
              </div>
            </div>
            <button class="playAll">
              <span class="icon icon-play"></span><em>全部播放</em>
            </button>
          </div>
          <div class="itemContent">
            <div class="tabC">
              <ul>
                <li>
                  <a href="#">
                    <span>杨小壮 - 烟雨成思</span>
                    <span class="songtips"></span>
                    <span class="songTime">03:10</span>
                    <span class="iconfont" style="display: none"></span>
                    <span class="iconfont"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pages"></div>
        </div>
        <div class="albumList">
          <div class="itemTitle">
            <h3>
              <b>精选</b>
              <span>歌单</span>
            </h3>
            <a href="#">更多</a>
          </div>
          <div class="itemContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeBannersData } from "@api/home";
import Swiper, { Pagination, Autoplay, EffectFade } from "swiper";
Swiper.use([Pagination, Autoplay, EffectFade]);
export default {
  name: "Home",
  data() {
    return {
      banners: [],
    };
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        new Swiper(this.$refs.homeSwi, {
          loop: true,
          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          effect: "fade",
          // 自动轮播
          autoplay: {
            delay: 2000, // 间隔时间
            disableOnInteraction: false, // 当用户点击下一页之后，轮播继续
          },
        });
      });
    },
  },
  async mounted() {
    //获取轮播图数据
    let bannerData = await getHomeBannersData();
    this.banners = bannerData.banners;
  },
};
</script>

<style lang="less" scoped>
.banners {
  .swiper-container {
    height: 445px;
    a {
      width: 100%;
      height: 100%;
      display: inline-block;
      padding: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-origin: top;
      background-size: contain;
      transform: scale(1.5);
    }
    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      background-color: #fff;
    }
  }
  .pagin {
    width: 320px;
    height: 30px;
    position: absolute;
    display: flex;
    bottom: 4px;
    left: 40%;
    z-index: 6;
    align-items: center;
    justify-content: space-evenly;
    /deep/.swiper-pagination-bullet,
    li {
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      margin: 0 10px;
    }
  }
}
.content {
  width: 1000px;
  // height: 500px;
  margin: 0 auto;
  border: 1px pink solid;
  .subContent {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.selectSongList {
  width: 660px;
  display: flex;
  flex-direction: column;
  .itemTitle {
    height: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(../../assets/images/ia_100000067.jpg) no-repeat 0 0;
    h3 {
      display: block;
      width: 120px;
      margin-right: 25px;
      color: #555;
      font: 30px \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
      font-size: 0;
      b {
        font-weight: 400;
        color: #009af3;
      }
    }
  }
}
.selectSongList .itemContent {
  display: flex;
  .cptBig {
    width: 325px;
    height: 325px;
    margin-right: 5px;
    position: relative;
    &:hover .cover {
      // visibility: visible;
      opacity: 0.5;
    }
    &:hover .cover .playBtn {
      display: block;
    }
    .cover {
      width: 325px;
      height: 325px;
      background: rgba(0, 0, 0, 1);
      // visibility: hidden;
      opacity: 0;
      z-index: 3;
      position: absolute;
      top: 0;
      left: 0;
      .playBtn {
        position: absolute;
        top: 300px;
        left: 300px;
        z-index: 99999999;
        width: 36px;
        height: 36px;
        display: none;
        margin-left: -18px;
        margin-top: -18px;
        color: #fff;
        font-size: 28px;
        z-index: 5;
      }
    }
    .cptT {
      position: absolute;
      top: 0;
      right: 0;
      width: 152px;
      padding-right: 8px;
      height: 30px;
      line-height: 30px;
      background: url(../../assets/images/cptTBg.png) no-repeat right center;
      color: #fff;
      text-align: right;
      z-index: 2;
    }
    img {
      z-index: 1;
      width: 100%;
      height: 100%;
    }
    .cptB {
      width: 309px;
      padding: 6px 8px;
      background: rgba(0, 0, 0, 0.5);
      font-size: 14px;
      height: 38px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      .songListName {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
        line-height: 19px;
      }
      .songListSinger {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
        line-height: 19px;
      }
    }
  }
}

.selectSongList .itemContent .smallDiv {
  width: 330px;
  height: 330px;
  display: flex;
  flex-wrap: wrap;
  .cptMid {
    width: 160px;
    height: 160px;
    flex-shrink: 0;
    margin: 0 5px 5px 0;
    position: relative;
    &:hover .cover {
      // visibility: visible;
      opacity: 0.5;
    }
    &:hover .cover .playBtn {
      display: block;
    }
    .cover {
      width: 160px;
      height: 160px;
      background: rgba(0, 0, 0, 1);
      // visibility: hidden;
      opacity: 0;
      z-index: 3;
      position: absolute;
      top: 0;
      left: 0;
      .playBtn {
        position: absolute;
        top: 135px;
        left: 130px;
        width: 36px;
        height: 36px;
        display: none;
        margin-left: -18px;
        margin-top: -18px;
        color: #fff;
        font-size: 28px;
        z-index: 5;
      }
    }
    .cptT {
      position: absolute;
      top: 0;
      right: 0;
      width: 152px;
      padding-right: 8px;
      height: 30px;
      line-height: 30px;
      background: url(../../assets/images/cptTBg.png) no-repeat right center;
      color: #fff;
      text-align: right;
      z-index: 2;
    }
    .cptB {
      width: 144px;
      padding: 6px 8px;
      background: rgba(0, 0, 0, 0.5);
      font-size: 14px;
      height: 38px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      .songListName {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
        line-height: 19px;
      }
      .songListSinger {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #fff;
        line-height: 19px;
      }
    }
  }
}
.selectSongList .itemContent .cptMid img {
  z-index: 1;
  width: 100%;
  height: 100%;
}
.selectSongList .itemContent .cptMid .cptB {
  width: 144px;
  padding: 6px 8px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  height: 38px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
}
.hotSongList {
  width: 320px;
  display: flex;
  flex-direction: column;
  .itemTitle {
    height: 30px;
    padding-bottom: 30px;
    background: url(../../assets/images/ia_100000083.jpg) no-repeat 0 0;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 0;
    }
  }
  .itemContent {
    .listItem {
      width: 320px;
      height: 98px;
      margin-bottom: 15px;
      background-color: #f6f6f6;
      a {
        display: flex;
        text-decoration: none;
        img {
          width: 98px;
          height: 98px;
        }
        dl {
          width: 200px;
          height: 68px;
          padding: 15px 10px;
          font-size: 14px;
          overflow: hidden;
          dt {
            line-height: 24px;
            color: #333;
            font-weight: 700;
          }
          dd {
            width: 180px;
            line-height: 24px;
            font-size: 14px;
            color: #555;
          }
        }
      }
    }
  }
}
.hardWare {
  margin-top: 10px;
  a {
    text-decoration: none;
    outline: none;
    img {
      outline: none;
      border: 0;
    }
  }
}
.subContentM {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  .newSongList {
    overflow: hidden;
    width: 650px;
    height: 375px;
    .itemTitle {
      background: url(../../assets/images/ia_100000090.jpg) no-repeat 0 0;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      margin-bottom: 10px;
      height: 30px;
      .massBlock {
        h3 {
          display: inline-block;
          width: 120px;
          height: 30px;
          margin-right: 25px;
          color: #555;
          font-size: 0;
        }
        .tabT {
          display: inline-block;
          line-height: 30px;
          .MenuItem {
            margin-right: 20px;
            cursor: pointer;
            font-size: 14px;
          }
        }
      }

      .playAll {
        border: 1px solid #dbdbdb;
        border-radius: 2px;
        padding: 5px 10px;
        color: #555;
        background: 0 0;
      }
    }
    .itemContent {
      position: relative;
      height: 280px;
      overflow: hidden;
      .tabC {
        ul {
          display: block;
          z-index: 2;
          li {
            height: 35px;
            line-height: 35px;
            a {
              position: relative;
              overflow: hidden;
              display: block;
              z-index: 999;
              padding: 0 10px;
              color: #333;
            }
          }
        }
      }
    }
  }
  .albumList {
    width: 320px;
    .itemTitle {
      background: url(../../assets/images/ia_100000459.jpg) no-repeat 0 0;
      padding-bottom: 20px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      h3 {
        display: block;
        width: 120px;
        height: 30px;
        margin-right: 25px;
        color: #555;
        font-size: 0;
      }
      a {
        margin-top: 7px;
        color: #999;
        text-decoration: none;
        font-size: 13px;
      }
    }
  }
}
</style>

