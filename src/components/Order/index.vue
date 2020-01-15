<template>
  <div class="order">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>我的订单</h5>
    </div>
    <div class="Section">
      <ul>
        <li style="border-bottom:8px solid #f0eff4">
          <p>淘宝订单</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>有赞订单</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>用户反馈</p>
          <van-icon name="arrow" class="Icon-right" />
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    Return() {
      this.$router.push({
        name: "setting"
      });
    }
  }
};
</script>

<style scope>
.order {
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
</style>