import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)



// 路由懒加载
const dashboard = resolve => require(['../views/index'], resolve);

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: {title: 'Dashboard', icon: 'dashboard'}
      },
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form-index',
    meta: {title:'表单', icon: 'form'},
    children: [
      {
        path: 'form-index',
        name: 'Form-index',
        component: () => {import('@/views/form')},
        meta: {title: '表单列表', icon: 'form'}
      },
      {
        path: 'employee',
        name: 'Employee',
        component: () => {import('@/views/form/employee')},
        meta: {title: '员工入职表', icon: 'employee'}
      },
      {
        path: 'holiday',
        name: 'Holiday',
        component: () => {import('@/views/form/holiday')},
        meta: {title: '请假申请表', icon: 'holiday'}
      }
    ]
  },
  // {// 其他任何不存在的路由地址全都重定向到404
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true
  // }
] // 定义静态路由

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    name: 'quanxianceshi',
    meta: {roles: ['admin', 'super_editor']},// 自定义roles字段标识权限访问用户列表
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/permission'], resolve)
      }
    ]
  }
]// 定义动态路由

const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => {y: 0},
  routes: constantRouterMap
})

const router = createRouter()// 现有的router，包含了新的用户权限

export function resetRouter() {
  const newRouter = createRouter()// 新构造的router，只含有初始化通用权限
  router.matcher = newRouter.matcher
}
//通过新建一个全新的 Router，然后将新的 Router.matcher 赋给当前页面的管理 Router，以达到更新路由配置的目的。
//通过请求服务端获取当前用户路由配置 this.$router.addRoutes() 仅仅是注入新的路由，不能删除原有路由
//router.beforeEach()  钩子函数对每次路由跳转进行管理

export default router



