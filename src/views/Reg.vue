<template>
    <div>
        <!-- 标签页开始 -->
        <!-- 标签页导航 (点击后样式改变未实现)-->
        <ul class="tabs">
            <li><a href="#" :class="{aclick:i==0}" @click="change(0)">登录</a></li>
            <li><a href="#" :class="{aclick:i==1}" @click="change(1)">注册</a></li>
            <li><a href="#" :class="{aclick:i==2}" @click="change(2)">找回密码</a></li>
        </ul>
        <!-- 标签页内容部分开始 -->
        <div class="container">
            <!-- 登录部分 -->
            <div class="reg" v-if="i==0">
                <p>HI,未<router-link to='/reg'>登录</router-link>网友，登录三联生活网，一起交易流文化分享快了生活</p>
                <!-- 登录左边部分 -->
                <div class="reg1">
                    <div class="reg-left">
                        <p>使用用户名登录</p>
                        <input class="inp1" type="text" placeholder="用户名" v-model="uname"><br>
                        <input class="inp1" type="password" placeholder="密码" v-model="upwd"><br>
                        <input class="inp1" type="text" placeholder="验证码">
                        <p><a href="#">换一张</a></p>
                        <button @click="login()">登录</button><br>
                        <span :style="{color:logincolor}">{{msg}}</span><br>
                        <input type="checkbox"><span>下次自动登录</span> <span>忘记密码</span>
                    </div>
                    <!-- 登录右边部分 -->
                    <div class="reg-right">
                        <p>没有三联生活账号</p>
                        <button>注册</button>
                        <p>使用社交账号登录</p>
                        <div class="icon">
                            <img src="../assets/wx.gif" alt="">
                            <button>微信登录</button>
                            <img src="../assets/wb.gif" alt="">
                            <button>微博登录</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 注册部分 -->
            <div class="reg" v-else-if="i==1">
                <p>HI,未<router-link to='/login'>登录</router-link>网友，登录三联生活网，一起交易流文化分享快了生活</p>
                <!-- 左边部分 -->
                <div class="reg1">
                <div class="reg-left">
                        <p>使用常用邮箱注册</p>
                        <input class="inp1" type="text" placeholder="用户名" 
                        v-model="uname"
                        @input="checkUname"
                        ><br>
                        <span :style="{color:unamecolor}">{{unameMsg}}</span><br>
                        <input class="inp1" type="text" placeholder="常用邮箱"
                         v-model="email"
                        @input="checkEmail"
                        ><br>
                        <span :style="{color:emailcolor}">{{emailMsg}}</span><br>
                        <input class="inp1" type="password" placeholder="密码" v-model="upwd"
                        @input="checkUpwd"
                        ><br>
                        <span :style="{color:upwdcolor}">{{upwdMsg}}</span><br>
                        <input class="inp1" type="password" placeholder="确认密码"
                         v-model="conupwd"
                        @input="checkConupwd"
                         ><br>
                        <span :style="{color:conupwdcolor}">{{conupwdMsg}}</span><br>
                        <input class="inp1" type="text" placeholder="验证码">
                        <p><a href="#">换一张</a></p>
                        <button @click="reg">快速注册</button><br>
                        <span :style="{color:regmsgcolor}">{{regmsg}}</span>
                    </div>
                <!-- 右边部分 -->
                <div class="reg-right">
                    <p>没有三联生活账号</p>
                    <button>注册</button>
                    <p>使用社交账号登录</p>
                    <div class="icon">
                        <img src="../assets/wx.gif" alt="">
                        <button>微信登录</button>
                        <img src="../assets/wb.gif" alt="">
                        <button>微博登录</button>
                    </div>
                </div>   
                </div>
            </div>
            <!-- 找回密码 -->
            <div class="reg" v-else>
                <p>HI,未<router-link to='/reg'>登录</router-link>网友，登录三联生活网，一起交易流文化分享快了生活</p>
                <!-- 左边部分 -->
                <div class="reg1">
                <div class="reg-left">
                    <p>忘记密码</p>
                    <input class="inp1" type="text" placeholder="用户名"
                    v-model="uname"
                    ><br>
                    <input class="inp1" type="text" placeholder="邮箱"
                    v-model='email'
                    ><br>
                    <button @click='found'>提交</button><br>
                    <span>{{foundMsg}}</span>                
                </div>
                <!-- 右边部分 -->
                <div class="reg-right">
                    <p>没有三联生活账号</p>
                    <button>注册</button>
                    <p>使用社交账号登录</p>
                    <div class="icon">
                        <img src="../assets/wx.gif" alt="">
                        <button>微信登录</button>
                        <img src="../assets/wb.gif" alt="">
                        <button>微博登录</button>
                    </div>
                </div>   
                </div>
            </div>
        </div>
        <!-- 标签页内容部分结束 -->
        <!-- 标签页结束 -->
    </div>
