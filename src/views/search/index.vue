<template>
  <div class="Nan">
    <div class="navcontent">
      <div id="navList">
        <div class="danqu">
          单曲
          <span></span>
        </div>
      </div>
      <div class="all">
        <div class="contentList">
          <h4>
            <label for=""><input type="checkbox" />全选</label>
            <div class="bofang">播放</div>
          </h4>
        </div>
        <ul class="songlist">
          <li>
            <div class="one">
              <input type="checkbox" />
              <span><em>0</em></span>
              <span class="textList">5555</span>
            </div>
            <div class="two">
              <span title="播放" class="iconfont icon-bofang1"></span>
              <span title="收藏" class="iconfont icon-fenxiang"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { searchSong } from '@api/singer'
export default {
  name: 'search',
  data() {
    return {
      songList: {},
    }
  },
  async mounted() {
    this.songList = await searchSong(this.$route.query.text)
  },
}
</script>

<style lang="less" scoped>
.Nan {
  width: 1000px;
  height: 800px;
  margin: 0 auto;
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