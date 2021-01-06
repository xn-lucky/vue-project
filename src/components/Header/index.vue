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
          <li class="more">
            <a href="#">更多</a>
            <ul class="secondMenu">
              <li><a href="#">电台</a></li>
              <li><a href="#">MV</a></li>
              <li><a href="#">歌单</a></li>
              <li><a href="#">歌手</a></li>
            </ul>
          </li>
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
  .nav {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .homeNav {
      display: flex;
      li {
        line-height: 55px;
        font-size: 16px;
        padding: 0 30px;
        a {
          color: #ddd;
        }
        a:hover {
          text-decoration: none;
        }
      }
      li:hover {
        background-color: #0c8ed9;
        color: #fff;
        a {
          color: #fff !important;
        }
      }
      .more {
        position: relative;
        .secondMenu {
          position: absolute;
          left: 0px;
          top: 54.4px;
          display: none;
          width: 92px;
          height: 166px;
          background-color: #252a32;
          z-index: 99;

          \deep\li {
            display: block;
            width: 92px;
            padding: 0;
            height: 36px !important;
            line-height: 36px;
            &:hover a {
              display: block;
              padding: 0;
              width: 92px;
              height: 36px;
              line-height: 36px;
            }
          }
        }
      }
      .more:hover .secondMenu {
        display: block;
      }
    }
    .subNav {
      display: flex;
      align-items: center;
      li {
        padding-left: 20px;
        font-size: 13px;
        a {
          color: #bbb;
          i {
            color: #fff;
          }
        }
        a:hover {
          color: #14a9ff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>