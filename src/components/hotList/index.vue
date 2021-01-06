<template>
  <div>
    <div class="hotSongs-right-box" v-for="item in this.hotList" :key="item.id">
      <span class="hotSongs-right-box-title" @click="addClass($event)"
        >{{ item[0].title }} <i class="hotSongs-right-box-titleicon"></i
      ></span>
      <ul class="hotSongs-right-box-content">
        <li
          class="hotSongs-right-box-content-li"
          v-for="content in item"
          :key="content.id"
          @click="changeSongs(content.id)"
        >
          <img :src="content.iconFont" />
          <span>{{ content.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotList",
  data() {
    return {
      flag: true,
    };
  },
  props: ["hotList", "changeSongs"],
  mounted() {},
  methods: {
    /*   changeList(e) {
      if (e.target.className.indexOf("active") === -1) {
        e.target.className += " active";
      }
      if (e.target.className.indexOf("active") === 0) {
        e.target.className += "";
      }
      console.log(e.target.className);
    }, */
    addClass(e) {
      if (e.path[1].children[1].className.indexOf("active") === -1) {
        e.path[1].children[1].className += " active";
        return;
      }
      if (e.path[1].children[1].className.indexOf("active") !== -1) {
        e.path[1].children[1].className = "hotSongs-right-box-content";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.hotSongs-right-box {
  .hotSongs-right-box-title {
    display: flex;
    width: 200px;
    justify-content: space-between;
    height: 45px;
    position: relative;
    font-weight: 400;
    padding-left: 15px;
    line-height: 45px;
    text-align: left;
    font-size: 16px;
    color: #555;
    cursor: pointer;
    .hotSongs-right-box-titleicon {
      position: relative;
      top: 15px;
      right: 15px;
      display: inline-block;
      width: 15px;
      height: 15px;
      background-image: url(https://staticssl.kugou.com/common/images/pc_temp_v2/icon_splice.png?20150814);
      background-position: -448px -115px;
      text-decoration: none;
    }
  }
  .hotSongs-right-box-title:hover {
    .hotSongs-right-box-titleicon {
      background-image: url(https://staticssl.kugou.com/common/images/pc_temp_v2/icon_splice.png?20150814);
      background-position: -448px -55px;
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

      img {
        cursor: pointer;
        float: left;
        width: 16px;
        height: 16px;
        margin: 15px 5px 0 0;
        line-height: 0;
        background-repeat: no-repeat;
      }
    }
    .hotSongs-right-box-content-li:hover {
      color: rgb(21, 143, 225);
      background-color: rgb(245, 248, 251);
    }
  }
}
.active {
  transition: all 500ms;
  height: 0;
  overflow: hidden;
}
</style>