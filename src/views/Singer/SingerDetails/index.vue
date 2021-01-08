<template>
  <div class="content">
    <div class="heard">
      <div class="weizhi">
        <span class="one">我的位置</span>
        <span>></span>
        <span @click="goback">我的位置</span>
        <span>></span>
        <span>{{ detaulsName[0] }}</span>
      </div>
      <div class="imagetext">
        <div class="left">
          <img :src="image" alt="" />
          <div class="neirong">
            <div class="name">{{ detaulsName[0] }}</div>
            <div class="desc">{{ detauls.briefDesc }}</div>
            <div class="more">
              <div @click="showActive" class="text">更多内容</div>
              <div class="triangle">
                <div class="show" v-show="show">
                  {{ detauls.briefDesc }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="right">
            <span class="xianshi">相似歌手</span>
            <div class="img">
              <div class="leftimg">
                <img
                  src="https://imgessl.kugou.com/uploadpic/softhead/240/20200723/20200723174914645678.jpg"
                  alt=""
                />
                <div>Uu</div>
              </div>
              <div class="rightimg">
                <img
                  src="https://imgessl.kugou.com/uploadpic/softhead/240/20191219/20191219090750690.jpg"
                  alt=""
                />
                <div>曲肖冰</div>
              </div>
            </div>
            <span class="bottom"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="navcontent">
      <div id="navList">
        <div class="danqu" @click="dianji(1)">
          单曲
          <span :class="order === 1 ? 'active' : ''"></span>
        </div>
        <div class="zhuanji" @click="dianji(2)">
          专辑
          <span :class="order === 2 ? 'active' : ''"></span>
        </div>
        <div class="mv" @click="dianji(3)">
          MV
          <span :class="order === 3 ? 'active' : ''"></span>
        </div>
      </div>
      <div class="all" v-if="order === 1">
        <div class="contentList">
          <h4>
            <label for=""><input type="checkbox" />全选</label>
            <div class="bofang">播放</div>
          </h4>
        </div>
        <ul class="songlist">
          <li v-for="(so, index) in song.songs" :key="index">
            <div class="one">
              <input type="checkbox" />
              <span
                ><em :style="{ display: index >= 9 ? 'none' : '' }">0</em
                >{{ index + 1 }}</span
              >
              <span class="textList">{{ so.name }}</span>
            </div>
            <div class="two">
              <span
                title="播放"
                class="iconfont icon-bofang1"
                @click="bofangba(so.id)"
              ></span>
              <span title="收藏" class="iconfont icon-fenxiang"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="zhuanjiList" v-else-if="order === 2">
        <ul>
          <li v-for="hot in hotAlbums.hotAlbums" :key="hot.id">
            <img :src="hot.picUrl" />
            <span>{{ hot.name }}</span>
          </li>
        </ul>
      </div>
      <div class="mvList" v-else-if="order === 3">
        <ul>
          <li v-for="mv in mvs.mvs" :key="mv.id">
            <div class="mvimg">
              <div class="lowb"></div>
              <img :src="mv.imgurl" @click="gomv(mv.id, mv.name)" />
              <span class="iconfont icon-bofang1"></span>
            </div>
            <a class="mvname" :title="mv.name" target="_blank">{{ mv.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { SingerDescription, getSong, getzhuanji, getMvs } from '@api/singer'
export default {
  name: 'singerDetails',
  data() {
    return {
      detauls: '',
      detaulsName: '',
      show: false,
      image: '',
      order: 1,
      song: {},
      detailsId: '',
      hotAlbums: [],
      mvs: [],
    }
  },
  methods: {
    ...mapActions(['getSong']),
    showActive() {
      this.show = !this.show
    },
    async dianji(num) {
      this.order = num
      if (num === 1) {
        this.song = await getSong(this.detailsId)
      }
      if (num === 2) {
        this.hotAlbums = await getzhuanji(this.detailsId)
      }
      if (num === 3) {
        this.mvs = await getMvs(this.detailsId)
        console.log(this.mvs)
      }
    },
    goback() {
      this.$router.push({ path: '/singer' })
    },
    gomv(id, name) {
      this.$router.push({ path: '/video', query: { id, name } })
    },
    bofangba(id) {
      this.$router.push({ path: '/playersong' })
      console.log(id)
      this.getSong(id)
    },
  },
  async mounted() {
    const detailsId = this.$route.query.id
    this.detailsId = detailsId
    const detauls = await SingerDescription(detailsId)
    this.detauls = detauls
    this.detaulsName = detauls.briefDesc.split('，', 1)
    this.image = localStorage.getItem('image')
    this.song = await getSong(detailsId)
  },
}
</script>

<style lang="less" scoped>
.content {
  width: 1000px;
  margin: 0 auto;
}
.weizhi {
  padding-top: 15px;
  padding-bottom: 10px;
  display: flex;
  .one {
    color: darkgrey;
  }
  span {
    margin-right: 2px;
  }
}
.imagetext {
  width: 100%;
  height: 142px;
  border: 1px solid;
  display: flex;
  .left {
    display: flex;
    width: 780px;
    height: 142px;
    border: 1px solid rgba(red, green, blue, alpha);
    img {
      width: 142px;
      height: 142px;
    }
    .neirong {
      width: 570px;
      height: 132px;
      margin-left: 25px;
      padding-top: 15px;
      position: relative;
      .name {
        padding-bottom: 7px;
      }
      .desc {
        width: 100%;
        height: 70px;
        font-size: 12px;
        overflow: hidden;
      }
      .more {
        display: flex;
        position: absolute;
        right: 7px;
        width: 80px;
        justify-content: space-around;
        margin-top: 5px;
        .text:hover {
          text-decoration: underline;
        }
      }
    }
    .triangle {
      border-color: #57af1a #fff #fff #fff;
      border-style: solid;
      border-width: 10px 6px 0 6px;
      height: 0;
      width: 0;
      margin-top: 2px;
      .show {
        width: 300px;
        height: 260px;
        border: 1px solid;
        border-radius: 4%;
        margin-left: -200px;
        margin-top: 5px;
        box-shadow: 2px 2px 2px 1px rgba(194, 194, 194);
        background-color: rgba(255, 255, 255);
        overflow: scroll;
        padding: 10px 0px 10px 15px;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 205px;
    margin-left: 10px;
    .xianshi {
      width: 205px;
      height: 26px;
      font-size: 12px;
      font-weight: 600;
      line-height: 26px;
      padding-left: 5px;
      color: white;
      background-color: #b8b8b8;
    }
    .img {
      width: 205px;
      height: 103px;
      display: flex;
      justify-content: space-around;
      .leftimg {
        width: 100px;
        height: 103px;
        display: flex;
        font-size: 15px;
        justify-items: center;
        justify-content: space-around;
        flex-direction: column;
      }
      .rightimg {
        width: 100px;
        height: 103px;
        display: flex;
        font-size: 15px;
        justify-items: center;
        justify-content: space-around;
        flex-direction: column;
      }
      div > img {
        width: 68px;
        height: 68px;
      }
      div > img:hover {
        box-shadow: -2px -2px 1px rgba(60, 84, 196);
      }
    }
    .bottom {
      width: 100%;
      height: 15px;
      background-color: #b8b8b8;
      padding-left: 5px;
    }
  }
}
#navList {
  padding: 30px 0 4px 0;
  border-bottom: 2px solid #c2c2c2;
  height: 19px;
  display: flex;
  .danqu {
    width: 60px;
    margin-right: 30px;
    color: #5e5e5e;
    text-align: center;
    cursor: pointer;
    height: 19px;
    position: relative;
  }
  .zhuanji {
    width: 60px;
    margin-right: 30px;
    color: #5e5e5e;
    text-align: center;
    cursor: pointer;
    height: 19px;
    position: relative;
  }
  .mv {
    width: 60px;
    margin-right: 30px;
    color: #5e5e5e;
    text-align: center;
    cursor: pointer;
    height: 19px;
    position: relative;
  }
}
.active {
  border-style: dashed dashed solid dashed;
  border-color: transparent transparent #c2c2c2 transparent;
  border-width: 5px;
  position: absolute;
  bottom: -6px;
  left: 50%;
  margin-left: -5px;
  font-size: 0;
  line-height: 0;
}
.contentList {
  width: 100%;
  h4 {
    margin-top: 30px;
    width: 100%;
    height: 24px;
    position: relative;
    border-bottom: 1px solid #d4d4d4;
    padding-bottom: 5px;
    label {
      position: absolute;
      left: 0;
      margin-top: 5px;
    }
    .bofang {
      border: 1px solid;
      position: absolute;
      width: 50px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      right: 0;
      background: #1e84e4;
      color: white;
    }
  }
}
.all {
  ul {
    margin-top: 20px;
    li {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      .one {
        input {
          margin-right: 20px;
        }
        span {
          margin-right: 20px;
        }
      }
      .two {
        span {
          margin-left: 10px;
          color: #ababab;
        }
      }
    }
  }
}
.zhuanjiList {
  width: 1000px;
  height: 400px;

  ul {
    width: 1000px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 100px;
      height: 150px;

      img {
        width: 100px;
        height: 100px;
      }
      img:hover {
        box-shadow: 2px 2px 2px 2px #55a6dd;
      }
      span {
        width: 100px;
        height: 50px;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
}
.mvList {
  width: 1000px;
  height: 400px;
  ul {
    width: 1000px;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      margin-right: 20px;
      img {
        width: 122px;
        height: 92px;
      }
      img:hover {
        box-shadow: 0 0 15px #f00;
      }
      .mvname {
        width: 122px;
        height: 15px;
        display: block;
        text-align: center;
        width: 130px;
        height: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
.mvimg {
  position: relative;
  .iconfont {
    position: absolute;
    color: violet;
    z-index: 3;
    bottom: 5px;
    right: 10px;
  }
  .iconfont:hover {
    color: rgba(221, 80, 68);
  }
}
</style>