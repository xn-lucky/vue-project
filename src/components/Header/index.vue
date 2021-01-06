<template>
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
            <a class="login_btn" id="login_btn">登录</a>
            <!-- <a target="_blank" href="#" class="regin_btn" id="regin_btn">注册</a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="navWrap">
      <div class="nav">
        <ul class="homeNav">
          <li><a href="#">首页</a></li>
          <li><a href="#">榜单</a></li>
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
          <li><router-link to="">歌手</router-link></li>
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
            <a href="#"><i class="iconfont icon-kaifangpingtai"></i>开放平台</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="less">
.header {
  width: 1000px;
  height: 78px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .search .input {
  position: relative;
  width: 298px;
  height: 34px;
  border: 1px solid #ccc;
  line-height: 34px;
}
.header .search .input input {
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
.header .search .input .btn {
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
.header .topNav {
  display: flex;
  align-items: center;
}
.header .topNav .bsUl {
  width: 312px;
  height: 19.2px;
}
.header .topNav .bsUl li {
  padding: 0 10px;
  font-size: 13px;
}

.header .topNav .bsUl {
  display: flex;
}
.topNav .login_area .clearfix {
  width: 110px;
  height: 30px;
}
.topNav .login_area #login_in a {
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
.nav .homeNav li.more:hover,
.nav .homeNav li.more.hover {
  background-color: #0c8ed9;
  color: #fff;
}

.nav .homeNav li:hover a {
  color: #fff !important;
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
</style>