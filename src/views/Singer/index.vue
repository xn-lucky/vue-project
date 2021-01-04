<template>
  <div class="content">
    <div class="context">
      <div class="left">
        <ul>
          <li class="active">全部歌手</li>
        </ul>
        <ul v-for="item in singer.list" :key="item.classid">
          <li @click="singerList(item.classid)">{{ item.classname }}</li>
        </ul>
        <ul>
          <li class="other">其他</li>
        </ul>
      </div>
      <div class="right">
        <div class="listNav top">
          <a class="active">热门</a>
          <a href="">A</a>
          <a href="">B</a>
          <a href="">C</a>
          <a href="">D</a>
          <a href="">E</a>
          <a href="">F</a>
          <a href="">G</a>
          <a href="">H</a>
          <a href="">I</a>
          <a href="">J</a>
          <a href="">K</a>
          <a href="">L</a>
          <a href="">M</a>
          <a href="">N</a>
          <a href="">O</a>
          <a href="">P</a>
          <a href="">Q</a>
          <a href="">R</a>
          <a href="">S</a>
          <a href="">T</a>
          <a href="">U</a>
          <a href="">V</a>
          <a href="">W</a>
          <a href="">X</a>
          <a href="">Y</a>
          <a href="">Z</a>
          <a>其他</a>
        </div>
        <div class="farstUrl">
          <div class="list">
            <ul class="imgList"> 
              <li>
                <a
                  title="周杰伦"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
              <li>
                <a
                  title="周杰伦"
                  class="pic"
                  onclick="sdnClick(12070)"
                  hidefocus="true"
                >
                  <img
                    alt="周杰伦"
                    src="https://imgessl.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _src="http://singerimg.kugou.com/uploadpic/pass/softhead/100/20180515/20180515002522714.jpg"
                    _def="https://www.kugou.com/yy/static/images/default3.jpg"
                    width="68"
                    height="68"
                    loading="1"
                    class="loadPic"
                  />
                  <i>1<em>st</em></i>
                </a>
                <strong
                  onclick="sdnClick(12070)"
                  href="https://www.kugou.com/yy/singer/home/3520.html"
                  title="周杰伦"
                  >周杰伦</strong
                >
              </li>
            </ul>
          </div>
        </div>
        <div id="buttom">
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
          <ul class="bottomList">
            <li>
              <span>19</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>20</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>21</span>
              <a class="text">王杰</a>
            </li>
            <li>
              <span>22</span>
              <a class="text">王杰</a>
            </li>
          </ul>
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
      singer: {},
      listAll: {},
      farst: [],
      last: [],
    }
  },
  methods: {
    async singerList(id) {
      const singerList = await getSingerList(id)
      this.listAll = singerList
      this.farst = this.listAll.singers.list.info.slice(0, 18)
     /*  this.last = this.listAll.singers.list.info.slice(18,49) */
      
    },
  },
  async mounted() {
    const singer = await getSinger()
    this.singer = singer
  },
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
}
.context {
  display: flex;
  width: 1000px;
  margin: 0 auto;
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
    li {
      margin-right: 5px;
      img:hover {
        /*  border: 1px solid blue; */
        box-shadow: 2px 2px 5px blue;
      }
    }
  }

  #buttom {
    width: 770px;
    height: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    padding-top: 30px;
    .bottomList {
      margin-bottom: 20px;
      li:nth-child(odd) {
        background: rgba(231, 231, 231);
      }
      li {
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
      }
    }
  }

  .active {
    background: rgba(133, 210, 242);
    color: white;
  }
}
</style>>

