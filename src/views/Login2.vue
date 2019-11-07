<!-- 注册 -->
<template>
  <div class="dengl">
    <div class="D-header2">注册</div>
    <p>
      <input type="text" v-model="username" placeholder="账号" />
    </p>
    <p>
      <input type="text" v-model="userpwd" placeholder="密码" />
    </p>
    <button @click="submit()">注册</button>
  </div>
</template>

<script>
import Axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "",
  data() {
    return {
      username: "",
      userpwd: ""
    };
  },
  components: {},
  computed: {},
  created() {},
  methods: {
    ...mapMutations(["getuser"]),
    submit() {
      let reg = /^[\w]{6,10}$/;
      if (!this.username.trim() || !this.userpwd.trim()) {
        alert("账号密码不能为空");
      } else {
        if (reg.test(this.userpwd)) {
          Axios.post("/zhuche", {
            username: this.username,
            userpwd: this.userpwd
          }).then(({ data }) => {
            if (data.code == 0) {
              alert(data.msg);
            } else {
              this.getuser(data.data);
              localStorage.token = data.token;
              this.$router.push("/");
            }
          });
        } else {
          alert("密码不正确");
        }
      }
    }
  }
};
</script>
<style>
.D-header2 {
  background: crimson;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
p {
  height: 50px;
  text-align: center;
  margin: 10px 0;padding: 0 5px;
}
p>input {width: 90%;height: 40px;border: 0;background: #ccc;outline: none;margin-left: 50px;}
button {
  width: 80%;
  height: 50px;
  border: 0;
  margin: 15px 35px;
}
</style>