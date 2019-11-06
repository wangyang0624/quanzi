<template>
  <div class="Footer">
     <router-link to='/main/quanz'>圈子</router-link>
     <router-link to='/main/my'>我的</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .Footer a{flex: 1;text-align: center;line-height: 50px;color: #000;}
    .Footer .router-link-active{background: cornsilk;color: red}
</style>