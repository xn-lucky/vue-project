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
            <div
              class="cptBig"
              v-for="(item, index) in hotSongsDataOne"
              :key="index"
            >
              <p class="cptT">
                <i class="iconfont icon-erji"></i>
                <span class="num">36.2万</span>
              </p>
              <img v-lazy="item.imgUrl" alt="" />
              <div class="cover">
                <a target="_blank" href="#"> </a>
                <div
                  class="playBtn iconfont icon-jiantou"
                  data-index="0"
                  data-id="3339907"
                ></div>
              </div>
              <div class="cptB">
                <p class="songListName">{{ item.songsName }}</p>
                <p class="songListSinger">{{ item.singer }}</p>
              </div>
            </div>
            <div class="smallDiv">
              <div
                class="cptMid"
                v-for="(item, index) in hotSongsDataTwo"
                :key="index"
              >
                <p class="cptT">
                  <span class="iconfont icon-erji"></span>
                  <span class="num">2.1万</span>
                </p>
                <img v-lazy="item.imgUrl" />
                <div class="cover">
                  <a target="_blank" href="#"> </a>
                  <div
                    class="playBtn iconfont icon-jiantou"
                    data-index="0"
                    data-id="3339907"
                  ></div>
                </div>
                <div class="cptB">
                  <p class="songListName">{{ item.songsName }}</p>
                  <p class="songListSinger">{{ item.singer }}</p>
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
            <div
              class="listItem"
              v-for="(item, index) in hotSongList"
              :key="index"
            >
              <a href="#">
                <span></span>
                <img v-lazy="item.imgUrl" alt="" />
                <div>
                  <dl class="list">
                    <dt>{{ item.Name }}</dt>
                    <dd v-for="(song, index) in item.songs" :key="index">
                      <!-- 1 . 黄凯芹 - 焚情 -->
                      {{ song.id }}. {{ song.singer }}-{{ song.songName }}
                    </dd>
                    <!-- <dd>2 . 阮言Ruany - 难生恨</dd> -->
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
                <span
                  class="MenuItem"
                  :data-type="7"
                  @mouseenter="handleEnter($event)"
                  >华语</span
                >
                <span
                  class="MenuItem"
                  :data-type="96"
                  @mouseenter="handleEnter($event)"
                  >欧美</span
                >
                <span
                  class="MenuItem"
                  :data-type="16"
                  @mouseenter="handleEnter($event)"
                  >韩国</span
                >
                <span
                  class="MenuItem"
                  :data-type="8"
                  ref="data"
                  @mouseenter="handleEnter($event)"
                  >日本</span
                >
              </div>
            </div>
            <button class="playAll">
              <span class="icon icon-play"></span><em>全部播放</em>
            </button>
          </div>
          <div class="itemContent">
            <div class="tabC">
              <ul>
                <li v-for="(item, index) in newSongItem" :key="index">
                  <a href="#">
                    <span class="songName"
                      >{{ item.artists[0].name }} - {{ item.name }}</span
                    >
                    <span class="songTips"></span>
                    <span class="songTime"
                      >{{
                        Math.floor(item.duration / 1000 / 60) > 10
                          ? Math.floor(item.duration / 1000 / 60)
                          : "0" + Math.floor(item.duration / 1000 / 60)
                      }}:{{
                        Math.floor((item.duration / 1000) % 60) > 10
                          ? Math.floor((item.duration / 1000) % 60)
                          : "0" + Math.floor((item.duration / 1000) % 60)
                      }}</span
                    >
                    <span class="iconfont" style="display: none"></span>
                    <span class="iconfont"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="page">
            <span @click="changePage($event)" data-changePage="reduce">
              &lt;
            </span>
            <span class="currentPage">{{ currentPage }}</span
            >/<span class="allPage">{{ totalPage }}</span>
            <span @click="changePage($event)" data-changePage="plus">
              &gt;
            </span>
          </div>
        </div>
        <div class="albumList">
          <div class="itemTitle">
            <h3>
              <b>精选</b>
              <span>歌单</span>
            </h3>
            <a href="#">更多</a>
          </div>
          <div class="itemContent">
            <div class="cptBigL" v-for="item in mvLarge" :key="item.id">
              <a href="#">
                <img v-lazy="item.picUrl" alt="" />
                <div class="cover">
                  <div class="playBtn iconfont icon-jiantou"></div>
                </div>
                <div class="cptB">
                  <p class="songListName">{{ item.name }}</p>
                  <p class="songListSinger">{{ item.artists[0].name }}</p>
                </div>
              </a>
            </div>
            <div class="cptMidL" v-for="item in mvSmall" :key="item.id">
              <a href="#">
                <img v-lazy="item.picUrl" alt="" />
                <div class="cover">
                  <div class="playBtn iconfont icon-jiantou"></div>
                </div>
                <div class="cptB">
                  <p class="songListName">{{ item.name }}</p>
                  <p class="songListSinger">{{ item.artists[0].name }}</p>
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
      <div class="subContentF">
        <div class="hotRadio">
          <div class="itemTitle">
            <h3>
              <b>热门</b>
              <span>电台</span>
            </h3>
            <a href="#">更多</a>
          </div>
          <div class="itemContent">
            <ul>
              <li v-for="(item, index) in djProgram" :key="index">
                <a href="#" class="">
                  <div class="cover">
                    <div class="playBtn iconfont icon-kongxinjiantou33"></div>
                  </div>
                  <div class="radioLogo">
                    <img v-lazy="item.picUrl" alt="" />
                  </div>
                  <div class="radiokind">{{ item.rcmdtext }}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hotSinger">
          <div class="itemTitle">
            <h3>
              <b>精选</b>
              <span>歌单</span>
            </h3>
            <div class="tabT">
              <span class="active" data="0">华语</span>
              <span data="1" class="">欧美</span>
              <span data="2" class="">日韩</span>
              <span data="3"><a class="more" href="#">更多</a></span>
            </div>
          </div>
          <div class="itemContent">
            <div
              class="cptMid"
              v-for="(item, index) in hotSingerMid"
              :key="index"
            >
              <a href="#">
                <img v-lazy="item.picUrl" alt="" />
                <div class="cover"></div>
                <div class="cptB">
                  <p class="songListSinger">{{ item.name }}</p>
                </div>
              </a>
            </div>
            <div class="cptSmall" v-for="item in hotSingerSmall" :key="item.id">
              <a href="#">
                <img v-lazy="item.picUrl" alt="" />
                <div class="cover"></div>
                <div class="cptB">
                  <p class="songListSinger">{{ item.name }}</p>
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
      <div class="friendLink">
        <div class="itemTitle">
          <h3>
            <b>友情</b>
            <span>链接</span>
          </h3>
          <a href="#">更多</a>
        </div>
        <div class="itemContent">
          <a v-for="(item, index) in 16" :key="index">爱美网</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getHomeBannersData,
  getSelectedHotSongs,
  gethotSongsList,
  djProgram,
  getHotSinger,
  getCommendMv,
  getNewSong,
} from "@api/home";

