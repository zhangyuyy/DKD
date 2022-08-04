import axios from 'axios'
import { Message } from 'element-ui';
import store from '@/store';
import { getTokenTime } from '@/utils/auth'
import router from '@/router';
// 引入store
// import store from '@/store'

// 封装处理token是否过期
const isTimeout = () => {
  // 定义当前时间戳
  const currentTime = Date.now()
  // 定义登陆时间戳
  const tokenTime = getTokenTime()
  // 定义超时时间
  const timeout = 2 * 60 * 60 * 1000
  // 最终得出时间currentTime-tokenTime>timeout
  return currentTime - tokenTime > timeout
}
console.log(isTimeout());

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  // timeout: 5000,
}) // 创建一个axios的实例
service.interceptors.request.use(
  async (config) => {
    const token = store.state.user.token.token

    if (token) {
      // 如果token过期就跳到登陆页
      if (isTimeout()) {
        await store.dispatch('user/logout')
        router.push('/login')
        Message.error('登陆过期')
        // 如果没过期就获取请求头
      } else {
        config.headers.Authorization = `${token}`
      }

    }
    return config
  }, (error) => {
    return Promise.reject(error)
  }
) // 请求拦截器// 请求拦截器
// service.interceptors.response.use(
//   (res) => {
//     if (res.config.url.includes('/api/user-service/user/imageCode/')) {
//       return res
//     }
//     // console.log(res);
//     // 把data里的数据结构success是否成功，message提示信息
//     if (res.data.success) {
//       return res
//     }
//     // 失败给个提示语
//     Message.error(res.data.msg)
//     // 官网axios错误提示
//     return Promise.reject(new Error(res.data.msg))

//     // return res.data.data
//     // 请求成功的函数
//   },
// // 官网axios错误提示
// function (error) {
//   Message.error('系统异常')
//   return Promise.reject(error)

// }
// ) // 响应拦截器
export default service // 导出axios实例