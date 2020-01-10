<template>
  <div id="app">
    <van-tabs line-width="0">
      <van-tab title="提醒" :to="{name:'remind'}"></van-tab>
      <van-tab title="私信" :to="{name:'sixin'}"></van-tab>
    </van-tabs>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>