import Swiper, { Pagination, Autoplay, EffectFade } from "swiper";
Swiper.use([Pagination, Autoplay, EffectFade]);
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      hotSongsDataOne: [],
      hotSongsDataTwo: [],
      hotSongList: [],
      djProgram: [],
      hotSinger: [],
      hotSingerMid: [],
      hotSingerSmall: [],
      mvLarge: [],
      mvSmall: [],
      newSong: [],
      newSongItem: [],
      currentPage: 1,
      totalPage: 3,
    };
  },
  methods: {
    async handleEnter(e) {
      this.currentPage = 1;
      let type = e.target.dataset.type;
      let result = await getNewSong(type);
      this.newSong = result.slice(0, 30);
      this.newSongSlice();
    },
    newSongSlice() {
      this.newSongItem = this.newSong.slice(
        (this.currentPage - 1) * 8,
        this.currentPage * 8
      );
    },
    changePage(e) {
      if (e.target.dataset.changepage === "plus") {
        if (this.currentPage < 3) {
          this.currentPage++;
        }
      }
      if (e.target.dataset.changepage === "reduce") {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
      this.newSongSlice();
    },
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
    //获取精选歌单数据
    let hotSongsData = await getSelectedHotSongs();
    this.hotSongsDataOne = hotSongsData.selectedHotSongs.slice(0, 1);
    this.hotSongsDataTwo = hotSongsData.selectedHotSongs.slice(1, 5);
    //获取热门榜单数据
    let hotSongListData = await gethotSongsList();
    this.hotSongList = hotSongListData.selectedHotSongs;
    //获取电台数据
    let djProgramData = await djProgram();
    this.djProgram = djProgramData.djRadios.slice(0, 10);
    //热门歌手数据
    let hotSingerData = await getHotSinger();
    this.hotSingerMid = hotSingerData.artists.slice(0, 2);
    this.hotSingerSmall = hotSingerData.artists.slice(2, 5);
    //推荐MV数据
    let commendMv = await getCommendMv();
    this.mvLarge = commendMv.result.slice(0, 1);
    this.mvSmall = commendMv.result.slice(1, 3);
    //新歌首发数据
    let result = await getNewSong();
    this.newSong = result.slice(0, 30);
    this.newSongSlice();
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
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 40px;
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
              text-decoration: none;
              color: #333;
              font-size: 13px;
              .songTime {
                position: absolute;
                top: 0;
                right: 10px;
              }
            }
          }
        }
      }
    }
    .page {
      text-align: center;
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
    .itemContent {
      width: 332px;
      display: flex;
      flex-wrap: wrap;
      .cptBigL {
        width: 320px;
        height: 175px;
        margin-bottom: 12px;
        // border: 1px black solid;
        box-sizing: border-box;
        a {
          position: relative;
          display: block;
          width: 320px;
          height: 175px;
          img {
            z-index: 1;
            width: 100%;
            height: 100%;
          }
          &:hover .cover {
            display: block;
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
            display: none;
            width: 100%;
            height: 100%;
            z-index: 2;
            .playBtn {
              position: absolute;
              top: 33%;
              left: 46%;
              font-size: 45px;
              color: white;
              z-index: 9999;
              cursor: pointer;
            }
          }
          .cptB {
            width: 304px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            padding: 6px 8px;
            background: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            height: 38px;
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
              color: #cfcfcf;
              line-height: 19px;
              z-index: 5;
            }
          }
        }
      }
      .cptMidL {
        position: relative;
        width: 154px;
        height: 125px;
        margin-right: 12px;
        // border: 1px black solid;
        box-sizing: border-box;
        a {
          position: relative;
          display: block;
          width: 154px;
          height: 125px;
          img {
            z-index: 1;
            width: 100%;
            height: 84px;
          }
          &:hover .cover {
            display: block;
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
            display: none;
            width: 100%;
            height: 84px;
            z-index: 2;
            .playBtn {
              position: absolute;
              top: 16%;
              left: 39%;
              font-size: 45px;
              color: white;
              z-index: 9999;
              cursor: pointer;
            }
          }
          .cptB {
            width: 138px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            padding: 5px 0 0;
            background: 0 0;
            font-size: 14px;
            height: 38px;
            .songListName {
              width: 154px;
              color: #444;
              font-size: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .songListSinger {
              white-space: nowrap;
              // overflow: hidden;
              text-overflow: ellipsis;
              color: #888;
              font-size: 12px;
              line-height: 19px;
              z-index: 5;
            }
          }
        }
      }
    }
  }
}
.subContentF {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  .hotRadio {
    width: 650px;
    .itemTitle {
      height: 30px;
      padding-bottom: 30px;
      background: url(../../assets/images/ia_100000463.jpg) no-repeat 0 0;
      display: flex;
      justify-content: space-between;
      h3 {
        font-size: 0;
      }
      a {
        margin-top: 7px;
        color: #999;
        text-decoration: none;
      }
    }
    .itemContent {
      width: 700px;
      ul {
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        li {
          width: 100px;
          margin-right: 37px;
          margin-bottom: 25px;
          &:hover a .cover {
            display: block;
          }
          a {
            position: relative;
            outline: none;
            text-decoration: none;
            // font-size: 100%;
            .cover {
              display: none;
              position: absolute;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              visibility: visible;
              z-index: 999;
              background: rgba(0, 0, 0, 0.3);
              background-size: 100% 100%;
              .playBtn {
                position: absolute;
                top: 49%;
                left: 57%;
                margin-top: -21px;
                margin-left: -21px;
                font-size: 35px;
                color: #fff;
              }
            }
            .radioLogo {
              width: 100px;
              height: 100px;
              margin-bottom: 10px;
              margin-right: 0;
              img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
              }
            }
            .radioKind {
              width: 100px;
              text-align: center;
              line-height: 20px;
              font-size: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
  .hotSinger {
    width: 330px;
    .itemTitle {
      height: 30px;
      padding-bottom: 30px;
      background: url(../../assets/images/ia_100000474.jpg) no-repeat 0 0;
      display: flex;
      justify-content: space-between;
      h3 {
        display: block;
        width: 120px;
        height: 30px;
        margin-right: 15px;
        color: #555;
        font-size: 0;
      }
      .tabT {
        width: 210px;
        line-height: 30px;
        .more {
          margin-top: 7px;
          color: #999;
          text-decoration: none;
        }
        span {
          margin-right: 20px;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }
    .itemContent {
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      // display: float;
      // float: left;
      .cptMid {
        width: 160px;
        height: 160px;
        padding: 0;
        position: relative;
        margin: 0 5px 5px 0;
        // border: 1px black solid;
        box-sizing: border-box;
        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          outline: none;
          font-size: 100%;
          &:hover .cover {
            display: block;
          }
          img {
            z-index: 1;
            width: 100%;
            height: 100%;
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 160px;
            height: 160px;
            display: none;
            background: rgba(0, 0, 0, 0.3);
          }
          .cptB {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            padding: 6px 8px;
            font-size: 14px;
            height: 38px;
            .songListSinger {
              line-height: 50px;
              color: #fff;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
      .cptSmall {
        position: relative;
        width: 105px;
        height: 105px;
        padding: 0;
        margin: 0 5px 0 0;
        // border: 1px black solid;
        box-sizing: border-box;
        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          outline: none;
          font-size: 100%;
          &:hover .cover {
            display: block;
          }
          img {
            z-index: 1;
            width: 100%;
            height: 100%;
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 105px;
            height: 105px;
            display: none;
            background: rgba(0, 0, 0, 0.3);
          }
          .cptB {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            padding: 6px 8px;
            font-size: 14px;
            height: 38px;
            .songListSinger {
              line-height: 50px;
              color: #fff;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
.friendLink {
  width: 100%;
  .itemTitle {
    height: 30px;
    padding-bottom: 30px;
    background: url(../../assets/images/ia_100000488.jpg) no-repeat 0 0;
    display: flex;
    justify-content: space-between;
    h3 {
      display: block;
      width: 120px;
      height: 30px;
      margin-right: 15px;
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
  .itemContent {
    padding-bottom: 20px;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    a {
      overflow: hidden;
      display: block;
      width: 125px;
      height: 24px;
      line-height: 24px;
      margin-bottom: 20px;
      color: #555;
      text-decoration: none;
      outline: none;
      &:hover {
        color: #009af3;
      }
    }
  }
}
</style>