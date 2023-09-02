import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    //默认路径下显示该路由
    {
        path: '/',
        name: 'HomeView',
        component: HomeView //组件名称，这个路由对应跳转的组件
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router
