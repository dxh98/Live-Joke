<template>
  <div class="push">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>推送设置</h5>
    </div>
    <div class="Section">
      <ul>
        <li style="border-bottom:8px solid #f0eff4">
          <p>精彩内容推送消息</p>
          <van-switch v-model="checked" size="20px" class="Switch" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>推送评论消息</p>
          <van-switch v-model="checked1" size="20px" class="Switch" />
        </li>
        <li style="border-bottom:8px solid #f0eff4">
          <p>推送私信消息</p>
          <van-switch v-model="checked2" size="20px" class="Switch" />
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return { checked: true, checked1: true, checked2: true };
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
.push {
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