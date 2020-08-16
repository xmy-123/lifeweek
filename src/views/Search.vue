<template>
    <div>
        <div id="container">
            <!-- 详情页左边图片部分 -->
            <div class="left">
                <img src="../assets/images/934_thumb_G_1571076514697.jpg" alt="">
            </div>
            <!-- 详情页右边信息部分 -->
            <div class="right">
                <p class="title">{{this.$store.state.searchMsg[0].title}}</p>
                <p class="title">商品点击数</p>
                <p class="title">价格:￥<span style="color:red">{{this.$store.state.searchMsg[0].price}}</span>元</p>
                <p class="title">购买数量：<input style="width:50px" type="number" min="0" v-model="buycount"></p>
                <a @click="_addToCart"><img src="../assets/goumai2.gif" alt=""></a><a to="/"><img src="../assets/shoucang2.gif" alt=""></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            buycount:'1'
        }
    },
    methods:{
        // 点击添加购物车按钮，将此商品信息添加到vuex中
        _addToCart(){
            if(this.buycount>=0){
            this.$store.state.searchMsg[0].count=this.buycount;
            this.$store.commit('_addToCart',this.$store.state.searchMsg[0])
            this.$router.push('shopcar')
            console.log(this.$store.state.cartList)
            }
        }
    }
}
</script>
<style scoped>
    #container{
        width: 900px;
        margin: 0 auto;
        display: flex;
    }
    .left{
        width: 312.22px;
        height: 415.21px;
    }
    .left>img{
        width: 100%;
        height: 100%;
    }
    .right{
        padding-top: 50px;
    }
    .right>p{
        width: 500px;
        text-align: left;
        border-bottom: 1px solid #333;
        margin-bottom: 50px;
    }
    .title{
        font-size: 14px;
        font-weight: bold;
        
    }
    .right>a{
        width: 150px;
        height: 33px;
        display: block;
        float: left;
    }
</style>
