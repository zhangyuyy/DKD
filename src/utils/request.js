import axios from 'axios'
import { Message } from 'element-ui';
// 引入store
// import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  // timeout: 5000,
}) // 创建一个axios的实例
service.interceptors.request.use() // 请求拦截器
service.interceptors.response.use(
  (res) => {
    if (res.config.url.includes('/api/user-service/user/imageCode/')) {
      return res.data
    }
    // console.log(res);
    // 把data里的数据结构success是否成功，message提示信息
    if (res.data.success) {
      return res
    }
    // 失败给个提示语
    Message.error(res.data.msg)
    // 官网axios错误提示
    return Promise.reject(new Error(res.data.msg))

    // return res.data.data
    // 请求成功的函数
  },
  // 官网axios错误提示
  function (error) {
    Message.error('系统异常')
    return Promise.reject(error)

  }
) // 响应拦截器
export default service // 导出axios实例