<template>
  <div class="dengl">
      <p>账号:<input type="text" v-model="username"></p>
      <p>密码:<input :type="type" v-model="userpwd"><span :class="['iconfont',flag?'icon-yanjing':'icon-yanjing_bi']" @click="yan"></span></p>
      <button @click="submit">登陆</button>
      <p><router-link to="/login2">注册账号</router-link></p>
  </div>
</template>

<script>
import axios from 'axios'
import {mapMutations,mapState} from 'vuex'
export default {
    data(){
        return {
            username:'',
            userpwd:'',
            type:"password",
            flag:false
        }
    },
    methods:{
        ...mapMutations(['getuser']),
        submit(){
            if(!this.username.trim()||!this.userpwd.trim()){
                alert("无内容")
            }else{
                axios.post("/login",{username:this.username,userpwd:this.userpwd}).then(({data})=>{
                   if(data.code===0){
                       alert(data.msg)
                   }else{
                       this.getuser(data.data)
                       localStorage.token=data.token
                       this.$router.push('/')
                   }
                })
            }
        },
        yan(){
            this.flag=!this.flag
            if(this.flag){
                this.type="type"
            }else{
                this.type="password"
            }
        }
    }
}
</script>

<style>

</style>