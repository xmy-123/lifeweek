<template>
  <div>
    <!-- 内容部分开始 -->
    <div>
      <!-- 内容第一部分 -->
      <div class="content">
        <div class="part-top">
          <span>新品上市</span>
          <span><a href="#">更多>></a></span>
        </div>
        <ul class="img">
          <li v-for="(item,index) of product" :key="index">
            <div @click="search(item)">
            <img src="../assets/images/932_thumb_G_1571076349058.jpg" alt="">
            <p >￥:{{item.price}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 内容第二部分 -->
      <div class="content">
        <div class="part-top">
          <span>热销商品</span>
          <span><a href="#">更多>></a></span>
        </div>
         <ul class="img">
          <li v-for="(item,index) of product" :key="index">
            <div @click="search(item)">
            <img src="../assets/images/932_thumb_G_1571076349058.jpg" alt="">
            <p>￥:{{item.price}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 内容第三部分 -->
      <div class="content">
        <div class="part-top">
          <span>推荐编辑</span>
          <span><a href="#">更多>></a></span>
        </div>
         <ul class="img" @click="search(item)">
          <li v-for="(item,index) of product" :key="index">
            <div>
            <img src="../assets/images/932_thumb_G_1571076349058.jpg" alt="">
            <p>￥:{{item.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>	
    <!-- 内容部分结束 -->
  </div>
</template>
<style scoped>
.nav{
  margin: 0 auto;
  width: 960px;
  height: 35px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
}
.nav>li{
  margin: 0 10px;
}
.nav>li>a{
  text-decoration: none;
  line-height:35px;
  font-size: 14px;
  color:#414141 ;
}
.content{
  width: 960px;
  margin: 0 auto;
}
.part-top{
  display: flex;
  justify-content: space-between;
  margin-top:20px;
  border-bottom:2px solid black ;
}
.part-top>:first-child{
  display: block;
  width: 60px;
  height: 25px;
  background-color:black ;
  color: white;
  font-size: 12px;
  font-weight: bold;
  line-height: 25px;
}
.part-top a{
  text-decoration: none;
  font-size: 12px;
  color: #414141;
}
.img{
  display: flex;
  justify-content: space-between;
}
.img img{
  margin-top:10px ;
  width: 210px;
  height: 280px;
}
.img p{
  margin-top:5px ;
  color: orange;
}
</style>
<script>
export default {
  data(){
    return{
      keywo:'',
      product:[],
    }
  },
  methods:{
    search(item){
      this.$store.commit('search',item)
       this.$router.push('/search')
    }
  },
  mounted(){
   this.axios.get('/index/product').then(result=>{
      for(let n=0;n<result.data.length;n++){
        this.product.push(result.data[n])
      }
    })
    console.log(this.product)
  }
}
</script>
