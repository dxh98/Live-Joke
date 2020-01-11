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
                    <img :src="item.images" alt="图片被我吃了啦啦啦~!!!∑(ﾟДﾟノ)ノ">
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
            console.log(res.data.result);
            
            this.listPicture = res.data.result
        })
    },
}
</script>

<style scoped>
    #funPicture ul li {
        position: relative;
        padding-bottom: 10vw;
        border-bottom: 10px solid rgba(180,180,180,0.6)
    }
    #funPicture ul li .van-image{
        margin-top: 15px;
        margin-left: 15px
    }
    #funPicture ul li strong{
        display:block;
        position: absolute;
        top: 20px;
        left: 60px
    }
    #funPicture ul li p{
        margin-left: 10vw;
        margin-right: 10vw
    } 
    #funPicture ul li img{
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