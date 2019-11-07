<template>
  <div class="My">
      <div class="M-header">
        <div class="left">
          <img :src='user.avator' alt="">
        </div>
        <div class="right">
          <p class="name">姓名：{{user.nick}}</p>
          <div class="fl"><span>年龄：{{user.age}}</span><span>活跃度:89</span></div>
        </div>
      </div>
      <div class="Ym">
        <p><router-link to="/sc">我的收藏</router-link></p>
        <p><router-link to="/gr">个人信息</router-link></p>
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      user:[]
    }
  },
  created(){
    this.user=JSON.parse(localStorage.user)
  }
}
</script>

<style>
  .M-header{width: 100%;height: 150px;background: crimson;display: flex;}
  .left{width: 35%;height:150px}
  .left img{height: 100%;width: 100%;}
  .right{flex: 1}
  .name{margin: 30px}
  .fl span{margin: 0px}
  .Ym{height:467px}
  .Ym p{margin: 10px 0;height: 40px;background: antiquewhite;line-height: 40px;}
</style>