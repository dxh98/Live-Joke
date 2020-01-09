import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: username.trim(), password: password })
        .then(response => {
          const { token } = response
          commit('SET_TOKEN', token)
          // 在vuex中存储当前的token值
          setToken(token)
          // 把服务器返回的token存储在服务器中
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 用户登录成功后添加token并获取
  // 当调用getInfo 时获取用户信息

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          // console.log(response)
          // 打印出用户信息
          const { userName, nickName } = response
          if (!userName) {
            reject('Verification failed, please Login again.')
          }

          // const { name, avatar } = data

          commit('SET_NAME', userName) // 获取用户信息之后把用户信息写入vuex之后就登录成功了
          commit(
            'SET_AVATAR',
            'http://img2.imgtn.bdimg.com/it/u=1280251724,2587127202&fm=26&gp=0.jpg'
          )
          resolve({})
          // 如果走到了resolve说明getInfo成功了，成功之后需要有一个返回数据 获取服务器端数据的是 response
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // logout(state.token)
      //   .then(() => {
      //     removeToken() // must remove  token  first
      //     resetRouter()
      //     commit('RESET_STATE')
      //     resolve()
      //   })
      //   .catch(error => {
      //     reject(error)
      //   })
      // 退出登录放弃使用接口
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
      // 退出登录时只删除本地token
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
