import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import Table from '../views/Table.vue'

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: BaseLayout,
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
    redirect: '/components/Layout',
    component: BaseLayout,
    meta: { title: 'Components', icon: 'el-icon-takeaway-box' },
    children: [
      {
        path: '/components/Layout',
        component: Layout,
        meta: { title: 'Layout' },
      },
      {
        path: '/components/Table',
        component: Table,
        meta: { title: 'Table' },
      },
      {
        path: '/components/ProBreadcrumb',
        component: Layout,
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
