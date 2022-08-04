import { login, getUserInfoApi } from '@/api/user'
import { Message } from 'element-ui';
export default {
  namespaced: true,
  state: {
    // 登陆
    token: '',
    // 获取用户信息
    userInfo: {},
  },
  mutations: {
    // 登陆
    setLogin(state, payload) {
      state.token = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    }

  },
  actions: {
    // 登陆
    async getLogin(context, payload) {
      const res = await login(payload)
      console.log(res);
      context.commit('setLogin', res.data)
      Message.success(res.data.msg)

    },
    // 用户信息
    async getUserInfo(context) {
      const res = await getUserInfoApi(1)
      console.log(res.data);
      context.commit('setUserInfo', res.data)

    },
    //退出登陆清除token，和用户信息 
    logout(context) {
      context.commit('setLogin', '')
      context.commit('setUserInfo', '')

    }


  }
}
