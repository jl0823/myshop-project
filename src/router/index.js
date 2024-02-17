import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/MyHome.vue'

// 创建基于hash的路由历史实例
const history = createWebHashHistory()

const routes = [// 路由配置数组，每个元素是一个表示一条路由的对象.
    {
        path: '/', // 主页路由
        component: Home,
    },
    {
        path: '/cart', // 路由路径
        component: () => import('@/views/cart/MyCart') // 路由对应的组件
    },
    {
        path: '/mine', // 路由路径
        component: () => import('@/views/mine/MyMine') // 路由对应的组件
    },
    {
        path: '/order', // 路由路径
        component: () => import('@/views/order/MyOrder') // 路由对应的组件
    },
    {
        path: '/store',
        component: () => import('@/views/store/MyStore')
    },
    {
        path: '/createorder',
        component: () => import('@/views/createOrder/MyCreateOrder')
    }
]

const router = createRouter({
    history,
    routes, // 将定义好的路由规则注入到路由器实例中
})
//全局解析守卫
// router.beforeResolve((to,from,next)=>{
//     console.log("全局解析守卫");
//     next();
// })

export default router