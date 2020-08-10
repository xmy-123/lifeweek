<template>
    <div class="me">
        <p class="p1">{{this.$store.state.loginMsg[0].uname}}欢迎您回到 三联生活商城</p>
        <p>您的上一次登录时间：</p>
        <p>您的等级是注册用户，您还差1000积分到达VIP</p>
        <p><span>您的账户余额</span><span>点击<a href="#">充值</a></span></p>
    </div>
</template>
<style scoped>
 .me{
     width: 960px;
     height: 500px;
     margin: 0 auto;
     border:1px solid grey
 }
 p{
     font-size: 14px;
     margin-bottom: 10px;
     text-align: left;
     margin-left: 200px;
 }
 .p1{
     margin-top: 100px;
 }
</style>