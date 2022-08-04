import Layout from '@/layout'
export default {
    path: '/user',
    component: Layout,
    meta: { title: '人员管理', icon: 'el-icon-s-custom' },
    children: [
        {
            path: 'index',
            name: 'Index',
            component: () => import('@/views/user/index'),
            meta: { title: '人员列表' },
        },
        {
            path: 'user-task-stats',
            name: 'userTaskStatss',
            component: () => import('@/views/user/user-task-stats'),
            meta: { title: '人效统计' },
        },
        {
            path: 'user-work',
            name: 'userWork',
            component: () => import('@/views/user/user-work'),
            meta: { title: '工作量列表' },
        },

    ]
}