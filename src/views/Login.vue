<template>
  <div id="login">
    <div id="login-client">
      <h2>登录</h2>
      <input type="text" v-model.lazy="username" placeholder="手机号或邮箱" />
      <br />
      <input type="password" v-model.lazy="password" placeholder="密码" />
      <br />
      <div class="codeModel">
        <input type="text" placeholder="请输入验证码" v-model.lazy="code" />
        <RandomCode></RandomCode>
      </div>

      <button @click="signSession()">登录</button>
      <router-link to="/register">还没有注册？点我注册</router-link>
      <router-view name="Register"></router-view>
    </div>
  </div>
</template>

<script>
import RandomCode from "@/views/RadomCode.vue";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      code: ""
    };
  },
  components: {
    RandomCode
  },
  methods: {
    signSession() {
      if (this.username != "" && this.password != "" && this.code != "") {
        if (
          this.username == localStorage.getItem("username") &&
          this.password == localStorage.getItem("password") &&
          this.code == sessionStorage.getItem("验证码")
        ) {
          // 将用户名和密码缓存到sessionStorage中
          sessionStorage.setItem("username", this.username);
          sessionStorage.setItem("password", this.password);
          alert("登录成功");
          this.$router.go(0);
        } else if (this.username != sessionStorage.getItem("username")) {
          alert("用户名不存在");
          this.$router.push("/register");
        } else if (this.code != sessionStorage.getItem("验证码")) {
          alert("登录失败，请输入验证码");
          this.$router.go(0);
        }
      } else {
        alert("请输入用户名");
      }
    }
  },
  created() {
    if (sessionStorage.getItem("username") != null) {
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 500px;
  background: url(../source/sign_bg.db29b0fb.png) no-repeat;
  background-size: cover;
}
#login-client {
  width: 500px;
  background-color: white;
  text-align: center;
  padding-bottom: 50px;
  position: relative;
  top: 10%;
  left: 25%;
}

a {
  color: #0084ff;
  padding-left: 15px;
}

h2 {
  text-align: center;
  line-height: 50px;
}

input {
  display: inline-block;
  width: 370px;
  height: 50px;
  border: 0;
  border-bottom: 1px solid #aaaaaa;
  outline: none;
  margin-top: 15px;
}

.codeModel {
  width: 370px;
  height: 70px;
  border-bottom: 1px solid #aaaaaa;
  margin: 0 auto;
}

.codeModel input {
  width: 300px;
  border: 0;
}

button {
  background-color: #0084ff;
  color: #fff;
  width: 200px;
  height: 36px;
  margin-top: 40px;
  border: 0;
  cursor: pointer;
  transition: all 1s;
}

button:hover {
  background-color: #38a1fd;
  outline: #0084ff;
}
</style>
