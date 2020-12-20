import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
import ProLayout from '../views/ProLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    meta: { title: 'Home', icon: 'el-icon-house' },
    children: [
      {
        path: '/index',
        component: Home,
        meta: { title: 'Home' },
      },
    ],
  },
  {
    path: '/components',
    redirect: '/components/ProLayout',
    component: Layout,
    meta: { title: 'Components', icon: 'el-icon-takeaway-box' },
    children: [
      {
        path: '/components/ProLayout',
        component: ProLayout,
        meta: { title: 'ProLayout' },
      },
      {
        path: '/components/ProMenu',
        component: ProLayout,
        meta: { title: 'ProMenu' },
      },
      {
        path: '/components/ProBreadcrumb',
        component: ProLayout,
        meta: { title: 'ProBreadcrumb' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
