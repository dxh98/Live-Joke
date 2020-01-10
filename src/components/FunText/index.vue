<template>
    <div id="header">
      
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
          
            this.listText = res.data.result
        })
    },
    
    
};
</script>

<style scoped>
    #header ul li {
        position: relative;
        border-bottom: 1px solid rgba(180,180,20,0.6)
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
    .foot{
        width: 100vw;
        height: 15vw
    }
    .van-hairline--top-bottom{
        z-index: 999
    }
</style>