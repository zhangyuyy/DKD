import Layout from '@/layout'
export default {
    path: '/sku',
    component: Layout,
    meta: { title: '商品管理', icon: 'el-icon-goblet-square-full' },
    children: [
        {
            path: 'sku-class',
            name: 'skuClass',
            component: () => import('@/views/sku/sku-class'),
            meta: { title: '商品类型' },
        },
        {
            path: 'sku',
            name: 'Sku',
            component: () => import('@/views/sku/sku'),
            meta: { title: '商品管理' },
        },

    ]
}