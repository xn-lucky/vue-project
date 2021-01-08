<template>
  <div class="hed">
    <div>
      <div class="header">
        <h1 class="logo">
          <a href="">
            <img src="@assets/images/ia_100000033.png" alt="" />
          </a>
        </h1>
        <div class="search">
          <div class="input">
            <input type="text" placeholder="想写点什么呀" />
            <div class="btn">
              <i class="iconfont icon-search"></i>
              <!-- <span>搜索</span> -->
            </div>
          </div>
        </div>
        <div class="topNav">
          <ul class="bsUl">
            <li>
              <a target="_blank" href="#">客服中心</a>
            </li>
            <li>
              <a class="" target="_blank" href="#">招贤纳士</a>
            </li>
            <li><a target="_blank" href="#">会员中心 </a></li>
            <li>
              <a target="_blank" href="#">商务合作</a>
            </li>
          </ul>
          <div class="login_area">
            <div id="login_in" class="clearfix">
              <a
                class="login_btn"
                id="login_btn"
                @click="dengdenglu"
                v-if="xuelin"
                >已登录</a
              >
              <a class="login_btn" id="login_btn" @click="dengdenglu" v-else
                >登录</a
              >
              <!-- <a target="_blank" href="#" class="regin_btn" id="regin_btn">注册</a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="navWrap">
        <div class="nav">
          <ul class="homeNav">
            <li><a href="#">首页</a></li>
            <li><a @click="tohotSongs">榜单</a></li>
            <li><a href="#">下载客户端</a></li>
            <li
              @mouseenter="show = true"
              @mouseleave="show = false"
              class="more"
              :class="show ? 'hover' : ''"
            >
              <a href="#">更多</a>
            </li>
          </ul>
          <ul
            class="secondMenu"
            :class="show ? 'block' : ''"
            @mouseenter="show = true"
            @mouseleave="show = false"
          >
            <!-- <li><a href="#">电台</a></li> -->
            <li><router-link to="/mvweb">MV</router-link></li>
            <li><router-link to="">歌单</router-link></li>
            <li><router-link to="/singer">歌手</router-link></li>
          </ul>
          <ul class="subNav">
            <li>
              <a href="#"><i class="iconfont icon-shoucang"></i>直播</a>
            </li>
            <li>
              <a href="#"><i class="iconfont icon-shangcheng"></i>商城</a>
            </li>
            <li>
              <a href="#"><i class="iconfont icon-erji"></i>音乐人</a>
            </li>
            <li>
              <a href="#"><i class="iconfont icon-fangzicopy"></i>代理商</a>
            </li>
            <li>
              <a href="#"><i class="iconfont icon-maikefeng"></i>主播电台</a>
            </li>
            <li>
              <a href="#"
                ><i class="iconfont icon-kaifangpingtai"></i>开放平台</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="warp" v-show="mengban">
      <div class="inner"></div>
      <div class="box" :style="{ display: tab === true ? 'none' : '' }">
        <div class="jinlingtu">
          <div class="v3"></div>
          <div class="v4" @click="tabqiehuan"></div>
          <div class="xxx" @click="dengdenglu"></div>
        </div>
        <div class="hedtext">登陆酷狗音乐</div>
        <div class="inputtext">
          <label for=""
            >手机号:
            <input placeholder="不输手机号码是小狗" type="text" v-model="phone"
          /></label>
        </div>
        <div class="inputpass">
          <label for=""
            >验证码:<input
              placeholder="请输入短信验证码"
              type="password"
              v-model="pass"
            />
            <em
              @click="qingqiu"
              :style="{ display: dianhua === true ? 'inline-block' : '' }"
              >请求短信验证码</em
            ><em :style="{ display: dianhua === true ? '' : 'inline-block' }"
              >在{{ num }}秒后重新发送</em
            ></label
          >
        </div>
        <span v-show="dianhua">请输入11位数字的正确号码</span>
        <button class="denglu" @click="fasong">登陆</button>
      </div>
      <div class="box2" :style="{ display: tab === true ? '' : 'none' }">
        <div class="tou">
          <div class="v5"></div>
          <div class="v6" @click="tabqiehuan"></div>
        </div>
        <div class="text">手机扫码，安全登陆酷狗</div>
        <img
          src="https://open.weixin.qq.com/connect/qrcode/091Cvoxo4EE1000Z"
          alt=""
        />
        <div class="dakai">打开<a href="">手机酷狗音乐，</a>扫一扫登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
