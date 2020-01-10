<template>
  <div class="about">
    <h1>Hello Mine</h1>
    <!-- <header>
      <a href="javascript:void(0)" class="setting">
        <van-icon name="setting-o" />
      </a>
      <p @click="Login()">登录</p>
      <p @click="Register()">注册</p>
    </header>
    <section></section>-->
  </div>
</template>

<script>
export default {
  name: "Mine"
  // methods: {
  //   Login() {
  //     this.$router.push({
  //       name: "login"
  //     });
  //   },
  //   Register() {
  //     this.$router.push({
  //       name: "register"
  //     });
  //   }
  // }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
* {
  margin: 0;
  padding: 0;
}
.about {
  height: 100%;
}
header {
  display: flex;
  width: 100%;
  height: 257px;
  background: #ccc;
  background: url(../../../public/images/beijing.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
  align-items: flex-end;
}
.setting {
  width: 18px;
  height: 18px;
  position: fixed;
  left: 90%;
  top: 2%;
  color: #fff;
  font-size: 18px;
}
header p {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 120px;
  height: 35px;
  background: #fff;
  color: #8acfff;
  text-align: center;
  line-height: 35px;
  border-radius: 20px;
}
section {
  flex: 1;
  background: #ccc;
  display: flex;
  height: 500px;
}
</style>