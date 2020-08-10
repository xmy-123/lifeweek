<template>
    <div class="container">
        <!-- 面包屑导航 -->
        <ul class="bread">
            <li>当前位置：</li>
            <li>首页</li>
            <li>></li>
            <li>购物流程</li>  
        </ul>
        <!-- 购买须知 -->
        <div class="msg">
            <p class="p1">商品列表</p>
            <p class="red"> ● 购买过刊或批量购买，建议先联系读者服务部查询库存，电话：(010)84050425/51。</p>
            <p> 1．发刊时间：每周四发货。如收货出现问题，请及时向读者服务部（010-84050425/84050451,工作日9:00-17:00）反馈信息。</p>
            <p> 2．配送方式</p>
            <p> 快递发刊。每期出刊后直接快递配送，比邮政投递更迅速、更安全。请务必提供订阅人详细地址及手机号码。<span class="red">西藏、新疆、青海地区采用邮政印刷品挂号方式发货）。</span>（</p>
            <p> 3．杂志社不办理已发杂志的退订，一旦开始发刊，杂志社不再办理退订。</p>
            <p> 4.可开具发票，如有需要请在订单备注处留言注明发票抬头，内容，税号，邮箱。发票统一为增值税普票（电子发票）直接发送到邮箱。发票统一为增值税普票电子发票，内容可开图书、期刊或具体杂志名称。如订单完成一周后未收到电子发票邮件，请查看是否被拦截至垃圾邮件信箱，如有问题可联系读者服务部进行反馈。</p>
            <p>户名：三联生活传媒有限公司</p>
            <p>账号：0200 0127 0920 1646 336</p>
            <p>开户行：中国工商银行股份有限公司北京燕莎支行</p>
            <table class="shoptable">
                <tr>
                    <td><p>商品名称</p></td>
                    <td><p>本店价</p></td>
                    <td><p>购买数量</p></td>
                    <td><p>小计</p></td>
                    <td><p>操作</p></td>
                </tr>
                <tr>
                    <td colspan="3"><p class="xiaoji">购物金额小计<span>${{}}</span></p></td>
                    <td><button class="btn3">清空购物车</button></td>
                    <td><button class="btn3">更新购物车</button></td>
                </tr>
                <tr>
                    <td colspan="4"><button class="btn4">继续购物</button></td>
                    <td><button class="btn5">去结算</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped>
.container{
    width: 960px;
    margin:0 auto;
    }
.bread{
    margin-top:10px ;
    display: flex;
    font-size:12px ;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
    }
.msg {
    font-size: 14px;
    color: #666;
    text-align: left;

    
}
.msg > p{
    margin: 10px; 
}
.p1{
    background-color: #ececec;
    color: #666;
    height: 20px;
    line-height: 20px;
    padding-left: 10px;
    font-size: 13.3px;
    font-weight: bold;
}
.red{
    color: red;
}
.shoptable{
    width: 100%;
    text-align: center;
    font-size: 12px;
    height:90px
}
.xiaoji{
    text-align: left;
    padding-left: 20px;
}
.btn3{
    width:139px ;
    height: 21px;
    
}
</style>