import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/account',
        meta: { title: '常用操作', icon: 'el-icon-star-off' },
        children: [
            {
                path:'/account',
                name:'Account',
                meta: { title: '账号管理', icon: '' },
                component: () => import('../views/Account.vue'),
            },
            {
                path:'/account1',
                name:'Account1',
                meta: { title: '账号管理1', icon: '' },
                component: () => import('../views/Account.vue'),
            },
        ]
    },
    {
        path: '/frend',
        name: 'Frend',
        component: Layout,
        meta: { title: 'Echarts', icon: 'el-icon-star-off' },
        children: [
            {
                path:'/frend/list',
                name:'frendList',
                meta: { title: 'Echarts', icon: 'el-icon-star-off' },
                component: () => import('../views/Echarts.vue'),
            },
        ]
    },
    {
        path:'/account/upload',
        name:'upload',
        component: Layout,
        hidden: true,
        children: [
            {
                path:'/account/upload/echarts',
                name:'Xlsx',
                component: () => import('../views/UploadEchart.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
