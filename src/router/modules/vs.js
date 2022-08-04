import Layout from '@/layout'
export default {
    path: '/vm',
    component: Layout,
    meta: { title: '设备管理', icon: 'el-icon-s-release' },
    children: [
        {
            path: 'index',
            name: 'Index',
            component: () => import('@/views/vm/index'),
            meta: { title: '设备管理' },
        },
        {
            path: 'status',
            name: 'Status',
            component: () => import('@/views/vm/status'),
            meta: { title: '设备状态' },
        },
        {
            path: 'type',
            name: 'Type',
            component: () => import('@/views/vm/index'),
            meta: { title: '设备类型管理' },
        },

    ]
}