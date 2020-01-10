<template>
    <div id="header">
        <van-tabs v-model="activeName" line-width="0">
            <van-tab title="爆笑段子" name="a" :to="{name:'funtext'}">
                   
            </van-tab>
            <van-tab title="搞笑图片" name="b" :to="{name:'funpicture'}">
                
            </van-tab>
            <van-tab title="滑稽动图" name="c" :to="{name:'fungif'}">
                
            </van-tab>
        </van-tabs>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>

</template>

<script>
export default {
    name:'Homepage',
    data() {
    return {
      activeName: 'b'
    };
  }
}
</script>

<style scoped>

</style>