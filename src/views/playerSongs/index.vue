<template>
  <div class="playerSongs">
    <div class="playerSongsItem">
      <div class="playerSongsItem-box">
        <div class="playerSongsItem-box-left">
          <div class="playerSongsItem-box-left-img">
            <!-- src="https://www.kugou.com/yy/static/images/play/default.jpg" -->
            <img :src="checkedSongs1[thisSongsId].songimg" alt="" />
          </div>
          <div class="playerSongsItem-box-left-botton">
            <span>下载这首歌曲</span>
          </div>
          <div class="playerSongsItem-box-left-text">
            <u>外部播放此歌曲></u>
          </div>
        </div>
        <div class="layerSongsItem-box-right">
          <div class="layerSongsItem-box-right-title">
            <p>{{ checkedSongs1[thisSongsId].songsName }}</p>
          </div>
          <div class="layerSongsItem-box-right-singer">
            <p><span>专辑:</span> {{ checkedSongs1[thisSongsId].zhuanji }}</p>
            <p><span>歌手:</span> {{ checkedSongs1[thisSongsId].singer }}</p>
          </div>
          <div class="layerSongsItem-box-right-lyric">
            <GcShow
              :currentTime="currentTime"
              :duration="duration"
              :lyrics="checkedSongs1[thisSongsId].lyrics"
            />
            <!-- <section class="layerSongsItem-box-right-lyric-box">
              <p>词:小壮</p>
              <p>曲:杨林聪</p>
              <p>混音:和平</p>
              <p>编曲:张川</p>
              <p>录制:杨小壮音乐工作室</p>
              <p>OP:嗨库文化</p>
              <p>(未经著作权人许可,不得翻唱、翻录或使用)</p>
              <p>寒风起 听窗外细声雨</p>
              <p>拿起笔 想画出一个你</p>
              <p>脑里模糊的记忆</p>
              <p>伴着黑白又清晰</p>
              <p>彩色照片还在我手里</p>
              <section class="huakuai-box">
                <p class="huakuai"></p>
              </section>
            </section> -->
          </div>
        </div>
      </div>
    </div>
    <div class="playerSongsFooter">
      <section class="playerSongsFooter-playerBox">
        <div class="playerSongsFooter-playerBox1" @click="preSongs"></div>
        <!-- <div
          :class="{
            playerSongsFooterPlayerBox2: !isPlaying,
            playerSongsFooterPlayerBoxBone: isPlaying,
          }"
          @click="isPlay"
        ></div> -->
        <!-- <div class="playerSongsFooter-playerBox3" @click="nextSongs"></div> -->
        <div
          :class="{
            playerSongsFooterPlayerBox2: !isPlay,
            playerSongsFooterPlayerBoxBone: isPlay,
          }"
          @click="playMusic"
        ></div>
        <div class="playerSongsFooter-playerBox3" @click="nextSongs"></div>
      </section>
      <section class="playerSongsFooter-playerMain">
        <img :src="checkedSongs1[thisSongsId].songimg" alt="" />
        <div class="playerSongsFooter-playerMain-box">
          <p class="playerSongsFooter-playerMain-box1">
            <span>{{ checkedSongs1[thisSongsId].songsName }} </span>
            <span>{{ filterCurrentTime }}/{{ filterDuration }}</span>
            <!-- <span class="playerSongsFooter-playerMain-box1-span2"
              >0{{ Math.floor(checkedSongs1[0].songsTime / 60) }}:{{
                Math.floor(checkedSongs1[0].songsTime % 60) >= 10
                  ? Math.floor(checkedSongs1[0].songsTime % 60)
                  : "0" + Math.floor(checkedSongs1[0].songsTime % 60)
              }}</span
            > -->
          </p>
          <p class="playerSongsFooter-playerMain-box2">
            <span class="playerSongsFooter-playerMain-box2-span1"></span>
            <span
              class="playerSongsFooter-playerMain-box2-span3"
              :style="{ width: currentWidth + '%' }"
            >
              <span class="playerSongsFooter-playerMain-box2-span2"></span>
            </span>
          </p>
        </div>
      </section>
      <section class="playerSongsFooter-playerMain-right">
        <div class="playerSongsFooter-playerMain-right-box">
          <span class="playerSongsFooter-playerMain-right-box1"></span>
          <span class="playerSongsFooter-playerMain-right-box2"></span>
          <span class="playerSongsFooter-playerMain-right-box3"></span>
          <span class="playerSongsFooter-playerMain-right-box4"></span>
          <div
            class="playerSongsFooter-playerMain-right-box5-box"
            v-show="isShow"
          >
            <p class="playerSongsFooter-playerMain-right-box5-box-p1">
              <span class="playerSongsFooter-playerMain-right-box5-box-p1"
                >播放队列/{{ checkedSongs1.length }}
                <span
                  class="playerSongsFooter-playerMain-right-box5-box-p1-box"
                >
                  <span
                    class="playerSongsFooter-playerMain-right-box5-box-p1-span2"
                  ></span>
                  |<span
                    @click="closeHandle"
                    class="playerSongsFooter-playerMain-right-box5-box-p1-span3"
                  ></span>
                </span>
              </span>

              <span
                class="playerSongsFooter-playerMain-right-box5-box2"
                v-for="item in checkedSongs1"
                :key="item.id"
              >
                <span>{{ item.id }}</span>
                <span>{{ item.songsName }}</span>
                <span>{{ item.singer }}</span>
                <span
                  >0{{ Math.floor(item.songsTime / 60) }}:{{
                    Math.floor(item.songsTime % 60) >= 10
                      ? Math.floor(item.songsTime % 60)
                      : "0" + Math.floor(item.songsTime % 60)
                  }}</span
                >
              </span>
            </p>
          </div>
          <span class="playerSongsFooter-playerMain-right-box5" @click="touch">
            <span class="playerSongsFooter-playerMain-right-box5-span">{{
              checkedSongs1.length
            }}</span>
          </span>
        </div>
      </section>
      <!-- xn加的 -->
      <!-- <audio
        style="display: none"
        ref="player"
        controls
        autoplay
        :src="checkedSongs1[0].songurl"
      ></audio>
    </div> -->
      <audio
        id="audio"
        ref="player"
        :src="this.checkedSongs1[thisSongsId].songurl"
        autoplay
        muted
      ></audio>
      <!-- controls="controls" -->
      <!-- <audio :src="checkedSongs1[0].songurl" controls="controls" autoplay></audio> -->
    </div>
  </div>
