import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    meta: { title: '首页', icon: 'el-icon-house' },
    children: [
      {
        path: '/index',
        component: Home,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
