<template>
  <div class="Register">
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
      <p>头像上传</p>
      <van-uploader v-model="fileList" multiple :max-count="1" />
      <van-button type="info" class="btn" @click="btn()">注册</van-button>
    </section>
  </div>
</template>

<script>
import { post } from "../../utils/ajax";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      password: "",
      fileList: []
    };
  },
  methods: {
    btn() {
      console.log("点击了按钮");
      post("http://106.14.70.106:3009/api/v1/auth/reg", {
        userName: this.name,
        password: this.password,
        nickName: this.name,
        avatat: this.fileList
      }).then(res => {
        console.log(res);
        if (res.data.code == "success") {
          this.$router.push({
            name: "login"
          });
        } else {
          alert("请注册正确的账号信息");
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
}
.Add-close {
  margin-left: 4%;
  margin-bottom: 54%;
  color: #fff;
}
.btn {
  margin-left: 35%;
  margin-top: 4%;
  width: 150px;
}
.Head-portrait {
  margin-left: 35%;
  margin-top: 5%;
}
</style>