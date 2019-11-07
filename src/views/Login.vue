<template>
  <div class="dengl">
        <div class="D-header">登陆</div> 
      <p><input type="text" v-model="username" placeholder="账号"></p>
      <p><input :type="type" v-model="userpwd" placeholder="密码"><span :class="['iconfont',flag?'icon-yanjing':'icon-yanjing_bi']" @click="yan"></span></p>
      <button @click="submit">登陆</button>
      <router-link to="/login2" tag="span" class="span">注册账号</router-link>
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
                       localStorage.user=JSON.stringify(data.data)
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
    .D-header{background: crimson; width: 100%;height: 50px;text-align: center;line-height: 50px}
    .dengl p{width: 80%;height: 50px; margin: 10px 0;}
    .dengl p>input {padding: 0 5px; width: 90%;height: 40px;border: 0;background: #ccc;outline: none;margin-left: 50px;}
    .dengl button{width: 80%;height: 50px;border: 0; margin: 15px 35px;}
    .dengl p>span{position: fixed;top: 130px;right: 70px;}
    .span{text-align: center; display: block}
</style>