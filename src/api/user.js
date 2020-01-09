import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/v1/auth/manager_login',
    method: 'post',
    data
  })
}
// 后台管理用户登录接口，需要两个参数，用户名和密码
// 发送请求，请求网址、请求方法、请求数据

export function getInfo(token) {
  return request({
    url: '/api/v1/users/manager_info',
    method: 'get',
    // params: { token }
    // 接口不支持params
    headers: {
      authorization: 'Bearer ' + token
      // 设置请求头，获取当前管理员信息
      // 使用authorization 是服务器端约定的
      // 请求头中的token是本地获取到的
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
