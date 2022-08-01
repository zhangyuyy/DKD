import { login } from '@/api/user'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    // 登陆
    list: "",
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
      // try {

      const res = await login(payload)
      console.log(res);

      if (res.data.token) {
        context.commit('setLogin')
        router.push('/dashboard')

      } else {
        return alert('验证码错误')
      }

      // } catch (err) {
      //   console.log(err);
      // }
    }


  }
}
