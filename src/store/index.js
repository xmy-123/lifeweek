import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    // 登录状态
    isLogin:false,
    loginMsg:[],
    searchMsg:[],
    // 测试用
    product:[],
  },
  mutations: {
    login(state,payload){
      state.isLogin=true;
      state.loginMsg.push(payload);
    },
    exit(state){
      state.isLogin=false;
    },
    search(state,payload){
      for(let n=0;n<payload.length;n++){
      state.searchMsg.push(payload[n])
    }
    },
    add_product_mutation(state,payload){
      state.product.push(payload)
    }
  },
  actions: {
    // 测试
    // context参数自动代表当前的mutations、state、getters
    get_data_action(context){
      Axios.get('http://127.0.0.1:9090/user/select').then(res=>{
            // 将服务器返回的数据添加到state 中的products数组中去
            for(let n=0;n<res.data.length;n++){
            context.commit('add_product_mutation',res.data[n])
          }
      })
    }
  },
  modules: {
  }
})
export default store
