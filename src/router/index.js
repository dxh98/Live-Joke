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
        component: addcontent
    },
    {
        path: '/message',
        name: 'message',
        component: message
    }, {
        path: '/mine',
        name: 'mine',
        component: mine
    }

]

const router = new VueRouter({
    routes
})

export default router