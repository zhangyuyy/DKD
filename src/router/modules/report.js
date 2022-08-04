import Layout from '@/layout'
export default {
    path: '/report',
    component: Layout,

    children: [
        {
            path: 'index',
            name: 'Index',
            component: () => import('@/views/report/index'),
            meta: { title: '对账统计', icon: 'el-icon-coin' },
        },
    ]
}