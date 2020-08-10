<template>
    <div class="container">
        <!-- 面包屑导航 -->
        <ul class="bread">
            <li>当前位置：</li>
            <li>首页</li>
            <li>></li>
            <li>用户中心</li>  
        </ul>
        <!-- 登录部分开始 -->
        <div class="login">
            <!-- 登录部分左边开始 -->
            <div class="login-left">
                <span>用户名:</span><input class="inp1" type="text" v-model="uname"><br>
                <span>密码:</span><input class="inp2" type="password" v-model="upwd"><br>
                <span :style="{color:logincolor}">{{msg}}</span><br>
                <input class="inp3" type="checkbox"><span>请保存我这次登录的信息</span> <br>
                <button @click="login"></button>
                <p>
                    <span><a href="#">密码问题找回密码</a> </span>
                    <span><a href="#">注册邮箱找回密码</a> </span>
                </p>
            </div>
            <!-- 登录部分左边结束 -->
            <!-- 登录右边部分开始 -->
            <div class="login-right">
                <p>如果您不是会员，请注册</p>
                <p >友情提示</p>
                <p>不注册为会员也可以在本店购买商品</p>
                <p>但是注册之后您可以：</p>
                <p>1.保存您的个人资料</p>
                <p>2.收藏您关注的商品</p>
                <p>3.收藏您关注的商品</p>
                <p>4.订阅本店商品信息</p>
                <p><button></button></p>
            </div>
            <!-- 登录右边部分结束 -->
            <!-- 登录部分结束 -->
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
    .login{
        display: flex;
        margin: 10px 0;
        height: 300px;
        border: 1px solid #ddd;
        padding: 15px;
    }
    .login-left{
        width: 450px;
        border-right: 1px solid gray;
    }
    .login-right{
        width:450px
    }
    .login-left span{
        font-size:12px ;
        color: black;
    }
    .inp1,.inp2{
        margin-bottom: 20px;
        width: 200px;
        height: 15px;
        border: 1px solid #ddd;
        padding: 2px;
    }
    .inp2{
        width: 150px !important;
        margin-right: 35px;
    }
    .inp3{
        margin-left:-60px ;
    }
    .login-left button{
        margin: 15px 0;
        width:125px ;
        height: 40px;
        border: 0;
        background-image: url('../assets/bnt_ur_log.gif');

    }
    .login-left p span a{
        margin-left:10px ;
        color: #9e9e9e;
        text-decoration: none;
    }
    .login-right p{
        font-size: 13px;
        margin-top: 8px;
    }
    .login-right  :nth-child(2){
        color: red;
    }
    .login-right button{
        margin: 15px 0;
        width:125px ;
        height: 40px;
        border: 0;
        background-image: url('../assets/bnt_ur_reg.gif');
    }
</style>
<script>
export default {
    data(){
        return{
            uname:'',
            upwd:'',
            msg:'',
            logincolor:'',
            loginMsg:{},
        }
    },
    methods:{
        login(){     
            this.axios.get("/user/login",{
            params:{ 
                uname:this.uname,
                upwd:this.upwd
             }
        }).then(result=>{
        if(result.data==0){
          this.msg="用户名或密码错误";
          this.logincolor="red";
        }else{
          this.msg="登录成功";
            // 将返回的数据存到loginMsg变量
          result.data[0] 
          this.loginMsg=result.data[0]
          this.logincolor="green";
          this.$store.commit('login',this.loginMsg)
          this.$router.push('/me');
            }
         });
        }
    }
}
</script>
