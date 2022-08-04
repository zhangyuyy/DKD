import Layout from '@/layout'
export default {
    path: '/node',
    component: Layout,
    meta: { title: '点位管理', icon: 'el-icon-map-location' },
    children: [
        {
            path: 'region',
            name: 'Region',
            component: () => import('@/views/node/region'),
            meta: { title: '区域管理' },
        },
        {
            path: 'node',
            name: 'Node',
            component: () => import('@/views/node/node'),
            meta: { title: '点位管理' },
        },
        {
            path: 'partner',
            name: 'Partner',
            component: () => import('@/views/node/partner'),
            meta: { title: '合作商管理' },
        },

    ]
}