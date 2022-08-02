import { login } from '@/api/user'
export default {
  namespaced: true,
  state: {
    // 登陆
    list: {},
  },
  mutations: {
    // 登陆
    setLogin(state, payload) {
      state.list = payload
    }
  },
  actions: {
    // 登陆
    async getLogin(context, payload) {


      const res = await login(payload)
      console.log(res);

      context.commit('setLogin', res)

    }


  }
}
