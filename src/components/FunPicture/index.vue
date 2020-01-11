<template>
    <div id="funPicture">
        <ul>
            <li v-for="item in listPicture"   :key="item.sid">
                <van-skeleton title avatar :row="3"  :loading="loading">
                    <van-image
                        round
                        width="2rem"
                        height="2rem"
                        :src="item.header"
                    />
                    <strong>{{item.name}}</strong>
                    <p>{{item.text}}</p>
                    <img :src="item.images" alt="图片被我吃掉啦，略略略~(｀・ω・´)">
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
    name:'FunPicture',
    data(){
        return{
            loading:true,
            listPicture:[],
        }
    },
    mounted() {
        this.loading = false;
    },
    created(){//组件创建之后之行的内容，发get请求
        get("https://api.apiopen.top/getJoke?count=40&type=image").then(res=>{
            console.log("搞笑图片:");
            console.log(res.data.result);
            this.listPicture = res.data.result
        })
    },
}
</script>

<style scoped>
    #funPicture ul{
        overflow: hidden;
        background: rgba(180,180,180,0.6)
    }
    /* ul::-webkit-scrollbar{display: none} */
    #funPicture ul li {
        width: 96vw;
        overflow: hidden;
        background: white;
        border-radius: 5vw;
        position: relative;
        padding-bottom: 2vw;
        margin: 2vw 2vw 3vw;
    }
    #funPicture ul li .van-image{
        margin-top: 4vw;
        margin-left: 4vw
    }
    #funPicture ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #funPicture ul li p{
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 7vw
    } 
    #funPicture ul li>img{
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 4vw
    }
    #funPicture ul li>div{
        display: flex;
        justify-content: space-around;
        width: 90vw;
        height: 6vw;
        margin-left: 5vw;
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