import { gitverification, gitverify } from '@api/login'
export default {
  name: 'Header',
  data() {
    return {
      show: false,
      mengban: false,
      tab: false,
      phone: '',
      pass: '',
      dianhua: true,
      num: 5,
      time: null,
      xuelin: false,
    }
  },
  watch: {
    phone() {},
  },
  methods: {
    tohotSongs() {
      this.$router.push('/hotsongs')
    },
    dengdenglu() {
      this.mengban = !this.mengban
    },
    tabqiehuan() {
      this.tab = !this.tab
    },
    async qingqiu() {
      const { phone } = this
      const user = /\d{11}/
      if (user.test(phone)) {
        await gitverification(this.phone)
        this.dianhua = false
        this.add()
        this.num = 5
        console.log(this.dianhua)
      } else {
        this.dianhua = true
      }
    },
    add() {
      this.time = setInterval(() => {
        this.num -= 1
        if (this.num <= 0) {
          clearInterval(this.time)
          this.time = null
          this.dianhua = true
        }
        console.log(this.num)
      }, 1000)
    },
    async fasong() {
      this.xuelin = await gitverify(this.phone, this.pass)
      if (this.xuelin) {
        this.dengdenglu()
      }
    },
  },
}
</script>

<style lang="less">
.header {
  width: 1000px;
  height: 78px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search .input {
    position: relative;
    width: 298px;
    height: 34px;
    border: 1px solid #ccc;
    line-height: 34px;
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 249px;
      height: 24px;
      line-height: 24px;
      border: none;
      margin-left: 14px;
      padding: 5px 0;
      color: #666;
      outline: none;
    }
    .btn {
      // display: block;
      position: absolute;
      right: 0;
      top: 0;
      width: 34px;
      height: 34px;
      text-align: center;
      margin: 0 auto;
      line-height: 34px;
    }
  }
}

