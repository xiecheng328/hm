//引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义初始化变量
const state = {
    productlist: []
}

//定义动作 事件处理方法
const mutations = {
    setProductList(state, status){
        state.productlist = status;
    }
}

//对外的事件方法
const actions = {
        setProductList: ({commit}, status) = > commit('setProductList', status)
}

const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
