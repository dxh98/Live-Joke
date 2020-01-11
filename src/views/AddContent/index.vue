<template>
  <div class="Add">
    <header>
      <div class="Add-close" @click="Close()">
        <van-icon name="cross" />
      </div>
      <button id="btn">发布</button>
    </header>
    <section>
      <div class="Add-chioce">
        <span class="Add-left">
          <van-icon name="star-o" />选择话题
        </span>
        <span class="Add-right">选择合适的话题会有更多的赞哦~></span>
      </div>
      <textarea cols="56" rows="20" autofocus placeholder="我的快乐源泉" id="ipt" v-model="content"></textarea>
      <van-uploader v-model="fileList" multiple :max-count="9" />
    </section>
    <footer></footer>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { post } from "../../utils/ajax";
export default {
  name: "AddContent",
  data() {
    return {
      content: "",
      fileList: []
    };
  },
  methods: {
    Close() {
      this.$router.push({
        name: "homepage"
      });
    }
    // Release() {
    //   console.log(2);
    //   console.log(this.content);
    //   console.log(this.fileList);
    //   post("http://106.14.70.106:3009/api/v1/products", {
    //     content: this.content,
    //     coverImg: this.fileList
    //   })
    //     .then(res => {
    //       console.log(res.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.Add-close {
  display: inline-block;
  margin-left: 2%;
}
#btn {
  margin-left: 80%;
  margin-top: 10px;
  background-color: #8acfff;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
}
section {
  width: 100%;
  background: #fff;
  flex: 1;
}
.Add-chioce {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.Add-left {
  color: #20b5ff;
  font-size: 16px;
}
.Add-right {
  color: #ccc;
  font-size: 12px;
}
.van-hairline--top-bottom {
  z-index: -9999;
}
#ipt {
  border: none;
  resize: none;
  caret-color: #20b5ff;
  font-size: 16px;
}
</style>