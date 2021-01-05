<template>
  <div class="content">
    <div class="heard">
      <div class="weizhi">
        <span class="one">我的位置</span>
        <span>></span>
        <span>我的位置</span>
        <span>></span>
        <span>伯贤</span>
      </div>
      <div class="imagetext">
        <div class="left">
          <img
            src="https://imgessl.kugou.com/uploadpic/softhead/240/20201218/20201218183331445.jpg"
            alt=""
          />
          <div>
            <div>伯贤</div>
            <div>内容</div>
            <div>更多内容</div>
          </div>
        </div>

        <div>
          <div>
            <span>相似歌手</span>
            <div class="img">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.content {
  width: 1000px;
  margin: 0 auto;
}
.weizhi {
  margin-top: 10px;
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
  .left {
    width: 780px;
    height: 142px;
  }
}
</style>