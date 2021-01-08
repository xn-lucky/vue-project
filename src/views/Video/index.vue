<template>
  <div class="videoContainer">
    <div class="video">
      <video
        name="media"
        controlslist="nodownload"
        controls
        autoplay
        :src="videoLink"
      ></video>
      <div class="videoTitle">
        <div class="title">
          {{ imgName }}
        </div>
        <div class="icon">
          <i class="iconfont icon-kaifangpingtai1"></i>
          <i class="iconfont icon-fenxiang"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMvVideo } from '@api/singer'
export default {
  name: 'Video',
  data() {
    return {
      videoLink: '',
      imgName: '',
    }
  },
  async mounted() {
    if (this.$route.query.id) {
      const { id, name } = this.$route.query
      const videolist = await getMvVideo(id)
      this.videoLink = videolist.data.brs[240]
      this.imgName = name
    } else {
      let { videoLink, imgName } = this.$route.query
      this.videoLink = videoLink
      this.imgName = imgName
    }
  },
}
</script>

<style lang="less" scoped>
.videoContainer {
  height: 756px;
  padding-top: 20px;
  background-color: #3e3e3e;
  .video {
    width: 1200px;
    height: 675px;
    margin: 0 auto;
    video {
      width: 100%;
      height: 100%;
    }
    .videoTitle {
      width: 100%;
      height: 82px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        width: 1070px;
        font-size: 28px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon {
        display: flex;
        width: 130px;
        justify-content: space-evenly;
        .iconfont {
          font-size: 25px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
