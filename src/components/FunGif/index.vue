<template>
     <div id="funGif">
        <ul>
            <li v-for="item in listGif"   :key="item.sid">
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
    name:'FunGif',
    data(){
        return{
            loading:true,
            listGif:[],
        }
    },
    mounted() {
        this.loading = false;
    },
    created(){//组件创建之后之行的内容，发get请求
        get("https://api.apiopen.top/getJoke?count=40&type=gif").then(res=>{
            console.log(res.data.result);
            
            this.listGif = res.data.result
        })
    },
}
</script>

<style scoped>
    #funGif ul li {
        position: relative;
        padding-bottom: 10vw;
        border-bottom: 10px solid rgba(180,180,180,0.6)
    }
    #funGif ul li .van-image{
        margin-top: 15px;
        margin-left: 15px
    }
    #funGif ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #funGif ul li p{
        margin-left: 10vw;
        margin-right: 10vw
    } 
    #funGif ul li img{
        display: block;
        width: 100%;
        height: auto
    }
    .foot{
        width: 100vw;
        height: 15vw
    }
    .van-hairline--top-bottom{
        z-index: 999
    }
</style>