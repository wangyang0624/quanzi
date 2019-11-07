<template>
  <div class="Qz">
    <div class="top">
      <span>@</span>
      <input type="text" placeholder="试试搜索你的好友名字" />
    </div>
    <div class="Q-main"> 
      <Item v-for="item in list" :key="item.publishID" :myitem='item'/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Item from '../../components/Item'
export default {
  components:{
    Item
  },
  created() {
    this.mylist();
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(["mylist"])
  }
};
</script>

<style>
.Qz {
  display: flex;
  flex-direction: column;
}
.Qz .top {
  height: 40px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
.Qz .top span {
  width: 40px;
  text-align: center;
}
.Qz .top input {
  flex: 1;
  margin: 0 5px;
  height: 25px;
  background: #eee;
  border: none;
  outline: none;
  border-radius: 12px;
  color: #ccc;
  text-align: center;
}
.Q-main {
  flex: 1;
  overflow: auto;
  padding: 0 8px;
}
</style>