<template>
  <!--精选集内页-->
  <div class="wrap alm2 clear_fix specialPage">
    <div class="mbx">
      我的位置 &gt; <a title="乐库" href="https://www.kugou.com/">首页</a> &gt;
      <a title="精选辑" href="https://www.kugou.com/yy/html/special.html"
        >精选辑</a
      >
      &gt; <span>乡村之旅：安静惬意·与自然同在</span>
    </div>

    <div class="l">
      <div class="pic">
        <img
          alt="乡村之旅：安静惬意·与自然同在"
          src="https://www.kugou.com/yy/static/images/blank.gif"
          _src="http://c1.kgimg.com/custom/150/20201207/20201207134716994336.jpg"
          _def="https://www.kugou.com/yy/static/images/default2.jpg"
          height="148"
          width="148"
        />
      </div>
      <a
        href="javascript:void(0)"
        class="pc_temp_btn_s02 pc_temp_bicon_share playall"
        title="分享"
        data-id=""
        hidefocus="true"
        ><span><i class="t2"></i>分享</span></a
      >
      <p class="detail">
        <span>名称：</span>乡村之旅：安静惬意·与自然同在<br />
        <span>创建人：</span>蔓若<br />
        <span>心情：</span><br />
        <span>更新时间：</span>2020-12-07<br />
      </p>
      <div class="intro">
        <p>
          <span>简介：</span
          >清晨的泥土芳香扑鼻而来，深呼大自然的气息，安静的欣赏花草树木换装后新装，尽情享受这美妙的春光。
          #年终限定奖#
        </p>
      </div>
      <p class="more" onclick="show(this,event)">更多 &gt;&gt;</p>
      <p class="more_intro">
        清晨的泥土芳香扑鼻而来，深呼大自然的气息，安静的欣赏花草树木换装后新装，尽情享受这美妙的春光。
        #年终限定奖#

        <span></span>
      </p>
    </div>

    <div class="r">
      <div id="songs" class="list1">
        <strong>&lt;乡村之旅：安静惬意·与自然同在&gt; - 歌曲列表</strong>
        <h4 class="dq">
          <a
            href="javascript:void(0)"
            class="pc_temp_btn_s02 pc_temp_bicon_play"
            title="播放"
            hidefocus="true"
            ><span><i class="iconfont icon-kongxinjiantou33"></i>播放</span></a
          >
          <input type="checkbox" id="selAll" checked="checked" />全选
        </h4>
        <ul>
          <li>
            <a
              title="Josh Turner - For the Love of God"
              hidefocus="true"
              href="javascript:;"
              data="33CF606474990BF9EE93CAA41157C912|247000"
              ><input
                type="checkbox"
                class="cb checkItem"
                checked="true"
                id="chk_33CF606474990BF9EE93CAA41157C912"
              /><span class="share iconfont icon-fenxiang" title="分享"></span
              ><span class="listen iconfont icon-erji" title="播放"></span
              ><span class="num1">01</span
              ><span class="text"
                ><i>Josh Turner - For the Love of God</i></span
              ></a
            >
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongShowList",
};
</script>

<style lang="less" scoped>
.wrap {
  width: 1000px;
  margin: 0 auto;
  height: 1000px;
  font-size: 15px;
  .mbx {
    color: #ada8a8;
    margin: 15px 0;
    a {
      color: #3d3d3d;
    }
    color: #3d3d3d;
  }
  .l {
    float: left;
    width: 180px;
    position: relative;
    z-index: 1000;
    .pic {
      background: url("../../assets/images/1.jpg") no-repeat;
      width: 170px;
      height: 169px;
      margin-left: -5px;
      img {
        margin: 4px 0 0 5px;
      }
      a {
        margin-bottom: 10px;
      }
      .detail {
        color: #323232;
        width: 160px;
        line-height: 23px;
        text-align: left;
        span {
          color: #7d7d7d;
        }
      }
      .intro {
        overflow: hidden;
        padding: 0px;
        width: 160px;
        padding: 0px;
        top: 0px;
        left: 0px;
        width: 160px;
      }
    }
  }
  .r {
    display: block;
    width: 780px;
    height: 960px;
    float: right;
    border-left: 1px solid #ccc;
    padding-left: 20px;
    strong {
      font-weight: 700;
    }
    h4 {
      font-size: 12px;
      color: #878787;
      border-bottom: 1px solid #d4d4d4;
      border-width: 96%;
      padding-bottom: 7px;
      margin-bottom: 5px;
      margin-top: 20px;
      span {
        display: block;
        float: right;
        padding: 3px 20px 3px 20px;
        background: #169af3;
        color: white;
        .iconfont {
          font-size: 12px;
        }
      }
    }
    ul {
      padding-top: 15px;
      li {
        float: none;
        width: auto;
        height: 25px;
        margin: 0 0 3px 0;
        line-height: 25px;
        vertical-align: bottom;
        a {
          display: block;
          zoom: 1;
          height: 25px;
          input {
            float: left;
            width: 13px;
            height: 15px;
            margin-right: 15px;
            margin-top: 4px;
          }
          .share {
            width: 19px;
            height: 19px;
            margin-top: 2px;
            margin-left: 10px;
            display: inline;
            float: right;
            cursor: pointer;
            line-height: 0;
            font-size: 20px;
            color: #ccc;
            line-height: 19px;
          }
          .listen {
            width: 19px;
            height: 19px;
            margin-top: 2px;
            float: right;
            cursor: pointer;
            line-height: 0;
            font-size: 20px;
            color: #ccc;
            line-height: 19px;
          }
          .num1 {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
