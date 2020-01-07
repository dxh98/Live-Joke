<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
        <van-tabbar route>

        <van-tabbar-item
            replace
            :to="{name:'homepage'}"
            icon="home-o"
        >
            主页
        </van-tabbar-item>

        <van-tabbar-item
            replace
            :to="{name:'vedio'}"
            icon="play-circle-o"
            info="2"
        >
            视频
        </van-tabbar-item>

        <van-tabbar-item
            replace
            :to="{name:'addcontent'}"
            
        >
            <van-icon name="add-o" size="2rem" />
        </van-tabbar-item>

        <van-tabbar-item
            replace
            :to="{name:'message'}"
            icon="chat-o"
            info="99"
        >
            消息
        </van-tabbar-item>

        <van-tabbar-item
            replace
            :to="{name:'mine'}"
            icon="user-circle-o"
        >
            我的
        </van-tabbar-item>

        </van-tabbar>
    </div>
</template>

