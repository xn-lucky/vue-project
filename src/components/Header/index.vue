<template>
  <div class="header">
    <h1 class="logo">
      <a href="">
        <img src="@assets/images/ia_100000033.png" alt="" />
      </a>
    </h1>
    <div class="search">
      <div class="input">
        <input type="text" placeholder="想写点什么呀" />
        <div class="btn"><i class="icon"></i><span>搜索</span></div>
      </div>
    </div>
  </div>
  <div class="topNav">
    <ul class="bsurl">
      <li><a href="#">客服中心</a></li>
      <li><a href="#">招贤纳士</a></li>
      <li><a href="#">会员中心</a></li>
      <li><a href="#">商务合作</a></li>
    </ul>
    <div class="login_area">
      <div><a href="">登录</a></div>
    </div>
  </div>

  <!-- <div class="header">
    <h1 class="logo">
      <a href="https://www.kugou.com/"
        ><img
          src="https://staticssl.kugou.com/public/root/images/logo.png"
          alt=""
      /></a>
    </h1>
    <div class="search_wrapper top_search">
      <div class="search_input">
        <input type="text" placeholder="张碧晨 逢生" />
        <div class="searh_btn">
          <i class="search_icon"></i><span>搜索</span>
        </div>
      </div>
      <div class="search_recommend top_search_recommend"></div>
      <div class="search_histroy top_search_histroy"></div>
    </div>

    <style>
      .bs {
        right: 0px;
        width: 460px;
      }
      .topNav .bsUl {
        width: 300px;
      }

      .topNav .bsUl li {
        padding: 0 10px;
      }
    </style>

    <div class="topNav fr bs">
      <ul class="bsUl">
        <li>
          <a
            target="_blank"
            href="https://www.kugou.com/shop/help/serviceCenter"
            >客服中心</a
          >
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.kugou.com/hr/kugouHr/dist/index.html"
            >招贤纳士</a
          >
        </li>
        <li><a target="_blank" href="http://vip.kugou.com/">会员中心 </a></li>
        <li>
          <a target="_blank" href="https://www.kugou.com/about/business.html"
            >商务合作
          </a>
        </li>
      </ul>
      <div class="login_area">
        <div id="login_in" class="clearfix">
          <a class="login_btn" id="login_btn">登录</a
          ><a
            target="_blank"
            href="http://www.kugou.com/reg/web/"
            class="regin_btn"
            id="regin_btn"
            >注册</a
          >
        </div>
        <div id="login_out" class="clearfix">
          <img class="user_img" src="" />
          <span class="user_name"></span>
        </div>
        <div id="user_menu" class="user_menu">
          <div class="topArrow1"></div>
          <div class="topArrow2"></div>
          <ul>
            <li>
              <a target="_blank" href="http://www.kugou.com/newuc/user/uc/"
                ><span class="user_icon1"></span>个人帐号</a
              >
            </li>
            <li>
              <a href="http://www.kugou.com/newuc/login/outlogin"
                ><span class="user_icon2"></span>退出登录</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <div class="topNav fr bs">
                <ul class="bsUl">
                    <li><a target="_blank" href="https://www.kugou.com/shop/help/serviceCenter">客服中心</a></li>
                    <li><a target="_blank" href="https://www.kugou.com/hr/kugouHr/dist/index.html">招贤纳士</a></li>
                    <li><a target="_blank" href="http://vip.kugou.com/">会员中心 </a></li>
                    <li><a target="_blank" href="https://www.kugou.com/about/business.html">商务合作 </a></li>
                </ul>
                <div class="login_area">
                    <div id="login_in" class="clearfix"><a class="login_btn" id="login_btn">登录</a><a target="_blank" href="http://www.kugou.com/reg/web/" class="regin_btn" id="regin_btn">注册</a></div>
                    <div id="login_out" class="clearfix">
                        <img class="user_img" src="">
                        <span class="user_name"></span>
                    </div>
                    <div id="user_menu" class="user_menu">
                        <div class="topArrow1"></div>
                        <div class="topArrow2"></div>
                        <ul>
                            <li><a target="_blank" href="http://www.kugou.com/newuc/user/uc/"><span class="user_icon1"></span>个人帐号</a></li>
                            <li><a href="http://www.kugou.com/newuc/login/outlogin"><span class="user_icon2"></span>退出登录</a></li>
                        </ul>
                    </div>
                </div>
            </div> -->
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less">
</style>