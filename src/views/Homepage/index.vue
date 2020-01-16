<template>
  <div id="homepage">
    <van-tabs ref="toubu" line-width="0">
      <van-tab title="爆笑段子" :to="{name:'funtext'}"></van-tab>
      <van-tab title="搞笑图片" :to="{name:'funpicture'}"></van-tab>
      <van-tab title="滑稽动图" :to="{name:'fungif'}"></van-tab>
    </van-tabs>
    <van-icon @click="replayHandle" name="replay" color="#046cd4" size="8vw" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {};
  },
  created() {},
  methods: {
    replayHandle() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
html {
  position: relative;
}
.van-icon {
  background: rgba(240, 240, 240, 0.8);
  box-shadow: 0px 0px 2.5vw #888888;
  border-radius: 2vw;
  position: fixed;
  bottom: 20vw;
  right: 8vw;
  z-index: 1000;
}
</style>