<template>
  <div class="Item">
    <div class="I-header">
      <img :src="myitem.avator" alt />
      <div class="I-h-main">
        <h4>{{myitem.nick}}</h4>
        <p>{{myitem.publishtime}}</p>
      </div>
      <span :class="[myitem.store?'red':null]" class="iconfont icon-shoucang"  @click="changSc(myitem.publishID)" ></span>
    </div>
    <div class="I-main">
      <div class="I-imgs">
        <div v-show="myitem.imgs" v-for="(item,index) in myitem.imgs" :key="index">
          <img :src="item" alt />
        </div>
      </div>
      <div class="I-text">
          {{myitem.txt}}
          <p v-for='(v,index) in myitem.comment' :key='index'>{{v.nick}}|{{v.txt}}</p>
      </div>
    </div>
    <div class="I-footer">
      <span class="iconfont icon-dianzan" :class="[myitem.zanFlag?'red':null]" @click="changZan(myitem.publishID)">{{myitem.zanNum}}</span>
      <span class="iconfont icon-linedesign-01" @click="pinlun(myitem.publishID)">{{myitem.comment.length>0?myitem.comment.length:null}}</span>
    </div>
     <div v-if="myitem.flag" class="pinglun"><input type="text" placeholder="评论去" v-model="txt"><button @click="pings({id:myitem.publishID,txt})">评论</button></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["myitem"],
  data(){
    return {
      txt:''
    }
  },

  methods:{
    ...mapActions(['ping',"pinlun","changSc","changZan"]),
    pings(obj){
     if(obj.txt.length&&obj.txt.trim()){
        this.ping(obj)
     }else{
       alert('不可为空')
     }
      this.txt=""
    }
  }
};
</script>


<style >
.Item {
  border-bottom: 1px solid orange;margin: 30px 0;
}
.I-header {
  height: 50px;
  display: flex;
  align-items: center;
}
.I-header img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 8px;
}
.I-header > div {
  flex: 1;
}
.I-h-main > p {
  font-size: 12px;
}
.I-header > span {
  width: 40px;
  text-align: center;
}
.I-imgs{display: flex;flex-wrap: wrap,}
.I-imgs>div>img{width: 100%;height: 100%;}
.I-text{margin: 5px 0;color: #666;line-height: 30px}

.I-footer{display: flex;justify-content: space-between;}

.red{color: brown}
.pinglun input{width: 50%;height: 25px;border:1px solid #000}
.pinglun button{width: 50px;height: 30px;margin: 10px;border: 0; background: lavenderblush;}
</style>