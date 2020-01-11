<template>
    <div id="vedio">
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
                        <div>
                            <van-icon name="share" size="6vw" />{{item.forward}}
                            <van-icon name="comment-o" size="6vw" />{{item.comment}}
                            <van-icon name="good-job-o" size="6vw" />{{item.up}}
                            <van-icon name="http://pic.51yuansu.com/pic2/cover/00/40/88/58133711f04c8_610.jpg" size="6vw" />{{item.down}}
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
        background:#F7F8FA;
        border-bottom-left-radius: 3vw;
        border-bottom-right-radius: 3vw
    }
    .van-divider{
        margin-bottom: 0
    }
    #vedio ul{
        overflow: hidden;
        background: rgba(180,180,180,0.6)
    }
    /* 试图隐藏滚动条 但很显然没有成功 */
    /* #vedio ul::-webkit-scrollbar{display: none}
    #vedio ul{-ms-overflow-style: none}
    #vedio ul{overflow: -moz-scrollbars-none; } */

    #vedio ul li {
        width: 96vw;
        overflow: hidden;
        background: white;
        border-radius: 5vw;
        position: relative;
        padding-bottom: 2vw;
        margin: 2vw 2vw 3vw;
    }
    #vedio ul li .van-image{
        margin-top: 4vw;
        margin-left: 4vw
    }
    #vedio ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #vedio ul li p{
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 7vw
    }
    .video-box{
        position: relative
    }
    #vedio ul li video{
        width: 70vw;
        height: auto;
        border-left: 15vw solid black;
        border-right: 15vw solid black;
        display: inline-block;
        vertical-align: baseline;
        margin-bottom: 4vw
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
    #vedio ul li>div:nth-child(5){
        display: flex;
        justify-content: space-around;
        width: 90vw;
        height: 6vw;
        margin-left: 3vw;
        line-height: 6vw
    }
    .foot{
        width: 100vw;
        height: 15vw
    }
    .van-hairline--top-bottom{
        z-index: 999
    }
</style>