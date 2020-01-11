<template>
  <div class="about">
    <header>
      <a href="javascript:void(0)" class="setting">
        <van-icon name="setting-o" />
      </a>
      <p @click="Login()">登录</p>
      <p @click="Register()">注册</p>
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
          <a href="javascript:void(0)">
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
          <a href="javascript:void(0)">
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
          <a href="javascript:void(0)">
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
        <van-button
          type="danger"
          style="margin-top:10px;margin-left:36%;width:77px;height:44px"
          @click="Logout()"
        >退出</van-button>
        <li>
          <a href="javascript:void(0)"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine",
  created() {
    let token = localStorage.getItem("token");
    console.log(token);
    // console.log(this.$refs.login);

    if (token) {
      console.log(1);
    }
  },
  methods: {
    Login() {
      this.$router.push({
        name: "login"
      });
    },
    Register() {
      this.$router.push({
        name: "register"
      });
    },
    Logout() {
      localStorage.removeItem("token");
      // this.$router.push({
      //   name: "mine"
      // });
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
  height: 257px;
  background: #ccc;
  background: url(../../../public/img/beijing.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
  align-items: flex-end;
}
.setting {
  width: 18px;
  height: 18px;
  position: fixed;
  left: 90%;
  top: 2%;
  color: #fff;
  font-size: 18px;
}
header p {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 120px;
  height: 35px;
  background: #fff;
  color: #8acfff;
  text-align: center;
  line-height: 35px;
  border-radius: 20px;
}
.nav {
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
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
  margin-left: 60%;
  font-size: 20px;
  color: #ccc;
}
ul li:nth-child(10) {
  border-top: 8px solid #cccccc;
  border-bottom: 8px solid #cccccc;
}
ul li:nth-child(13) {
  border-bottom: 8px solid #cccccc;
}
</style>