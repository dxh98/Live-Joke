<template>
  <div class="Login">
    <header>
      <div class="Add-close" @click="Close()">
        <van-icon name="arrow-left" />
      </div>
    </header>
    <section>
      <van-cell-group>
        <van-field v-model="name" placeholder="请输入用户名" style="margin-top:20px" id="name" />
        <van-field v-model="password" placeholder="请输入密码" style="margin-top:20px" id="password" />
      </van-cell-group>

      <van-button type="info" class="btn" @click="btn()">登录</van-button>
    </section>
  </div>
</template>

<script>
import { post } from "../../utils/ajax";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    btn() {
      console.log("点击了按钮");
      post("http://106.14.70.106:3009/api/v1/auth/login", {
        userName: this.name,
        password: this.password,
        nickName: this.name
      }).then(res => {
        console.log(res);
        if (res.data.code == "success") {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", this.name);
          this.$router.push({
            name: "homepage"
          });
        } else {
          alert("用户名或者密码错误");
        }
      });
    },
    Close() {
      this.$router.push({
        name: "mine"
      });
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  height: 257px;
  background: #ccc;
  background: url(../../../public/img/beijing.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}
.Add-close {
  position: absolute;
  top: 5%;
  left: 3%;
  color: #fff;
}
.btn {
  margin-left: 35%;
  margin-top: 4%;
  width: 140px;
}
.Head-portrait {
  margin-left: 35%;
  margin-top: 5%;
}
</style>