import Layout from '@/layout'
export default {
    path: '/task',
    component: Layout,
    meta: { title: '工单管理', icon: 'el-icon-date' },
    children: [
        {
            path: 'business',
            name: 'Business',
            component: () => import('@/views/task/business'),
            meta: { title: '运营工单' },
        },
        {
            path: 'Operation',
            name: 'Operation',
            component: () => import('@/views/task/operation'),
            meta: { title: '运维工单' },
        },

    ]
}