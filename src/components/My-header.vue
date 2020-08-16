<template>
     <!-- 商城顶部开始 -->
     <div>
    <div class="top">
      <!-- top-left logo部分 -->
      <div class="top-left">
        <router-link to='/'>
        <img src="../assets/logo.gif" alt="">
        </router-link>
      </div>
      <!-- top-center 搜索框位置 -->
      <div class="top-center">
        <input placeholder="关键词" type="text"  v-model="keyword">
        <div><button @click="search()">搜索</button></div>
      </div>
      <!-- top-right 登录注册等 -->
      <ul class="top-right" v-if="this.$store.state.isLogin==false">
        <li>
          <router-link to="/login">登录</router-link>
        </li>
        <li><router-link to="/reg">注册</router-link> </li>
        <li><router-link to="/shopcar">查看购物车</router-link> </li>
        <li><a href="#">购物中心</a></li>
      </ul>
      <ul class="top-right" v-else>
        <li><router-link to="/me">{{this.$store.state.loginMsg[0].uname}}</router-link> </li>
        <li>
          <router-link to="/login" @click="exit">退出</router-link>
        </li>
        <li><router-link to="/reg">注册</router-link> </li>
        <li><router-link to="/shopcar">查看购物车</router-link> </li>
        <li><a href="#">购物中心</a></li>
      </ul>
      
    </div>
    <!-- 导航栏部分开始 -->
      <ul class="nav">
        <li><a href="#">商城首页</a></li>
        <li v-for="(item,index) of category" :key="index"><a href="">{{item.cname}}</a></li>
      </ul>
    <!--导航栏部分结束 -->
    </div>
    <!-- 商城顶部结束 -->
    
</template>
<style scoped>
.top{
  display: flex;
  margin: 0 auto;
  width: 960px;
  height: 70px;
  margin-top: 30px;
}
.top-center{
  margin: 5px 0 0 100px;
  height: 26;
}
.top-center>input{
  width: 286px;
  border-color: lightgrey;
  padding: 5px;
  font-size: .5rem;
}
.sp1{
  display:block;
  font-size: 12px;
}
.top-right{
  display: flex;
  margin-left: 100px ;
}
.top-right>li{
  margin-left: 10px;
}
.top-right>li>a{
  font-size: 14px;
  text-decoration: none;
  line-height: 35px;
}
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
</style>
<script>
export default {
  data(){
    return{
      // 储存搜索关键词
      keyword:'', 
      // 储存商品分类信息
      category:[],
      // 
      searchMsg:[],
    }
  },
  methods:{
    search(){
       // 发送ajax请求
      this.axios.post(
      "/pro/search",
      "keyword="+this.keyword
      ).then(result=>{
        // 如果返回的数组不等于0，则成功搜索到关键字，遍历数组
        if(result.data.length!==0){
          // 遍历返回的数组
         for(let n=0;n<result.data.length;n++){
          // 调用vuex中的mutations的search方法，并将遍历的到的数据传入commit
            this.$store.commit('searchcount',result.data.length)
            this.$store.commit('search',result.data[n])
         };
        // 跳转到search路由
         this.$router.push('/search')
        }
      }
    );
    },
    exit(){
      this.$store.commit('exit')
    }
  },
  mounted(){
    this.axios.get('/index/select').then(result=>{
      for(let n=0;n<result.data.length;n++){
        this.category.push(result.data[n])
      }
    })
  }
}
</script>
