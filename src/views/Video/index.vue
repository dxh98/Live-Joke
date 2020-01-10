<template>
    <div id="header">
        <van-sticky tag="div" id="v-header">
            热门推荐
            <van-divider/>
        </van-sticky>
            <ul>
                <li v-for="item in list"  :key="item.sid">
                    <van-skeleton title avatar :row="3"  :loading="loading">
                        <van-image
                            round
                            width="2rem"
                            height="2rem"
                            :src="item.header"
                        />
                        <strong>{{item.name}}</strong>
                        <p>{{item.text}}</p>
                        <div class="video-box">
                            <video :id="item.sid"
                            data-isPlaying="false"
                            ref="videoPlayer"
                            :src="item.video" 
                            loop="loop"
                            controlsList="nodownload"
                            >
                            </video>
                            <div @click="clickHandle(item.sid)"
                            class="video-img">
                                <img ref="player" src="../../../public/img/tmimg.png" alt="">
                            </div>
                        </div>
                    </van-skeleton>
                </li>
            </ul>
            <div class="foot">

            </div>
    </div>
</template>


<script>
import { get } from '../../utils/ajax'

export default {
    data(){
        return{
            loading:true,
            list:[]
        }
    },
    mounted() {
    this.loading = false;
    },
    name:'Vedio',
    created(){//组件创建之后之行的内容，发get请求
        get("https://api.apiopen.top/getJoke?count=30&type=video").then(res=>{
            this.list = res.data.result
        })
    },
    methods:{
    clickHandle(v){
        // 点击事件传入的参数为 sid 在列表中查找对应sid的坐标
        let index = this.$refs.videoPlayer.findIndex((ele) =>{
          return ele.id === v;
        });
       // video 有个paused属性，可以判断视频是否在播放 未播放为true 正在播放为false
        if(this.$refs.videoPlayer[index].paused){
            // 此时paused为true
            this.$refs.player[index].style.display='none'
            this.$refs.videoPlayer[index].play() 
            // 此时paused为false
        }else{
            this.$refs.player[index].style.display='block';
            this.$refs.videoPlayer[index].pause();
        }
    }
}
}

</script>

<style>
    .van-sticky{
        z-index: 1000;
        text-align: center;
        padding-top: 3vw;
        background:#F7F8FA
    }
    .van-divider{
        margin-bottom: 0
    }
    #header ul li {
        position: relative
    }
    #header ul li .van-image{
        margin-top: 15px;
        margin-left: 15px
    }
    #header ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #header ul li p{
        margin-left: 10vw;
        margin-right: 10vw
    }
    .video-box{
        position: relative
    }
    #header ul li video{
        width: 70vw;
        height: auto;
        border-left: 15vw solid black;
        border-right: 15vw solid black;
        display: inline-block;
        vertical-align: baseline
    }
    .video-box .video-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .video-box .video-img img{
        display: block;
        width: 10vw;
        height: 10vw;
        position: absolute;
        left: 45%;
        top: 45%;
        border: 1px solid #fff;
        border-radius: 50%;

    }

    .foot{
        width: 100vw;
        height: 15vw
    }
    .van-hairline--top-bottom{
        z-index: 999
    }
</style>