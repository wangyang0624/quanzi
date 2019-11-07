import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    list:[]
  },
  getters:{
    mmp(state){
      return state.list.filter(item=>item.store)
    }
  },
  mutations: {
    /**
     * 请求登陆数据
     */
    getuser(state,lodpay){
      state.user=lodpay
    },
    /**
    * 请求页面数据
    */
    getlist(state,lodpay){
      state.list=lodpay
    },
    /**
     * 点赞
     */
    // changZan(state,lodpay){
    //   let obj=state.list.find(item=>item.publishID==lodpay)
    //   if(obj.zanFlag){
    //     obj.zanNum--
    //     obj.zanFlag=false
    //   }else{
    //     obj.zanNum++
    //     obj.zanFlag=true
    //   }
    // },
    /**
     * 点击收藏
     */
    // changSc(state,lodpay){
    //   let obj=state.list.find(item=>item.publishID==lodpay)
    //   obj.store=!obj.store
    // },
    /**
     * 评论显示隐藏
     */
    // pinlun(state,lodpay){
    //   let obj=state.list.find(item=>item.publishID==lodpay)
    //   if(obj.flag){
    //     obj.flag=false
    //   }else{
    //     obj.flag=true
    //   }
    // },
    /**
    * 评论
    */
    // ping(state,lodpay){
    //   let {id,txt}=lodpay
    //   let loacalUser= JSON.parse(localStorage.user)
    //   let obj=state.list.find(item=>item.publishID==id)
    //   let commitObj={
    //     "userID":loacalUser.id,
    //     "nick":loacalUser.nick,
    //     "avator":loacalUser.avator, 
    //     "txt":txt  
    //   }
    //   obj.comment.push(commitObj)
    //   obj.flag=false
    // }
  },
  actions: {
    mylist({commit}){
      axios('/getlist').then(({data})=>{
        commit('getlist',data)
      })
    },
    changZan({commit},id){
      axios('/dianzan?id='+id).then(({data})=>{
        commit('getlist',data)
      })
    },
    changSc({commit},id){
      axios('/shochang?id='+id).then(({data})=>{
        commit('getlist',data)
      })
    },
    pinlun({commit},id){
      axios('/pinglun?id='+id).then(({data})=>{
        commit('getlist',data)
      })
    },
    ping({commit},obj){
      let user=JSON.parse(localStorage.user)
      obj.user=user
      axios.post('/pinglun2',obj).then(({data})=>{
        commit('getlist',data)
      })
    }
  },
  modules: {
  }
})
