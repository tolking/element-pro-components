import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'
import Crud from '../views/Crud.vue'

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
        path: '/components/Form',
        component: Form,
        meta: { title: 'Form' },
      },
      {
        path: '/components/Crud',
        component: Crud,
        meta: { title: 'Crud' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
