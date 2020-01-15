<template>
  <div class="push">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>账号与安全</h5>
    </div>
    <div class="section">
      <div class="Head-portraits">
        <img :src="this.imgUrl" alt />
      </div>
      <div class="main">
        <ul>
          <li>
            <h5>当前账号</h5>
            <span>{{this.msg}}</span>
          </li>
        </ul>
        <p @click="Onclick()">修改密码</p>
        <van-dialog v-model="isShow" show-cancel-button>
          <van-field v-model="password" label="当前密码" placeholder="请输入当前的密码" />
          <van-field v-model="Newpassword" label="最新密码" placeholder="请输入想要修改密码" />
          <van-field v-model="Newpassword1" label="确认密码" placeholder="请确认密码" />
        </van-dialog>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
import { get } from "../../utils/ajax";
import { put } from "../../utils/ajax";
export default {
  data() {
    return {
      imgUrl: "",
      isShow: false,
      password: "",
      Newpassword: "",
      Newpassword1: ""
    };
  },
  methods: {
    Return() {
      this.$router.push({
        name: "setting"
      });
    },
    Onclick() {
      this.isShow = !this.isShow;
      let token = localStorage.getItem("token");
      get("http://106.14.70.106:3009/api/v1/users/info", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        console.log(res);
        console.log(res.data.password);
      });
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      this.msg = localStorage.getItem("userName");
      get("http://106.14.70.106:3009/api/v1/users/info", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        this.imgUrl = "http://106.14.70.106:3009" + res.data.avatar;
      });
    } else {
    }
  }
};
</script>

<style scope>
.push {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.Top {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 8px solid #efeff7;
}
.Icons {
  position: absolute;
  left: 2%;
  color: #979797;
  font-size: 24px;
}
.Top h5 {
  color: #222629;
  font-size: 16px;
}
.section {
  position: relative;
  height: 600px;
}
.Head-portraits {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  left: 40%;
  top: 5%;
}
.Head-portraits img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.main {
  position: absolute;
  top: 25%;
  width: 100%;
}
.main li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0eff4;
  border-top: 1px solid #f0eff4;
}
.main h5 {
  margin-left: 10px;
}
.main span {
  margin-right: 10px;
  font-size: 14px;
}
.main p {
  margin-left: 10px;
  margin-top: 10px;
  color: #f00;
}
</style>