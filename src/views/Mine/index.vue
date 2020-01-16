<template>
  <div class="about">
    <header>
      <div class="Head-portrait">
        <img :src="this.imgUrl" alt />
      </div>
      <span class="name">{{this.msg}}</span>
      <router-link class="setting" :to="{name:'setting'}">
        <van-icon name="setting-o" />
      </router-link>
    </header>
    <div class="nav">
      <figure>
        <van-icon name="star-o" class="Icon f1" />
        <figcaption>空间动态</figcaption>
      </figure>
      <figure>
        <van-icon name="coupon-o" class="Icon f2" />
        <figcaption>我的帖子</figcaption>
      </figure>
      <figure>
        <van-icon name="description" class="Icon f3" />
        <figcaption>我的评论</figcaption>
      </figure>
      <figure>
        <van-icon name="comment-o" class="Icon f4" />
        <figcaption>我的收藏</figcaption>
      </figure>
      <figure>
        <van-icon name="flag-o" class="Icon f5" />
        <figcaption>我赞过的</figcaption>
      </figure>
    </div>
    <div class="list">
      <ul>
        <li>
          <a @click="Audit()">
            <span style="color:#ecbe5e">
              <van-icon name="search" />
            </span>
            <h5>审核专区</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #9551ff">
              <van-icon name="cluster-o" />
            </span>
            <h5>小右游戏</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #f35c7b">
              <van-icon name="shopping-cart-o" />
            </span>
            <h5>最右好物</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #159dff">
              <van-icon name="medal-o" />
            </span>
            <h5>小右勋章</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #ff5f8f">
              <van-icon name="more-o" />
            </span>
            <h5>右友态度</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #feb52a">
              <van-icon name="clock-o" />
            </span>
            <h5>浏览历史</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a>
            <span style="color: #758ef3">
              <van-icon name="down" />
            </span>
            <h5>我的下载</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #77baee">
              <van-icon name="shop-collect-o" />
            </span>
            <h5>小右家园</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #000">
              <van-icon name="wap-home-o" />
            </span>
            <h5>小右黑屋</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #ffb526">
              <van-icon name="diamond-o" />
            </span>
            <h5>少年模式</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>

        <li>
          <a href="javascript:void(0)">
            <span style="color: #708bff">
              <van-icon name="play-circle-o" />
            </span>
            <h5>视频壁纸</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a @click="Help()">
            <span style="color: #f46591">
              <van-icon name="question-o" />
            </span>
            <h5>帮助反馈</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span style="color: #ffa40b">
              <van-icon name="share" />
            </span>
            <h5>推荐好友</h5>
            <van-icon name="arrow" class="f6" />
          </a>
        </li>
      </ul>
    </div>
    <div style="height:60px"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { get } from "../../utils/ajax";
export default {
  name: "Mine",
  data() {
    return {
      imgUrl: "",
      msg: ""
    };
  },
  created() {
    setInterval(() => {
      if (localStorage.getItem("token")) {
        this.msg = localStorage.getItem("userName");
        get("http://106.14.70.106:3009/api/v1/users/info", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token")
          }
        }).then(res => {
          this.imgUrl = "http://106.14.70.106:3009" + res.data.avatar;
        });
      } else {
      }
    }, 1000);
  },
  methods: {
    Audit() {
      this.$router.push({
        name: "audit"
      });
    },
    Help() {
      this.$router.push({
        name: "help"
      });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  width: 100%;
  height: 200px;
  background: #ccc;
  background: url(../../../public/img/beijing.jpg) no-repeat;
  background-position: center;
  background-size: 100% 100%;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}
.Head-portrait {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  bottom: 45%;
  left: 5%;
}
.Head-portrait img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.name {
  position: absolute;
  left: 5%;
  bottom: 30%;
  color: #fff;
  background: #ccc;
}
.setting {
  width: 18px;
  height: 18px;
  position: absolute;
  right: 3%;
  top: 6%;
  color: #fff;
  font-size: 18px;
}

.nav {
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #f0eff4;
}
.nav figure {
  width: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.Icon {
  font-size: 25px;
}
.f1 {
  color: #ffb526;
}
.f2 {
  color: #6f8aff;
}
.f3 {
  color: #fe5e8e;
}
.f4 {
  color: #ffd111;
}
.f5 {
  color: #00aaff;
}
.list li a {
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.list a span {
  margin-left: 2%;
  font-size: 24px;
}
.list a h5 {
  margin-left: 3%;
  font-size: 18px;
  color: #000;
  font-weight: 100;
  width: 100px;
}
.f6 {
  font-size: 20px;
  color: #ccc;
  position: absolute;
  right: 3%;
}
ul li:nth-child(10) {
  border-top: 8px solid #cccccc;
  border-bottom: 8px solid #cccccc;
}
ul li:nth-child(13) {
  border-bottom: 8px solid #cccccc;
}
</style>