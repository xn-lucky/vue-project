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
        <div class="btn">
          <i class="icon"></i>
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
</style>