</template>

<script>
import GcShow from "@views/GcShow";
import { mapState } from "vuex";
export default {
  name: "playerSongs",
  data() {
    return {
      currentTime: 0,
      duration: 0,
      isPlay: true,
      isShow: false,
      thisSongsId: 0,
      // isPlaying: true,
    };
  },
  computed: {
    ...mapState({
      checkedSongs1: (state) => state.hotList.checkedSongs1,
    }),
    filterDuration() {
      return this.filter(this.duration);
    },
    filterCurrentTime() {
      return this.filter(this.currentTime);
    },
    currentWidth() {
      let { currentTime, duration } = this;
      // console.log(Math.floor((currentTime / duration) * 100));
      return Math.floor((currentTime / duration) * 100);
    },
  },
  components: {
    GcShow,
  },
  methods: {
    touch() {
      this.isShow = !this.isShow;
    },
    /* isPlay() {
      var audio = document.querySelector("#audio");
      // console.dir(audio);
      if (this.isPlaying) {
        audio.pause();
        this.isPlaying = false;
        return;
      }
      if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
        return;
      }
    }, */
    // 点击下一首
    nextSongs() {
      // var audio = document.querySelector("#audio");
      this.thisSongsId++;
      this.isPlay = true;
      if (this.thisSongsId === this.checkedSongs1.length) {
        this.thisSongsId = 0;
      }
    },
    // 点击上一首
    preSongs() {
      if (this.thisSongsId === 0) {
        this.thisSongsId = this.checkedSongs1.length;
      }
      this.thisSongsId--;
      this.isPlay = true;
    },
    /*  stop() {
      var audio = document.querySelector("#audio");
      if (!this.isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      }
    }, */
    //点击播放音乐
    playMusic() {
      if (this.isPlay) {
        this.$refs.player.pause();
      } else {
        this.$refs.player.play();
      }
      this.isPlay = !this.isPlay;
    },
    //处理显示时间
    filter(time) {
      // time是传过来的时间,要的是分和秒 格式mm:ss
      // 对时间做处理
      time = Math.floor(time);
      // 获的分钟 向下取整
      var min = Math.floor(time / 60);
      var sec = time % 60; //取余

      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      return min + ":" + sec;
    },
    // 获取显示时间
    getTime() {
      this.$refs.player.addEventListener("timeupdate", () => {
        // console.log("当前", this.$refs.player.currentTime);
        this.currentTime = this.$refs.player.currentTime;
      });
      this.$refs.player.addEventListener("canplay", () => {
        // console.log("总", this.$refs.player.duration);
        this.duration = this.$refs.player.duration;
      });
    },
    // 关闭列表对话框
    closeHandle() {
      this.isShow = false;
    },
  },
  mounted() {
    document.body.style.height = "100vh";
    document.body.style["overflow-y"] = "hidden";
    this.$nextTick(() => {
      this.getTime();
    });
  },
};
</script>