</template>
<style scoped>
    .tabs{
        display: flex;
        width: 950px;
        height: 50px;
        margin: 0 auto;
        background-color: rgba(231, 230, 230);
    }
    .tabs a{
        display: block;
        width: 150px;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
        text-decoration: none;
        color:#333 ;
        box-sizing: border-box;
    }
    .aclick{
        background-Color:white ;
        border-top: 2px solid red;
        }
    .reg>p{
        width: 950px;
        margin: 0 auto;
        font-size: 16px;
        color: #999;
        height: 65px;
        line-height: 65px;
        border-bottom: 1px solid #999;
        text-align: left;
    }
 
    .reg1{
        width: 950px;
        margin: 0 auto;
        display: flex;
        padding: 20px;

    }
    .reg-left{
        width: 450px;
        border-right: 1px solid rgb(201, 197, 197);
    }
    .reg-right{
        width: 450px;
    }
    .reg-left p{
        font-size: 16px;
        color: #999;
        height: 35px;
        line-height: 35px;
    }
    .inp1{
        width: 300px;
        height: 30px;
        margin-top: 15px;
        border: 1px solid rgb(202, 199, 199);
        outline: none;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .reg-left p a{
        text-decoration: none;
    }
    .reg-left button{
        width: 70px;
        height: 30px;
        border: 1px solid rgb(207, 201, 201);
        margin-bottom: 10px;
    }
    .reg-left span{
        color: #999;
    }
    .reg-right p{
        margin: 20px 0;
        font-size: 14px;
        color:#999 ;
    }
    .reg-right>button{
        background-color:gray ;
        color: white;
        width: 70px;
        height: 35px;
        border: none;
    }
    .icon img{
       width: 50px;
    }
    .icon button{
        border:none;
        width:70px;
        height: 40px;
        font-size: 14px;
        color: white;
        background-color: violet;
    }
</style>
<script>
export default {
    data(){
        return{
            i:1,
            // 登录功能
            msg:'',
            logincolor:'',
            // 注册功能
            // 保存用户名变量
            uname:'',
            // 保存用户邮箱变量
            email:'',
            // 保存密码变量
            upwd:'',
            // 保存重复密码变量
            conupwd:'',
            unameMsg:'',
            emailMsg:'',
            upwdMsg:'',
            conupwdMsg:'',
            regmsg:'',
            unamecolor:'', 
            emailcolor:'', 
            upwdcolor:'', 
            conupwdcolor:'',
            regmsgcolor:'',
            //密码找回功能,
            foundMsg:'',
    }
    },
    methods:{
        change(i){
            this.i=i;
        },
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
          this.msg="登录成功"
          this.logincolor="green";
          this.$router.push('/me');
            }
         });
        },
        //检测用户名
        checkUname(){
            let uname = this.uname;
            //校验用户名,用户名的规则为:字母、数字及下划线的组合,长度为6~12个字符
            let usernameRegExp = /^[0-9A-Za-z_]{6,12}$/
            if(usernameRegExp.test(uname)){
            this.unameMsg = '用户名格式正确';
            this.unamecolor='green';
            return true;
            } else{
            this.unameMsg="用户名位字母、数字及下划线的组合,长度为6~12个字符"
            this.unamecolor='red';
            return false
            }
        },
        // 检查邮箱
        checkEmail(){
            let email=this.email;
            // 校验邮箱
            let emailRegExp=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(emailRegExp.test(email)){
                this.emailMsg='邮箱格式正确';
                this.emailcolor='green';
                return true;
            }else{
                this.emailMsg='请输入正确格式的邮箱号';
                this.emailcolor='red';
                return false;
            }
        },
        // 检查密码
        checkUpwd(){
            let upwd=this.upwd;
            // 校验密码
            let passwordRegExp = /^[0-9A-Za-z_]{8,20}$/;
            if(passwordRegExp.test(upwd)){
            this.upwdMsg = '密码格式正确';
            this.upwdcolor='green';
            return true;
            } else {
            this.upwdMsg = '密码的规则为:字母、数字及下划线的组合,长度为8~20个字符';
            this.upwdcolor='red';
            return false
            }
        },
        // 检查重复密码
        checkConupwd(){
            let conupwd = this.conupwd;
            if(conupwd == this.upwd){
            this.conupwdMsg = '两次密码一直';
            this.conupwdcolor='green';
            return true;
            } else {
            this.conupwdMsg = '两次密码不一致';
            this.conupwdcolor='red';
            return false;
            }
        },
        reg(){     
        //仍然进行用户名、密码及确认密码的校验
            if(this.checkUname() && this.checkEmail() && this.checkUpwd() && this.checkConupwd()){
            // 如果所有信息都为true,则进行提交;
            // this.axios.post(....).then(res=>{....})
            this.axios.post(
                "/user/userReg",
                "uname="+this.uname+"&email="+this.email+"&upwd="+this.upwd,
                ).then(result=>{
                   if(result.data.code=='202'){
                       this.regmsg='该用户名已存在';
                       this.regmsgcolor='red';
                   }else{
                       this.regmsg='注册成功';
                       this.regmsgcolor='green';
                       this.$router.push('/');
                   }
                });
        }
        },
        found(){
            this.axios.post(
                "/user/found",
                "uname="+this.uname+"&email="+this.email,
            ).then(result=>{
                if(result.data.length!=0){
                    this.foundMsg=`您的密码是:${result.data[0].upwd}请妥善保管`}
                else{
                    this.foundMsg=`请正确的用户名及邮箱号`
                };
            })
        }
    }
}
</script>