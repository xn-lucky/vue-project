<template>
  <div class="footerWrapper">
    <div class="footer">
      <div class="links">
        <a
          hidefocus="true"
          href="https://www.kugou.com/about/aboutus.html"
          target="_blank"
          >关于酷狗</a
        >
        |
        <a hidefocus="true" href="javascript:void(0);" id="report">监督举报</a>
        |
        <a
          hidefocus="true"
          href="https://www.kugou.com/about/business.html"
          target="_blank"
          >商务合作</a
        >
        |
        <a
          hidefocus="true"
          href="https://www.kugou.com/about/adservice.html"
          target="_blank"
          >广告服务</a
        >
        |
        <a
          hidefocus="true"
          target="_blank"
          href="https://www.kugou.com/about/copyRightGuide.html"
          >投诉指引</a
        >
        |
        <a target="_blank" href="https://www.kugou.com/about/privacy.html "
          >隐私政策</a
        >
        |
        <a target="_blank" href="https://www.kugou.com/about/children.html "
          >儿童隐私政策</a
        >
        |
        <a
          hidefocus="true"
          target="_blank"
          href="https://www.kugou.com/about/protocol.html"
          >用户服务协议</a
        >
        |
        <a hidefocus="true" target="_blank" href="https://www.kugou.com/imusic/"
          >酷狗音乐人</a
        >
        |
        <a hidefocus="true" target="_blank" href="https://ztc.kugou.com"
          >酷狗直通车</a
        >
        |
        <a
          hidefocus="true"
          href="https://www.kugou.com/hr/kugouHr/dist/index.html"
          target="_blank"
          >招聘信息</a
        >
        |
        <a
          hidefocus="true"
          href="https://www.kugou.com/shop/help/serviceCenter"
          target="_blank"
          >客服中心</a
        >
        |
        <a
          hidefocus="true"
          href="http://survey.kugou.com/default/index/i=40CD7B8437008E65E67D82D9044C15C99C2E699859F51338"
          target="_blank"
          >用户体验提升计划</a
        >
      </div>
      <div class="copyright">
        <p class="can_select">
          我们致力于推动网络正版音乐发展，相关版权合作请联系copyrights@kugou.com
        </p>
        <p>
          信息网络传播视听节目许可证 1910564 增值电信业务经营许可证粤B2-20060339
          &nbsp;&nbsp;&nbsp;<a
            hidefocus="true"
            target="_blank"
            href="http://beian.miit.gov.cn"
            >粤ICP备09017694号</a
          ><span class="footerIcon"
            ><a
              target="_blank"
              href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/toDetail/E64D2439A71544C7B995FC0A53D8F965"
              >&nbsp;&nbsp;&nbsp;&nbsp;</a
            ></span
          >
        </p>
        <p>
          广播电视节目制作经营许可证（粤）字第01270号&nbsp;&nbsp;&nbsp;&nbsp;营业性演出许可证穗天演440106026&nbsp;&nbsp;&nbsp;<a
            hidefocus="true"
            target="_blank"
            href="https://www.kugou.com/common/images/license.jpg"
            >营业执照</a
          >
        </p>
        <p>
          穗公网监备案证第44010650010167&nbsp;&nbsp;&nbsp;&nbsp;互联网药品信息服务资格证编号（粤）-非经营性-2012-0018<a
            style=""
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602000141"
            >&nbsp;&nbsp;&nbsp;<span>粤公网安备 44010602000141号</span
            ><img
              style="vertical-align: text-bottom"
              src="https://www.kugou.com/common/images/icon_yuewangga1.png"
              width="16"
              height="16"
          /></a>
        </p>
        <p class="can_select">
          <a hidefocus="true" target="_blank" href="https://www.12377.cn"
            >互联网不良信息举报中心：www.12377.cn</a
          >&nbsp;&nbsp;&nbsp;&nbsp;酷狗不良信息举报邮箱：jubao_music@kugou.net&nbsp;&nbsp;&nbsp;&nbsp;客服邮箱：kefu@kugou.com
        </p>
        <p>
          Copyright&nbsp;&nbsp;&copy;&nbsp;&nbsp;2004-2020 KuGou-Inc.All Rights
          Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footerWrapper {
  background: #2c323b;
  min-width: 1000px;
  font: 13px/1.5 \5fae\8f6f\96c5\9ed1, simsun, sans-serif;
  .footer {
    padding-bottom: 50px;
    .links {
      position: relative;
      zoom: 1;
      border-bottom: 1px solid #3d424a;
      padding: 15px 0px;
      font-size: 12px;
      color: #b1b3b9;
      text-align: center;
      a {
        color: #b1b3b9;
        padding: 10px;
        text-decoration: none;
        outline: 0;
      }
    }
    .copyright {
      width: 1000px;
      margin: 0 auto;
      margin-top: 40px;
      p {
        line-height: 30px;
        text-align: center;
        color: #b1b3b9;
      }
      a {
        color: #b1b3b9;
      }
    }
  }
}
</style>