.header {
  .topNav {
    display: flex;
    align-items: center;
    .bsUl {
      width: 312px;
      height: 19.2px;
      display: flex;
      li {
        padding: 0 10px;
        font-size: 13px;
      }
    }
    .login_area {
      .clearfix {
        width: 110px;
        height: 30px;
      }
      #login_in a {
        float: left;
        display: block;
        width: 48px;
        height: 28px;
        line-height: 28px;
        border: 1px solid #169af3;
        border-radius: 2px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        background-color: #169af3;
      }
    }
  }
}
.navWrap {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 55px;
  background-color: #2c323b;
}
.navWrap .nav {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.nav .homeNav {
  display: flex;
}
.nav .homeNav li {
  line-height: 55px;
  font-size: 16px;
  padding: 0 30px;
}

.nav .homeNav li a {
  color: #ddd;
}
.nav .homeNav li.more:hover {
  background-color: #0c8ed9;
  color: #fff;
}
.nav .homeNav li:hover {
  color: #fff !important;
  background-color: #0c8ed9;
}
.nav .homeNav li:hover a {
  color: #fff !important;
  background-color: #0c8ed9;
}
.nav .homeNav li a:hover {
  text-decoration: none;
}
.nav .secondMenu {
  position: absolute;
  left: 324px;
  top: 54.4px;
  display: none;
  width: 92px;
  height: 110px;
  background-color: #252a32;
  li {
    display: block;
    width: 92px;
    padding: 0;
    height: 36px;
    line-height: 36px;
    text-align: center;
    &:hover {
      color: #fff;
      line-height: 34px;
      border-top: 1px solid #383d44;
      border-bottom: 1px solid #383d44;
      background-color: #2d343d;
    }
    a {
      font-size: 15px;
      color: #bbb;
      background: 0 0;
      background-color: #252b34;
    }
  }
}
.nav .secondMenu.block {
  display: block;
}
.nav .subNav {
  display: flex;
  align-items: center;
}
.nav .subNav li {
  padding-left: 20px;
  font-size: 13px;
}
.nav .subNav li a {
  color: #bbb;
}
.nav .subNav li a:hover {
  color: #14a9ff;
  text-decoration: none;
}
.nav .subNav li a i {
  color: #fff;
}

.inner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
.box {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 1000;
  width: 528px;
  height: 332px;
  background-color: white;
  .jinlingtu {
    position: relative;
    .v3 {
      width: 139px;
      height: 34px;
      background-image: url('../../static/image/qrcode_login.png');
      background-position: 0px -125px;
      position: absolute;
      right: 60px;
    }
    .v4 {
      width: 60px;
      height: 60px;
      background-image: url('../../static/image/qrcode_login.png');
      background-position: 0px 0px;
      position: absolute;
      right: 0px;
    }
    .xxx {
      width: 37px;
      height: 37px;
      background-image: url('../../static/image/qrcode_login.png');
      background-position: -93px -70px;
      position: absolute;
      /* background: #B0B0B0; */
      top: -37px;
      right: 0px;
      cursor: pointer;
    }
  }
  .hedtext {
    margin-top: 60px;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
  }

  .inputtext {
    width: 400px;
    height: 180px;
    height: 28px;
    border: 1px solid #ccc;
    background: #f6f6f6;
    padding: 7px 10px;
    margin-left: 64px;
    margin-top: 10px;
    label {
      line-height: 30px;
      color: #7b7b7b;
      input {
        border: 0;
        height: 28px;
        line-height: 28px;
        width: 310px;
        padding: 0;
        background: transparent;
        color: #333;
        outline: medium;
      }
    }
  }
  .inputpass {
    width: 400px;
    height: 180px;
    height: 28px;
    border: 1px solid #ccc;
    background: #f6f6f6;
    padding: 7px 10px;
    margin-left: 64px;
    margin-top: 10px;
    label {
      line-height: 30px;
      color: #7b7b7b;
      input {
        border: 0;
        height: 28px;
        line-height: 28px;
        width: 230px;
        padding: 0;
        background: transparent;
        color: #333;
        outline: medium;
      }
      em {
        color: cadetblue;
        display: none;
      }
    }
  }
  .denglu {
    display: block;
    width: 400px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    background-color: #2299ed;
    margin-left: 73px;
    margin-top: 30px;
    outline: none;
  }
  span {
    display: inline-block;
    color: crimson;
    width: 150px;
    height: 15px;
    margin-top: 15px;
    margin-left: 70px;
  }
}
.box2 {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 1000;
  width: 528px;
  height: 332px;
  background-color: white;
  .tou {
    position: relative;
    .v5 {
      width: 139px;
      height: 34px;
      background-image: url('../../static/image/qrcode_login.png');
      background-position: 137px -125px;
      position: absolute;
      right: 60px;
    }
    .v6 {
      width: 60px;
      height: 60px;
      background-image: url('../../static/image/qrcode_login.png');
      background-position: 66px 0px;
      position: absolute;
      right: 0px;
    }
  }
  .text {
    font-size: 20px;
    margin-top: 60px;
    text-align: center;
  }
  img {
    display: inline-block;
    width: 155px;
    height: 155px;
    margin-left: 50%;
    transform: translateX(-76px);
    margin-top: 20px;
  }
  .dakai {
    font-size: 14px;
    text-align: center;
    margin-top: 15px;
  }
  .dakai a {
    color: blue;
  }
}
</style>