<template>
  <div class="setting">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>设置</h5>
    </div>
    <div class="Section">
      <ul>
        <li>
          <span>小右ID：{{this.msg}}</span>
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <span>账号与安全</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <span>内容自动刷新</span>
          <van-switch v-model="checked" size="20px" class="Switch" />
        </li>
        <li>
          <span>推送设置</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li>
          <span>检查更新</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <span>内测版本优先体验</span>
          <van-switch v-model="checked1" size="20px" class="Switch" />
        </li>
        <li>
          <span>推荐中屏蔽的话题</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <span>我屏蔽的用户</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li>
          <span>清除缓存</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li>
          <span>关于小右</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <span>原创入驻</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <span>我的订单</span>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li class="Last-li">
          <p @click="Logout()">退出当前账号</p>
        </li>
      </ul>
      <div style="height:60px"></div>
    </div>
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
.Section span {
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