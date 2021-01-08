<template>
  <div class="content">
    <div class="context">
      <div class="left">
        <ul class="sin">
          <li
            v-for="sin in singerAll"
            :key="sin.allId"
            @click="search(sin.allId)"
            :class="currentId === sin.allId ? 'active' : ''"
          >
            {{ sin.name }}
          </li>
        </ul>
        <ul
          v-for="all in singer"
          :key="all.allId"
          class="all"
          @click="searchTo(all.allId)"
          :class="currentIdto === all.allId ? 'active' : ''"
        >
          <li>
            {{ all.name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="listNav top">
          <a class="active">热门</a>
          <a
            v-for="(num, index) in letter"
            :key="index"
            @click="numList(num, index)"
            :class="numId === index ? 'active' : ''"
            >{{ num }}</a
          >
          <a>其他</a>
        </div>
        <div class="farstUrl">
          <div class="list">
            <div class="imgList">
              <div v-for="(list, index) in farst" :key="list.id">
                <div>
                  <a
                    class="pic"
                    hidefocus="true"
                    @click="jumpNext(list.id, list.picUrl)"
                  >
                    <img :src="list.picUrl" id="image" />
                    <i>{{ lst + index }}<em>st</em></i>
                  </a>
                  <strong>{{ list.name }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="buttom">
          <ul class="bottomList">
            <li v-for="(las, index) in last" :key="las.id">
              <span>{{ lsto + index }}<em>st</em></span>
              <a class="text" @click="jumpNext(las.id, las.picUrl)">{{
                las.name
              }}</a>
            </li>
          </ul>
        </div>
        <div class="pagination">
          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :total="100"
              :current-page.sync="pag"
              :page-size="50"
              @next-click="nextList"
              @prev-click="prevList"
              @current-change="handleCurrentChange(pag)"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSinger, getSingerList } from '@api/singer'
export default {
  name: 'singer',
  data() {
    return {
      singer: [
        { name: '全部', allId: -1 },
        { name: '华语', allId: 7 },
        { name: '欧美', allId: 96 },
        { name: '日本', allId: 8 },
        { name: '韩国', allId: 16 },
        { name: '其他', allId: 0 },
      ],
      singerAll: [
        { name: '男歌手', allId: 1 },
        { name: '女歌手', allId: 2 },
        { name: '乐队', allId: 3 },
      ],

      letter: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
      singerList: {},
      farst: [],
      last: [],
      lst: 1,
      lsto: 19,
      currentId: -1,
      currentIdto: -1,
      numId: 0,
      pag: 1,
    }
  },
  methods: {
    async search(id) {
      this.currentId = id
      const typeList = await getSingerList(id, this.currentIdto)
      this.singerList = typeList
      this.farst = this.singerList.artists.slice(0, 18)
      this.last = this.singerList.artists.slice(18, 50)
    },
    async searchTo(id) {
      this.currentIdto = id
      const typeList = await getSingerList(this.currentId, id)
      this.singerList = typeList
      this.farst = this.singerList.artists.slice(0, 18)
      this.last = this.singerList.artists.slice(18, 50)
    },
    async numList(num, index) {
      this.numId = index
      this.singerList = await getSingerList(
        this.currentId,
        this.currentIdto,
        num
      )
      this.farst = this.singerList.artists.slice(0, 18)
      this.last = this.singerList.artists.slice(18, 50)
    },
    nextList() {
      const endList = this.singerList.artists.slice(50, 100)
      this.farst = endList.slice(0, 18)
      this.last = endList.slice(18, 50)
    },
    prevList() {
      this.farst = this.singerList.artists.slice(0, 18)
      this.last = this.singerList.artists.slice(18, 50)
    },
    handleCurrentChange(pag) {
      if (pag === 1) {
        this.nextList()
      } else {
        this.prevList()
      }
    },
    jumpNext(id, img) {
      this.$router.push({ path: '/singerDetails', query: { id } })
      localStorage.setItem('image', img)
    },
  },
  async mounted() {
    // debugger
    console.log(getSinger)
    const singerList = await getSinger()
    this.singerList = singerList
    console.log(this.farst)
    this.farst = this.singerList.artists.slice(0, 18)
    this.last = this.singerList.artists.slice(18, 50)
  },
  components: {},
}
</script>

<style lang="less" scoped>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
.content {
  background-color: rgba(255, 255, 255;);
  width: 1000px;
  height: 700px;
  margin: 0 auto;
}
.context {
  display: flex;
  width: 1000px;
  height: 700px;
  height: 590px;
  justify-content: space-between;
  .left {
    width: 210px;
    height: 480px;
    /* text-align: center; */
    margin-top: 20px;
    ul {
      margin-bottom: 10px;
      width: 210px;
      li:hover {
        background: rgba(133, 210, 242);
        color: white;
      }
      li {
        cursor: pointer;
        height: 30px;
        width: 142px;
        font-size: 14px;
        padding: 0 0 0 68px;
        line-height: 30px;
      }
      .other {
        margin-top: 30px;
      }
    }
    .sin {
      margin-bottom: 50px;
    }
  }
  .right {
    margin-top: 20px;
    width: 780px;
    height: 570px;
    border-left: 1px solid rgba(212, 212, 212);
    padding-left: 10px;
    .top {
      height: 35px;
      width: 100%;
      border-bottom: 1px solid rgba(212, 212, 212);

      a {
        display: inline-block;
        padding: 0 7px;
        margin-right: 1px;
        color: #333;
        font-size: 15px;
        font-family: '微软雅黑';
      }
      a:hover {
        background: rgba(133, 210, 242);
        color: white;
      }
    }
    .farstUrl {
      width: 790px;
      height: 240px;

      .pic {
        position: relative;
        display: block;
        height: 80px;
        /* background: url(./images/other.png) no-repeat -82px -152px; */
        padding: 3px 0 0 4px;
        i {
          display: block;
          color: #fff;
          position: absolute;
          top: 49px;
          left: 4px;
          width: 63px;
          height: 22px;
          padding-left: 5px;
          background: -webkit-linear-gradient(
            left,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      }
      strong {
        width: 70px;
        color: #212121;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        display: block;
        padding-left: 2px;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .imgList {
    display: flex;
    flex-wrap: wrap;
    width: 790px;
    height: 240px;
    justify-content: space-evenly;
    padding-top: 10px;
    .son {
      margin-right: 5px;
      cursor: pointer;
    }
  }
  #image {
    width: 68px;
    height: 68px;
  }
  #image:hover {
    box-shadow: 2px 2px 5px blue;
  }
  #buttom {
    width: 770px;
    height: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    padding-top: 30px;
    .bottomList {
      display: flex;
      flex-wrap: wrap;
      width: 800px;
      height: 300px;
      justify-content: space-evenly;
      margin-bottom: 20px;
      li:nth-child(odd) {
        background: rgba(231, 231, 231);
      }
      li {
        cursor: pointer;
        width: 180px;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        margin-right: 10px;
        span {
          margin-right: 10px;
        }
        .text {
          display: inline;
          width: 102px;
          height: 23px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .text:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .pagination {
    padding-left: 100px;
    text-align: center;
  }
  .active {
    background: rgba(133, 210, 242);
    color: white;
  }
}
</style>>

