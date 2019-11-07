<template>
  <div class="Sc">
      <Item v-for="item in mmp" :key="item.publishID" :myitem='item'/>
  </div>
</template>

<script>
import Item from '../../components/Item'
import { mapGetters } from 'vuex'
export default {
  components:{Item},
  computed:{
    ...mapGetters(['mmp'])
  }
}
</script>

<style>

</style>