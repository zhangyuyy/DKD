import { login, getUserInfoApi } from '@/api/user'
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

    },
    // 用户信息
    async getUserInfo(context) {
      const res = await getUserInfoApi(1)



      console.log(res.data);
      context.commit('setUserInfo', res.data)

    }


  }
}
