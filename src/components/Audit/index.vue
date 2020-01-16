<template>
  <div class="audit">
    <div class="Top">
      <van-icon name="arrow-left" class="Icons" @click="Return()" />
      <h5>审核专区</h5>
    </div>
    <div class="section">
      <ul>
        <li>
          <h3>审核专区</h3>
          <p>开放申请中...</p>
        </li>
        <li>
          <h3>神评审核专区</h3>
          <p>开放申请中...</p>
        </li>
        <li>
          <h3>广告审核专区</h3>
          <p>开放申请中...</p>
        </li>
        <li>
          <h3>攻击引战审核专区</h3>
          <p>开放申请中...</p>
        </li>
      </ul>
    </div>
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
.audit {
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
.section {
  height: auto;
}
.section li:first-child {
  width: 90%;
  height: 80px;
  background: #78bdfe;
  margin: 0 5%;
}
.section li:nth-child(2) {
  width: 90%;
  height: 80px;
  background: #fc9197;
  margin: 0 5%;
}
.section li:nth-child(3) {
  width: 90%;
  height: 80px;
  background: #fd89b6;
  margin: 0 5%;
}
.section li:nth-child(4) {
  width: 90%;
  height: 80px;
  background: #a887fc;
  margin: 0 5%;
}
.section li {
  border-radius: 8px;
}
.section li h3 {
  color: #ffffff;
  margin-left: 10px;
  font-weight: 100;
}
.section p {
  color: #fff;
  margin-left: 10px;
  font-size: 12px;
}
</style>