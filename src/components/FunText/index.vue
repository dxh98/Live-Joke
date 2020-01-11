<template>
    <div id="funText">
            <ul>
                <li v-for="item in listText"  :key="item.sid">
                    <van-skeleton title avatar :row="3"  :loading="loading">
                        <van-image
                            round
                            width="2rem"
                            height="2rem"
                            :src="item.header"
                        />
                        <strong>{{item.name}}</strong>
                        <p>{{item.text}}</p>
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
    name: "FunText",
    data(){
        return{
            loading:true,
            listText:[],
        }
    },
    mounted() {
        this.loading = false;
    },
    created(){//组件创建之后之行的内容，发get请求
        get("https://api.apiopen.top/getJoke?count=50&type=text").then(res=>{
            console.log("爆笑段子:");
            console.log(res.data.result);
            this.listText = res.data.result
        })
    },
    
    
};
</script>

<style scoped>
    #funText ul{
        overflow: hidden;
        background: rgba(180,180,180,0.6)
    }
    #funText ul li {
        width: 96vw;
        overflow: hidden;
        background: white;
        border-radius: 5vw;
        position: relative;
        padding-bottom: 2vw;
        margin: 2vw 2vw 3vw;
    }
    #funText ul li .van-image{
        margin-top: 4vw;
        margin-left: 4vw
    }
    #funText ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #funText ul li p{
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 7vw
    }
    #funText ul li div{
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