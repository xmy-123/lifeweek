<template>
    <div>
        <!-- 页面底部开始 -->
    <div class="bottom">
      <ul>
        <li> 新手上路</li>
        <li>售后流程</li>
        <li>购物流程</li>
      </ul>
      <ul>
        <li>配送与支持</li>
        <li>配送流程</li>
        <li>支付方式说明</li>
      </ul>
      <ul>
        <li>会员中心</li>
        <li>我的收藏</li>
        <li>我的订单</li>
      </ul>
      <ul>
        <li>服务保证</li>
        <li>退换货原则</li>
        <li>产品质量保证</li>
      </ul>
      <ul>
        <li>联系我们</li>
        <li>网站故障报告</li>
        <li>投诉与建议</li>
      </ul>
    </div>
    <div class="bottom2"></div>
    <ul class="bottom3">
      <li><a href="#">免责声明</a> </li>
      <li>|</li>
      <li><a href="#">隐私保护</a> </li>
      <li>|</li>
      <li><a href="#">合作方式</a> </li>
      <li>|</li>
      <li><a href="#">联系我们</a> </li>
    </ul>
    <div class="bottom4">
      <p>©2005-2020 三联生活商城 版权所有，并暴露所有权利</p>
      <p>北京市朝阳区霞光里9号B座 Tel:(010)84050425/21/34 E-mail dzfw@lifeweek.com.cn</p>
      <p>ICP备案证书号:京ICP证12011204号</p>
    </div>
    <!-- 页面底部结束 -->
    </div>
</template>
<style scoped>
.bottom{
  width: 960px;
  display: flex;
  justify-content: space-around;
  border-top:1px solid #666;
  margin: 20px auto;
}
.bottom>ul>:first-child{
  font-weight: bold;
}
.bottom>ul>:last-child{
  margin-bottom:8px
}
.bottom>ul>li{
  font-size: 12px;
  margin-top:8px ;
}
.bottom2{
  width: 960px;
  height: 10px;
  margin: 0 auto;
  border: 1px solid #666;
}
.bottom3{
  width: 300px ;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.bottom3 a{
  text-decoration:none;
  font-size: 12px;
  font-weight: bold;
}
.bottom4{
  margin-top:20px ;
}
.bottom4 p{
  font-size: 12px;
}
.bottom4 >:last-child{
  margin-top:50px;
}
</style>