<style lang="less" scoped>
.playerSongs {
  height: 1000px;
  background-image: url(http://img1.juimg.com/160625/330890-16062515300184.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .playerSongsItem {
    margin: auto;
    min-width: 1000px;
    width: 1000px;
    .playerSongsItem-box {
      display: flex;
      justify-content: space-around;
    }
    .playerSongsItem-box-left {
      .playerSongsItem-box-left-img {
        img {
          width: 260px;
          height: 260px;
          margin: 25px 0;
        }
      }
      .playerSongsItem-box-left-botton {
        display: block;
        width: 230px;
        height: 50px;
        outline: none;
        color: rgb(186, 299, 245);
        border-radius: 30px;
        cursor: pointer;
        text-align: center;
        border: 1px solid rgb(143, 200, 228);
        background-color: rgba(0, 0, 0, 0.2);
        margin: 0 15px;
        span {
          font-size: 20px;
          font-weight: 20;
          line-height: 50px;
        }
      }
      .playerSongsItem-box-left-text {
        text-align: center;
        padding: 10px 0;
      }
    }
    .layerSongsItem-box-right {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      .layerSongsItem-box-right-title {
        font-size: 24px;
        font-style: normal;
        color: #fff;
        width: 460px;
      }
      .layerSongsItem-box-right-singer {
        display: flex;
        margin: 10px 0;
        p {
          font-size: 15px;
          margin-right: 10px;
          width: 200px;
          line-height: 24px;
          overflow: hidden;
          color: #fff;
          span {
            opacity: 0.6;
            margin-right: 10px;
          }
        }
      }
      .layerSongsItem-box-right-lyric {
        font-size: 15px;
        opacity: 0.5;
        color: #fff;
        overflow: hidden;
        // .layerSongsItem-box-right-lyric-box {
        //   position: relative;
        //   top: -16px;
        //   height: 385px;
        // }
        // p {
        //   margin-top: 10px;
        // }
        // p.huakuai {
        //   position: absolute;
        //   opacity: 0.8;
        //   right: 0;
        //   top: 0;
        //   width: 8px;
        //   height: 35px;
        //   background-color: #fff;
        //   border-radius: 10px;
        // }
      }
    }
  }
  .playerSongsFooter {
    min-width: 1000px;
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 13px;

    width: 100%;

    background-color: rgba(0, 0, 0, 0.4);
    height: 80px;
    .playerSongsFooter-playerBox {
      width: 170px;
      display: flex;
      align-items: center;

      justify-content: space-around;
      .playerSongsFooter-playerBox1 {
        width: 36px;
        height: 36px;
        cursor: pointer;

        background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
        background-position: 0 -143px;
        border-radius: 50%;
      }
      .playerSongsFooter-playerBox1:hover {
        background-position: -36px -143px;
      }
      .playerSongsFooterPlayerBox2 {
        width: 60px;
        height: 60px;
        cursor: pointer;
        background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
        border-radius: 50%;
      }
      .playerSongsFooterPlayerBoxBone {
        width: 60px;
        height: 60px;
        background-position: 0 -60px;
        cursor: pointer;
        background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
        border-radius: 50%;
      }
      .playerSongsFooterPlayerBoxBone:hover {
        background-position: -60px -60px;
      }
      .playerSongsFooterPlayerBox2:hover {
        background-position: -60px 0;
      }
      .playerSongsFooter-playerBox3 {
        width: 36px;
        height: 36px;
        cursor: pointer;
        background-position: -144px -143px;
        background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
        border-radius: 50%;
      }
      .playerSongsFooter-playerBox3:hover {
        background-position: -180px -143px;
      }
    }
    .playerSongsFooter-playerMain {
      width: 400px;
      height: 80px;
      align-items: center;
      display: flex;
      img {
        width: 60px;
        height: 60px;
      }
      .playerSongsFooter-playerMain-box {
        display: flex;
        flex-direction: column;
        .playerSongsFooter-playerMain-box1 {
          display: flex;
          padding-top: 18px;
          height: 24px;
          width: 529px;
          color: #fff;
          justify-content: space-around;
          color: #fff;
          margin: -6px -50px;
          .playerSongsFooter-playerMain-box1-span2 {
            position: relative;
            left: 62px;
          }
        }
        .playerSongsFooter-playerMain-box2 {
          height: 24px;
          width: 370px;
          // background-color: #fff;
          margin-left: 20px;
          position: relative;
          .playerSongsFooter-playerMain-box2-span1 {
            display: block;
            width: 370px;
            height: 5px;
            margin: 10px 0;
            border-radius: 10px;
            background-color: rgba(171, 223, 220);
          }

          .playerSongsFooter-playerMain-box2-span3 {
            // width: 30px;
            height: 5px;
            position: absolute;
            top: 10px;
            background-color: #4fa6e3;
            border-radius: 10px;
            .playerSongsFooter-playerMain-box2-span2 {
              position: absolute;
              right: -3.5px;
              top: -1px;
              display: block;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background-color: #fff;
            }
          }
        }
      }
    }
    .playerSongsFooter-playerMain-right {
      width: 300px;
      display: flex;
      align-items: center;
      .playerSongsFooter-playerMain-right-box {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        position: relative;
        span {
          margin-left: 20px;
        }
        .playerSongsFooter-playerMain-right-box1 {
          width: 16px;
          height: 16px;
          background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
          background-repeat: no-repeat;
          background-position: -64px -195px;
          cursor: pointer;
        }
        .playerSongsFooter-playerMain-right-box1:hover {
          background-position: -80px -195px;
        }
        .playerSongsFooter-playerMain-right-box2 {
          width: 16px;
          height: 16px;
          cursor: pointer;
          background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
          background-repeat: no-repeat;
          background-position: -64px -179px;
        }
        .playerSongsFooter-playerMain-right-box2:hover {
          background-position: -80px -179px;
        }
        .playerSongsFooter-playerMain-right-box3 {
          width: 15px;
          height: 15px;

          background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
          background-repeat: no-repeat;
          background-position: -240px -32px;
          cursor: pointer;
        }
        .playerSongsFooter-playerMain-right-box3:hover {
          background-position: -256px -32px;
        }
        .playerSongsFooter-playerMain-right-box4 {
          width: 15px;
          height: 15px;
          background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
          background-repeat: no-repeat;
          background-position: -240px 0;
          cursor: pointer;
        }
        .playerSongsFooter-playerMain-right-box4:hover {
          background-position: -256px 0;
        }
        .playerSongsFooter-playerMain-right-box5-box {
          overflow: auto;
          position: absolute;
          top: -332px;
          left: -165px;
          width: 400px;
          height: 300px;
          background-color: rgba(42, 46, 53, 0.9);

          .playerSongsFooter-playerMain-right-box5-box-p1 {
            width: 380px;
            color: #fff;
            float: left;
            padding: 10px 0;
            flex-direction: column;
            .playerSongsFooter-playerMain-right-box5-box-p1-box {
              width: 117px;
              float: right;
              .playerSongsFooter-playerMain-right-box5-box-p1-span2 {
                cursor: pointer;
                background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
                background-repeat: no-repeat;
                float: left;
                display: block;
                width: 16px;
                height: 16px;
                margin-right: 20px;
                background-position: -240px -64px;
              }
              .playerSongsFooter-playerMain-right-box5-box-p1-span3 {
                cursor: pointer;
                background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
                background-repeat: no-repeat;
                float: right;
                display: block;
                width: 16px;
                height: 16px;
                margin-right: 20px;
                background-position: -240px -96px;
              }
            }
            .playerSongsFooter-playerMain-right-box5-box2 {
              display: flex;
              justify-content: space-evenly;
              width: 100%;
            }
          }
        }
        .playerSongsFooter-playerMain-right-box5 {
          width: 15px;
          height: 15px;
          background-image: url("https://www.kugou.com/yy/static/images/play/btn.png");
          background-repeat: no-repeat;
          background-position: 0 -120px;
          cursor: pointer;
          position: absolute;
          right: 66px;
          top: -3px;
          width: 60px;
          height: 23px;
          background-position: 0 -120px;
          .playerSongsFooter-playerMain-right-box5-span {
            position: absolute;
            left: 10px;
            top: 3px;
            color: #fff;
          }
        }
        .playerSongsFooter-playerMain-right-box5:hover {
          background-position: -61px -120px;
          .playerSongsFooter-playerMain-right-box5-span {
            color: rgb(31, 163, 220);
          }
        }
      }
    }
  }
}
</style>