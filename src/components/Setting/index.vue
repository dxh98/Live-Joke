<template>
  <div class="setting">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>设置</h5>
    </div>
    <div class="Section">
      <ul>
        <li>
          <p>小右ID：{{this.msg}}</p>
        </li>
        <li style="border-bottom:8px solid #f0eff4" @click="Security()">
          <p>账号与安全</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>内容自动刷新</p>
          <van-switch v-model="checked" size="20px" class="Switch" />
        </li>
        <li @click="Pushs()">
          <p>推送设置</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li>
          <p>检查更新</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>内测版本优先体验</p>
          <van-switch v-model="checked1" size="20px" class="Switch" />
        </li>
        <li>
          <p>推荐中屏蔽的话题</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>我屏蔽的用户</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li>
          <p>清除缓存</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li>
          <p>关于小右</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>原创入驻</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4" @click="Order()">
          <p>我的订单</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li class="Last-li">
          <p @click="Logout()">退出当前账号</p>
        </li>
      </ul>
      <div style="height:60px"></div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checked1: false
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.msg = localStorage.getItem("userName");
    }
  },
  methods: {
    Return() {
      this.$router.push({
        name: "mine"
      });
    },
    Logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      this.$router.push({
        name: "mines"
      });
    },
    Pushs() {
      this.$router.push({
        name: "pushs"
      });
    },
    Order() {
      this.$router.push({
        name: "order"
      });
    },
    Security() {
      this.$router.push({
        name: "security"
      });
    }
  }
};
</script>



<style scope>
.setting {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
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
.Section li {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0eff4;
  position: relative;
}
.Section p {
  margin-left: 3%;
}
.Switch {
  position: absolute;
  right: 3%;
}
.Icon-right {
  position: absolute;
  right: 3%;
}
.Last-li {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #40b1f7;
}
/* .van-tabbar {
  display: none;
} */
</style>