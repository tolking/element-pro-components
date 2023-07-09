import { markRaw } from 'vue'
import { House, TakeawayBox } from '@element-plus/icons-vue'
import BaseLayout from '../layout/Layout.vue'
import type { RouteRecordRaw } from 'vue-router'

const zhCN: RouteRecordRaw[] = [
  {
    path: '/zh-CN/',
    redirect: '/zh-CN/guide/',
    component: BaseLayout,
    meta: { title: '指南', icon: markRaw(House) },
    children: [
      {
        path: '/zh-CN/guide/introduction',
        component: () => import('../../zh-CN/guide/introduction.md'),
        meta: { title: '介绍' },
      },
      {
        path: '/zh-CN/guide/',
        component: () => import('../../zh-CN/guide/index.md'),
        meta: { title: '快速上手' },
      },
      {
        path: '/zh-CN/guide/i18n',
        component: () => import('../../zh-CN/guide/i18n.md'),
        meta: { title: '国际化' },
      },
      {
        path: '/zh-CN/guide/theme',
        component: () => import('../../zh-CN/guide/theme.md'),
        meta: { title: '自定义主题' },
      },
      {
        path: '/zh-CN/guide/router',
        component: () => import('../../zh-CN/guide/router.md'),
        meta: { title: '路由和菜单' },
      },
      {
        path: '/zh-CN/guide/contributing',
        component: () => import('../../zh-CN/guide/contributing.md'),
        meta: { title: '贡献指南' },
      },
      {
        path: '/zh-CN/guide/changelog',
        component: () => import('../../../CHANGELOG.md'),
        meta: { title: '更新日志' },
      },
    ],
  },
  {
    path: '/zh-CN/components/',
    redirect: '/zh-CN/components/layout',
    component: BaseLayout,
    meta: { title: '组件', icon: markRaw(TakeawayBox) },
    children: [
      {
        path: '',
        redirect: '/zh-CN/components/layout',
        meta: { title: '布局组件', group: true },
        children: [
          {
            path: '/zh-CN/components/layout',
            component: () => import('../../zh-CN/components/Layout.md'),
            meta: { title: 'Layout' },
          },
          {
            path: '/zh-CN/components/card',
            component: () => import('../../zh-CN/components/Card.md'),
            meta: { title: 'Card' },
          },
          {
            path: '/zh-CN/components/menu',
            component: () => import('../../zh-CN/components/Menu.md'),
            meta: { title: 'Menu' },
          },
          {
            path: '/zh-CN/components/filter-routes',
            component: () => import('../../zh-CN/components/FilterRoutes.md'),
            meta: { title: 'FilterRoutes' },
          },
          {
            path: '/zh-CN/components/breadcrumb',
            component: () => import('../../zh-CN/components/Breadcrumb.md'),
            meta: { title: 'Breadcrumb' },
          },
          {
            path: '/zh-CN/components/tabs',
            component: () => import('../../zh-CN/components/Tabs.md'),
            meta: { title: 'Tabs' },
          },
          {
            path: '/zh-CN/components/link',
            component: () => import('../../zh-CN/components/Link.md'),
            meta: { title: 'Link' },
          },
        ],
      },
      {
        path: '',
        redirect: '/zh-CN/components/layout',
        meta: { title: '表单组件', group: true },
        children: [
          {
            path: '/zh-CN/components/form',
            component: () => import('../../zh-CN/components/Form.md'),
            meta: { title: 'Form' },
          },
          {
            path: '/zh-CN/components/radio',
            component: () => import('../../zh-CN/components/Radio.md'),
            meta: { title: 'Radio' },
          },
          {
            path: '/zh-CN/components/checkbox',
            component: () => import('../../zh-CN/components/Checkbox.md'),
            meta: { title: 'Checkbox' },
          },
          {
            path: '/zh-CN/components/select',
            component: () => import('../../zh-CN/components/Select.md'),
            meta: { title: 'Select' },
          },
          {
            path: '/zh-CN/components/tree-select',
            component: () => import('../../zh-CN/components/TreeSelect.md'),
            meta: { title: 'TreeSelect' },
          },
          {
            path: '/zh-CN/components/input-tag',
            component: () => import('../../zh-CN/components/InputTag.md'),
            meta: { title: 'InputTag' },
          },
          {
            path: '/zh-CN/components/autocomplete-tag',
            component: () =>
              import('../../zh-CN/components/AutocompleteTag.md'),
            meta: { title: 'AutocompleteTag' },
          },
        ],
      },
      {
        path: '',
        redirect: '/zh-CN/components/layout',
        meta: { title: '数据组件', group: true },
        children: [
          {
            path: '/zh-CN/components/table',
            component: () => import('../../zh-CN/components/Table.md'),
            meta: { title: 'Table' },
          },
          {
            path: '/zh-CN/components/crud',
            component: () => import('../../zh-CN/components/Crud.md'),
            meta: { title: 'Crud' },
          },
          {
            path: '/zh-CN/components/column-setting',
            component: () => import('../../zh-CN/components/ColumnSetting.md'),
            meta: { title: 'ColumnSetting' },
          },
          {
            path: '/zh-CN/components/descriptions',
            component: () => import('../../zh-CN/components/Descriptions.md'),
            meta: { title: 'Descriptions' },
          },
        ],
      },
    ],
  },
]

export default zhCN
