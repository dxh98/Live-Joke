<template>
  <div>
    <section>
      <article>
        <img src="../../../public/img/src.jpeg" />
        <div>
          <h2>
            <span>孤儿——亚索</span>
            <time>晚上：20:18</time>
          </h2>
          <p>没有退路可言！！！</p>
        </div>
      </article>
      <article>
        <img src="../../../public/img/src.jpeg" />
        <div>
          <h2>
            <span>盲僧</span>
            <time>晚上：20:18</time>
          </h2>
          <p>我用双手成就你的梦想</p>
        </div>
      </article>
      <article>
        <img src="../../../public/img/src.jpeg" />
        <div>
          <h2>
            <span>武器大师</span>
            <time>晚上：20:18</time>
          </h2>
          <p>呵！一个能打的都没有。</p>
        </div>
      </article>
      <article>
        <img src="../../../public/img/src.jpeg" />
        <div>
          <h2>
            <span>赵信</span>
            <time>晚上：20:18</time>
          </h2>
          <p>即使敌众我寡，末将也能在万军丛中取敌将首级！</p>
        </div>
      </article>
      <article>
        <img src="../../../public/img/src.jpeg" />
        <div>
          <h2>
            <span>琦玉大魔王</span>
            <time>晚上：20:18</time>
          </h2>
          <p>老师，可以借点钱吗？</p>
        </div>
      </article>

      <div style="width:100%;height:80px"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Sixin"
};
</script>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
section {
  width: 100%;
  background: #fff;
  flex: 1;
}
section article {
  height: 60px;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 19px;
  display: flex;
  padding: 10px 10px 10px 0;
  overflow: hidden;
}
section img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
section div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}
section h2 {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
section h2 time {
  color: #9e9c9d;
  font-size: 14px;
  justify-content: space-between;
}
section p {
  font-size: 16px;
  color: #9e9c9d;
  margin-top: -13px;
}
section span {
  color: orange;
  font-size: 20px;
  font-weight: 100;
}
</style>