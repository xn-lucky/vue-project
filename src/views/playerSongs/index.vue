<template>
  <div class="playerSongs">
    <div class="playerSongsItem">
      <div class="playerSongsItem-box">
        <div class="playerSongsItem-box-left">
          <div class="playerSongsItem-box-left-img">
            <img
              src="https://imgessl.kugou.com/stdmusic/20201231/20201231141702225046.jpg"
              alt=""
            />
          </div>
          <div class="playerSongsItem-box-left-botton">
            <button>下载这首歌曲</button>
          </div>
          <div class="playerSongsItem-box-left-text"><a>外部播放此歌曲</a></div>
        </div>
        <div class="layerSongsItem-box-right">
          <div class="layerSongsItem-box-right-title"><p>烟雨成思</p></div>
          <div class="layerSongsItem-box-right-singer">
            <p>专辑: 烟雨成思</p>
            <p>歌手:杨小壮</p>
          </div>
          <div class="layerSongsItem-box-right-singer">
            <p>词:杨小壮</p>
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
          </div>
        </div>
      </div>
    </div>
    <div class="playerSongsFooter">playerSongsFooter</div>
  </div>
</template>

<script>
export default {
  name: "playerSongs",
};
</script>

<style lang="less" scoped>
.playerSongs {
  height: 590px;
  background-image: url(http://img1.juimg.com/160625/330890-16062515300184.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .playerSongsItem {
  }
}
</style>