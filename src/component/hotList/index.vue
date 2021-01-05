<template>
  <div>
    <div class="hotSongs-right-box">
      <span class="hotSongs-right-box-title">
        <a href="#" class="hotSongs-right-box-titleicon">︿</a></span
      >
      <ul class="hotSongs-right-box-content">
        <li class="hotSongs-right-box-content-li">
          <img
            src="https://imge.kugou.com/temppic/20130807/20130807185439172736.png"
          />
          <span>酷狗飙升榜</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotList",
  props: ["hotList"],
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this);
    });
  },
};
</script>

<style lang="less" scoped>
.hotSongs-right-box {
  .hotSongs-right-box-title {
    display: block;
    height: 45px;
    position: relative;
    font-weight: 400;
    padding-left: 15px;
    line-height: 45px;
    text-align: left;
    font-size: 16px;
    color: #555;
    .hotSongs-right-box-titleicon {
      position: relative;
      text-align: left;
      left: 100px;
      text-decoration: none;
    }
    .hotSongs-right-box-titleicon:hover {
      color: skyblue;
    }
  }
  .hotSongs-right-box-content {
    border-bottom: 1px solid #555;
    font-size: 14px;

    .hotSongs-right-box-content-li {
      height: 45px;
      padding: 0 0 0 15px;
      margin-bottom: 4px;
      line-height: 45px;
      color: #555;
      cursor: pointer;
    }
  }
}
</style>