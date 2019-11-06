<template>
  <div id="app">
      <router-view class="Main"></router-view>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
    components:{
        Header,Footer
    }
}
</script>

<style>

*{margin: 0;padding: 0;text-decoration: none;list-style: none;box-sizing: border-box}
#app{position: absolute;top: 0;left: 0;right: 0;bottom: 0;display: flex;flex-direction: column}
/* .Header{width: 100%;height: 50px;border-bottom: 1px solid #000} */
.Main {flex: 1;overflow: auto}
.Footer {width: 100%;height: 50px;border-top: 1px solid #000;display: flex;}
</style>
