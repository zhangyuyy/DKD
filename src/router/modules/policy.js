import Layout from '@/layout'
export default {
    path: '/policy',
    component: Layout,

    children: [
        {
            path: 'index',
            name: 'Index',
            component: () => import('@/views/policy/index'),
            meta: { title: '策略管理', icon: 'el-icon-thumb' },
        },
    ]
}