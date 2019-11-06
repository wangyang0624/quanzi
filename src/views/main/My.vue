<template>
  <div class="My">
      <div class="M-header">
        <div class="left">
          <img :src='user.avator' alt="">
        </div>
        <div class="right">
          <p class="name">姓名：{{user.nick}}</p>
          <p class="fl"><span>年龄：{{user.age}}</span><span>活跃度:89</span></p>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(["user"])
  }
}
</script>

<style>
  .M-header{width: 100%;height: 150px;background: crimson;display: flex;}
  .left{width: 50%;height:150px}
  .left img{height: 100%}
  .right{flex: 1}
  .name{margin: 30px}
  .fl span{margin: 0px 10px}
</style>