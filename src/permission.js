import router from './router'
import store from './store'
import { Message } from 'element-ui'
// 进度条插件
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// whiteList 表示白名单
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // 启动进度条
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  // 这里的gitToken是一个自己封装好的获取token的方法
  // 登录成功之后会获取token，通过token获取用户信息
  //console.log(hasToken)
  if (hasToken) {
    // 如果当前已有token，判断当前页面是否为登录页
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      // 如果当前的路径为登录页的话，点击登录按钮获取token，跳转至主页
      NProgress.done() // 结束进度条
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
        // 如果当前不在登录页，判断是否存在用户信息，存在继续下一步
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')
          // 没有用户信息则获取用户信息 dispatch 派发一个 action

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          // 如果获取用户信息失败的话清空token值
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done() // 重定向到登录页
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // 如果当前跳转的地址包含白名单，继续执行下一步
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done() // 否则重定向到登录页
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done() // 跳转之后进度条结束
})
