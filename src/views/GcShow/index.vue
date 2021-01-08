<template>
  <section class="layerSongsItem-box-right-lyric-box" ref="ulCom">
    <p
      :class="{
        active:
          currentTime > allKeys[index] && currentTime < allKeys[index + 1],
      }"
      v-for="(value, name, index) in gcTimeObj"
      :key="index"
    >
      {{ value }}{{ scrollShow(index) }}
    </p>
    <section class="huakuai-box">
      <p class="huakuai"></p>
    </section>
  </section>
</template>

<script>
//获取歌词数据
let tshData = require("./tsh.json");
export default {
  name: "GcShow",
  data() {
    return {
      // 保存歌词和对应时间的对象
      gcTimeObj: {},
      //保存所有的key
      allKeys: [],
      //   currentTime: 0, //当前时间
      //   duration: 0, //总时长
      // 歌词数据(由字符串切割成的数组)
      gcArr: tshData.lyrics.split("\n"), //每一行歌词数据切成数组保存,
    };
  },
  props: {
    currentTime: Number,
    duration: Number,
  },
  watch: {
    gcArr: {
      handler() {
        //正则来匹配中括号里面的时间
        // const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;
        const regTime = /\[\d*:\d*(\.|:)\d*\]/g; //匹配时间的正则
        // let lyricsObjArr = [];
        let lyricsObj = {};

        for (let i = 0; i < this.gcArr.length; i++) {
          let item = this.gcArr[i];
          let time = item.match(regTime);
          if (!time) continue; //如果没有时间就跳过当前循环，执行下一次循环

          // 获取时间 单位秒 (毫秒可以忽略)
          let min = parseInt(time[0].match(/\[\d*/i).toString().slice(1)); //分
          let sec = parseInt(time[0].match(/:\d*/i).toString().slice(1)); // 秒
          let secs = min * 60 + sec; //总的秒数

          // 获取歌词
          let content = item.replace(time, "");
          lyricsObj[secs] = content;
        }
        // console.log("lyricsObj", lyricsObj);
        this.gcTimeObj = lyricsObj;
        this.getAllKeys(lyricsObj);
      },
      immediate: true,
    },
  },
  methods: {
    // getTime() {
    //   this.$refs.player.addEventListener("timeupdate", () => {
    //     // console.log("当前", this.$refs.player.currentTime);
    //     this.currentTime = this.$refs.player.currentTime;
    //   });
    //   this.$refs.player.addEventListener("canplay", () => {
    //     // console.log("总", this.$refs.player.duration);
    //     this.duration = this.$refs.player.duration;
    //   });
    // },
    // 保存所有的key,时间节点
    getAllKeys(obj) {
      for (let key in obj) {
        this.allKeys.push(key);
      }
    },
    // 实现歌词滚动
    scrollShow(index) {
      let { currentTime, allKeys } = this;
      if (currentTime > allKeys[index] && currentTime < allKeys[index + 1]) {
        this.$refs.ulCom.style.top = -30 * (index - 4) + "px";
      }
    },
  },
  mounted() {
    // 发送请求,获取歌词数据在展示在页面上
    // 在页面渲染完成后,拿到时间(当前时间和总时间)
    // this.$nextTick(() => {
    //   this.getTime();
    // });
  },
};
</script>

<style lang="less" scoped>
.layerSongsItem-box-right-lyric-box {
  position: relative;
  top: -16px;
  height: 385px;
}
p {
  margin-top: 10px;
  &.active {
    color: aqua;
  }
}
p.huakuai {
  position: absolute;
  opacity: 0.8;
  right: 0;
  top: 0;
  width: 8px;
  height: 35px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
