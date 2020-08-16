import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    // 登录状态
    isLogin:false,
    loginMsg:[],
    searchcount:'',
    searchMsg:[],
    // 添加购物车
    addcount:'',
    // 添加到购物车的产品信息
    shopcarMsg:[],
      cartList:[]
	// CartList结构
	/* 
	CartList = {
		title: "", // 商品名称
		price: "", // 商品价格
		count: "", // 商品数量
	} */
  },
  getters:{
		_getShoppingCart (state) {
				return state.cartList
		}
	},
  mutations: {
    // 增加商品
    _addToCart(state,payload){
        state.cartList.push(payload)
      } ,
		_addCartList(state,product){
			// 获取购物车状态
			for(let i = 0; i < state.cartList.length; i++){
				let tmp = state.cartList[i]
				if(tmp.category_id == product.category_id){
					state.cartList[i].count ++
					state.cartList[i].totalPrice = state.cartList[i].price*state.cartList[i].count
				}
			}
			return state.cartList
		},
		// 减少商品
		_minusCartList(state,product){
			for(let i = 0; i < state.cartList.length; i++){
				let tmp = state.cartList[i]
				if(tmp.category_id == product.category_id){
        state.cartList[i].count--
        console.log(state.cartList[i].count)
				state.cartList[i].totalPrice = state.cartList[i].price*state.cartList[i].count
				}
				if(product.count <= 0){
						state.cartList.splice(i,1)
				}
			}
			return state.unLogincartList
    },
    _del(state,product){
      for(let i = 0; i < state.cartList.length; i++){
        let tmp = state.cartList[i]
        if(tmp.category_id == product.category_id){
        state.cartList.splice(i,1)
        }
    }
    },
    // 添加购物车
    addshopcar_count(state,payload){
        state.addcount=payload
    },
    // 修改添加到购物车的产品信息
    addshopcar_msg(state,payload){
        state.shopcarMsg.push(payload)
    },
    // 清空购物车数据
    clear_count(state){
      state.addcount=''
    },
    // 修改登录状态
    // 登录
    login(state,payload){
      state.isLogin=true;
      state.loginMsg.push(payload);
    },
    // 退出登录
    exit(state){
      state.isLogin=false;
    },
    // 页面顶部查找功能
    search(state,payload){
      for(let n=0;n<=state.searchcount;n++){
      state.searchMsg.push(payload)
    }
    },
    searchcount(state,payload){
      state.searchcount=payload
    },
    add_product_mutation(state,payload){
      state.product.push(payload)
    }
  },
  actions: {
    // 测试
    // context参数自动代表当前的mutations、state、getters
    get_data_action(context){
      Axios.get('http://127.0.0.1:9090/users/select').then(res=>{
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
