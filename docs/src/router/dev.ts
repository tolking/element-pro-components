import BaseLayout from '../layout/Layout.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/dev/',
    redirect: '/dev/Layout',
    component: BaseLayout,
    meta: { title: 'Development', icon: 'icon-edit' },
    children: [
      {
        path: '/dev/Layout',
        component: () => import('../views/Layout.vue'),
        meta: { title: 'Layout' },
      },
      {
        path: '/dev/Table',
        component: () => import('../views/Table.vue'),
        meta: { title: 'Table' },
      },
      {
        path: '/dev/Form',
        component: () => import('../views/Form.vue'),
        meta: { title: 'Form' },
      },
      {
        path: '/dev/Crud',
        component: () => import('../views/Crud.vue'),
        meta: { title: 'Crud' },
      },
    ],
  },
]

export default routes
