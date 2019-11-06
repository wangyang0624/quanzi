<!-- 注册 -->
<template>
    <div class='dengl'>
        <p>账号:<input type="text" v-model="username"/></p>
        <p>密码:<input type="text" v-model="userpwd"/></p>
        <button @click="submit()">注册</button>
    </div>
</template>

<script>
import Axios from 'axios';
import { mapMutations} from 'vuex';

export default {
    name: '',
    data() {
        return {
            username:'',
            userpwd:''
        };
    },
    components: {
    },
    computed: {
    },
    created() {
    
    },
    methods: {
        ...mapMutations(['getuser']),
        submit(){
            Axios.post('/zhuche',{username:this.username,userpwd:this.userpwd}).then(({data})=>{
                if(data.code==0){
                    alert(data.msg)
                }else{
                    this.getuser(data.data)
                    localStorage.token=data.token
                    this.$router.push('/')
                }
            })
        }
    },
}
</script>
<style scoped lang='scss'>

</style>