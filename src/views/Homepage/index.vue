<template>
  <div id="app">
    <van-tabs ref="toubu" line-width="0" >
      <van-tab title="爆笑段子" :to="{name:'funtext'}"></van-tab>
      <van-tab title="搞笑图片" :to="{name:'funpicture'}"></van-tab>
      <van-tab title="滑稽动图" :to="{name:'fungif'}"></van-tab>
    </van-tabs>
    <keep-alive>
      <router-view />
    </keep-alive>

    
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      
    };
   
  },
  created() {

  },
  
};
</script>

<style scoped>

</style>