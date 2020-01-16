<template>
  <div class="help">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>帮助与反馈</h5>
    </div>
    <div class="banner"></div>
  </div>
</template>

<script>
export default {
  methods: {
    Return() {
      this.$router.push({
        name: "mine"
      });
    }
  }
};
</script>

<style scope>
.help {
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
.banner {
  display: flex;
  width: 100%;
  height: 300px;
  background: url(../../../public/img/beijing.jpg) no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
</style>