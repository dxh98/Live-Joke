import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '../views/Homepage'
import vedio from '../views/Video'
import addcontent from '../views/AddContent'
import message from '../views/Message'
import mine from '../views/Mine'
import funtext from '../components/FunText'
import funpicture from '../components/FunPicture'
import fungif from '../components/FunGif'
import remind from '../components/Remind'
import sixin from '../components/Sixin'
import register from '../components/Register'
import login from '../components/Login'
import mines from '../components/Mines'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/homepage',
    component: homepage
},
{
    path: '/homepage',
    name: 'homepage',
    redirect: '/homepage/funtext',
    component: homepage,
    children: [{
        path: '/homepage',
        redirect: '/homepage/funtext'
    },
    {
        path: '/homepage/funtext',
        name: 'funtext',
        component: funtext
    },
    {
        path: '/homepage/funpicture',
        name: 'funpicture',
        component: funpicture
    },
    {
        path: '/homepage/fungif',
        name: 'fungif',
        component: fungif
    },
    ]
}, {
    path: '/vedio',
    name: 'vedio',
    component: vedio
},
{
    path: '/addcontent',
    name: 'addcontent',
    component: addcontent,
    meta: {
        needLogin: true
    }
},
{
    path: '/message',
    name: 'message',
    component: message,
    redirect: '/message/remind',
    meta: {
        needLogin: true
    },
    children: [{
        path: '/message/sixin',
        name: 'sixin',
        component: sixin
    }, {
        path: '/message/remind',
        name: 'remind',
        component: remind,
        meta: {
            needLogin: true
        }
    }]
}, {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
        needLogin: true
    }
}, {
    path: '/mine/login',
    name: 'login',
    component: login
}, {
    path: '/mine/register',
    name: 'register',
    component: register
}, {
    path: '/mines',
    name: 'mines',
    component: mines
}
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    //当前跳转的页面是否需要登陆
    if (to.meta.needLogin) {
        //判断是否登陆
        if (isLogined()) {
            next()
        } else {
            next({
                name: "mines"
            })
        }
    } else {
        next()
    }
})

function isLogined() {
    if (localStorage.getItem('token')) {
        return true
    } else {
        return false
    }
}

export default router