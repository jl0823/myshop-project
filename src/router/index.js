import { createRouter, createWebHashHistory } from 'vue-router'
import { Toast } from 'vant'
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
        component: () => import('@/views/cart/MyCart'), // 路由对应的组件
        meta:{
            isAuth: true // 路由元信息，用于判断是否需要登录
        }
    },
    {
        path: '/mine', // 路由路径
        component: () => import('@/views/mine/MyMine'), // 路由对应的组件
        meta:{
            isAuth: true // 路由元信息，用于判断是否需要登录
        }
    },
    {
        path: '/order', // 路由路径
        component: () => import('@/views/order/MyOrder'),// 路由对应的组件
        meta:{
            isAuth: true // 路由元信息，用于判断是否需要登录
        }
    },
    {
        path: '/store',
        component: () => import('@/views/store/MyStore')
    },
    {
        path: '/createorder',
        component: () => import('@/views/createOrder/MyCreateOrder')
    },{
        path: '/address',
        component: () => import('@/views/address/MyAddress'),
        meta:{
            isAuth: true // 路由元信息，用于判断是否需要登录
        }
    },{
        path: '/addressedit',
        component: () => import('@/views/address/components/MyAddressEdit'),
        meta:{
            isAuth: true // 路由元信息，用于判断是否需要登录
        }
    },{
        path: '/userinfoedit',
        component: () => import('@/views/userinfoedit/MyInfoEdit'),
        meta:{
            isAuth: true // 路由元信息，用于判断是否需要登录
        }
    },{
        path: '/login',
        component: () => import('@/views/login/MyLogin')
    },{
        path: '/register',
        component: () => import('@/views/register/MyRegister')
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
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){ // 判断是否需要登录权限
        //一会登录以后，会在localstorage里面 存储一个标识
        if (localStorage.isLogin === "login"){
            next();
        }else{
            next("/login");
            Toast("请先登录");
        }
    }else{
        next();
    }
})

export default router