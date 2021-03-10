import BaseLayout from '../layout/Layout.vue'
import Layout from '../views/Layout.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'
import Crud from '../views/Crud.vue'
import type { IRouteRecordRaw } from '/@src/index'

const routes: IRouteRecordRaw[] = [
  {
    path: '/dev',
    redirect: '/dev/Layout',
    component: BaseLayout,
    meta: { title: 'Development', icon: 'el-icon-edit' },
    children: [
      {
        path: '/dev/Layout',
        component: Layout,
        meta: { title: 'Layout' },
      },
      {
        path: '/dev/Table',
        component: Table,
        meta: { title: 'Table' },
      },
      {
        path: '/dev/Form',
        component: Form,
        meta: { title: 'Form' },
      },
      {
        path: '/dev/Crud',
        component: Crud,
        meta: { title: 'Crud' },
      },
    ],
  },
]

export default routes
