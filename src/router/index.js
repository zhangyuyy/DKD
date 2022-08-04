import Vue from 'vue'
import Router from 'vue-router'
import task from "@/router/modules/task"
import node from "@/router/modules/node"
import vm from "@/router/modules/vs"
import user from "@/router/modules/user"
import sku from "@/router/modules/sku"
import policy from "@/router/modules/policy"
import order from "@/router/modules/order"
import report from "@/router/modules/report"
Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// 静态路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '蒂可得', icon: 'el-icon-star-off' }
    }]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// 动态路由
const asyncRoutes = [
  task,
  node,
  vm,
  user,
  sku,
  policy,
  order,
  report

]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes, ...asyncRoutes]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
