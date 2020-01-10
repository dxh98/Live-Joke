<template>
  <div class="Remind">
    <div class="box">
      <div class="box1">
        <a href="javascript:void(0)" style="background:#ff6b7d">
          <van-icon name="volume-o" />
        </a>
        <span>小右通知</span>
      </div>
      <div class="box1">
        <a href="javascript:void(0)" style="background:#42b1ff">
          <van-icon name="comment-o" />
        </a>
        <span>收到的@</span>
      </div>
      <div class="box1">
        <a href="javascript:void(0)" style="background:#47d7aa">
          <van-icon name="friends-o" />
        </a>
        <span>新增粉丝</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Remind"
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 8px solid #ccc;
}
span {
  font-size: 12px;
}
.box1 {
  height: 80px;
  width: 50px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box a {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #f00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
}
</style>