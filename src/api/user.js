import request from '@/utils/request'
/**
 * 图片验证码接口
 * @param {*} clientToken 请求随机数
 * @returns 
 */

export function getverify(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    method: 'GET',
    responseType: 'blob'

  })
}
/**
 * 登录
 * @param {*} loginName 用户名
 * @param {*} password 密码
 * @param {*} code 验证码
 * @param {*} clientToken 客户端请求用的token 
 * @param {*} loginType 登录类型 0：后台；1：运营运维端；2：合作商后台
 * @returns 
 */
export const login = (data) => {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data
  })
}
export const getUserInfoApi = (id) => {
  return request({
    url: `/user-service/user/${id}`,
  })
}


