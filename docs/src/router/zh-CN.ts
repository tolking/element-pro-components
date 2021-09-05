import BaseLayout from '../layout/Layout.vue'
import type { IRouteRecordRaw } from '/@src/index'

const zhCN: IRouteRecordRaw[] = [
  {
    path: '/zh-CN/',
    redirect: '/zh-CN/guide/',
    component: BaseLayout,
    meta: { title: '指南', icon: 'icon-house' },
    children: [
      {
        path: '/zh-CN/guide/introduction',
        component: () => import('../../docs/zh-CN/guide/introduction.md'),
        meta: { title: '介绍' },
      },
      {
        path: '/zh-CN/guide/',
        component: () => import('../../docs/zh-CN/guide/index.md'),
        meta: { title: '快速上手' },
      },
      {
        path: '/zh-CN/guide/theme',
        component: () => import('../../docs/zh-CN/guide/theme.md'),
        meta: { title: '自定义主题' },
      },
      {
        path: '/zh-CN/guide/router',
        component: () => import('../../docs/zh-CN/guide/router.md'),
        meta: { title: '路由和菜单' },
      },
      {
        path: '/zh-CN/guide/design',
        component: () => import('../../docs/zh-CN/guide/design.md'),
        meta: { title: '组件设计' },
      },
    ],
  },
  {
    path: '/zh-CN/components/',
    redirect: '/zh-CN/components/layout',
    component: BaseLayout,
    meta: { title: '组件', icon: 'icon-takeaway-box' },
    children: [
      {
        path: '/zh-CN/components/layout',
        component: () => import('../../docs/zh-CN/components/Layout.md'),
        meta: { title: 'Layout' },
      },
      {
        path: '/zh-CN/components/menu',
        component: () => import('../../docs/zh-CN/components/Menu.md'),
        meta: { title: 'Menu' },
      },
      {
        path: '/zh-CN/components/breadcrumb',
        component: () => import('../../docs/zh-CN/components/Breadcrumb.md'),
        meta: { title: 'Breadcrumb' },
      },
      {
        path: '/zh-CN/components/tabs',
        component: () => import('../../docs/zh-CN/components/Tabs.md'),
        meta: { title: 'Tabs' },
      },
      {
        path: '/zh-CN/components/link',
        component: () => import('../../docs/zh-CN/components/Link.md'),
        meta: { title: 'Link' },
      },
      {
        path: '/zh-CN/components/form',
        component: () => import('../../docs/zh-CN/components/Form.md'),
        meta: { title: 'Form' },
      },
      {
        path: '/zh-CN/components/radio',
        component: () => import('../../docs/zh-CN/components/Radio.md'),
        meta: { title: 'Radio' },
      },
      {
        path: '/zh-CN/components/checkbox',
        component: () => import('../../docs/zh-CN/components/Checkbox.md'),
        meta: { title: 'Checkbox' },
      },
      {
        path: '/zh-CN/components/select',
        component: () => import('../../docs/zh-CN/components/Select.md'),
        meta: { title: 'Select' },
      },
      {
        path: '/zh-CN/components/tree-select',
        component: () => import('../../docs/zh-CN/components/TreeSelect.md'),
        meta: { title: 'TreeSelect' },
      },
      {
        path: '/zh-CN/components/input-tag',
        component: () => import('../../docs/zh-CN/components/InputTag.md'),
        meta: { title: 'InputTag' },
      },
      {
        path: '/zh-CN/components/table',
        component: () => import('../../docs/zh-CN/components/Table.md'),
        meta: { title: 'Table' },
      },
      {
        path: '/zh-CN/components/crud',
        component: () => import('../../docs/zh-CN/components/Crud.md'),
        meta: { title: 'Crud' },
      },
      {
        path: '/zh-CN/components/column-setting',
        component: () => import('../../docs/zh-CN/components/ColumnSetting.md'),
        meta: { title: 'ColumnSetting' },
      },
    ],
  },
]

export default zhCN
