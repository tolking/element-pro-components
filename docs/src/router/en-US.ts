import { markRaw } from 'vue'
import { House, TakeawayBox } from '@element-plus/icons-vue'
import BaseLayout from '../layout/Layout.vue'
import type { RouteRecordRaw } from 'vue-router'

const enUS: RouteRecordRaw[] = [
  {
    path: '/en-US/',
    redirect: '/en-US/guide/',
    component: BaseLayout,
    meta: { title: 'Guide', icon: markRaw(House) },
    children: [
      {
        path: '/en-US/guide/introduction',
        component: () => import('../../en-US/guide/introduction.md'),
        meta: { title: 'Introduction' },
      },
      {
        path: '/en-US/guide/',
        component: () => import('../../en-US/guide/index.md'),
        meta: { title: 'Quick Start' },
      },
      {
        path: '/en-US/guide/i18n',
        component: () => import('../../en-US/guide/i18n.md'),
        meta: { title: 'Internationalization' },
      },
      {
        path: '/en-US/guide/theme',
        component: () => import('../../en-US/guide/theme.md'),
        meta: { title: 'Custom Theme' },
      },
      {
        path: '/en-US/guide/router',
        component: () => import('../../en-US/guide/router.md'),
        meta: { title: 'Router and Menu' },
      },
      {
        path: '/en-US/guide/contributing',
        component: () => import('../../en-US/guide/contributing.md'),
        meta: { title: 'Contributing' },
      },
      {
        path: '/en-US/guide/changelog',
        component: () => import('../../../CHANGELOG.md'),
        meta: { title: 'Changelog' },
      },
    ],
  },
  {
    path: '/en-US/components/',
    redirect: '/en-US/components/layout',
    component: BaseLayout,
    meta: { title: 'Components', icon: markRaw(TakeawayBox) },
    children: [
      {
        path: '/en-US/components/layout',
        component: () => import('../../en-US/components/Layout.md'),
        meta: { title: 'Layout' },
      },
      {
        path: '/en-US/components/card',
        component: () => import('../../en-US/components/Card.md'),
        meta: { title: 'Card' },
      },
      {
        path: '/en-US/components/menu',
        component: () => import('../../en-US/components/Menu.md'),
        meta: { title: 'Menu' },
      },
      {
        path: '/en-US/components/filter-routes',
        component: () => import('../../en-US/components/FilterRoutes.md'),
        meta: { title: 'FilterRoutes' },
      },
      {
        path: '/en-US/components/breadcrumb',
        component: () => import('../../en-US/components/Breadcrumb.md'),
        meta: { title: 'Breadcrumb' },
      },
      {
        path: '/en-US/components/tabs',
        component: () => import('../../en-US/components/Tabs.md'),
        meta: { title: 'Tabs' },
      },
      {
        path: '/en-US/components/link',
        component: () => import('../../en-US/components/Link.md'),
        meta: { title: 'Link' },
      },
      {
        path: '/en-US/components/form',
        component: () => import('../../en-US/components/Form.md'),
        meta: { title: 'Form' },
      },
      {
        path: '/en-US/components/radio',
        component: () => import('../../en-US/components/Radio.md'),
        meta: { title: 'Radio' },
      },
      {
        path: '/en-US/components/checkbox',
        component: () => import('../../en-US/components/Checkbox.md'),
        meta: { title: 'Checkbox' },
      },
      {
        path: '/en-US/components/select',
        component: () => import('../../en-US/components/Select.md'),
        meta: { title: 'Select' },
      },
      {
        path: '/en-US/components/tree-select',
        component: () => import('../../en-US/components/TreeSelect.md'),
        meta: { title: 'TreeSelect' },
      },
      {
        path: '/en-US/components/input-tag',
        component: () => import('../../en-US/components/InputTag.md'),
        meta: { title: 'InputTag' },
      },
      {
        path: '/en-US/components/autocomplete-tag',
        component: () => import('../../en-US/components/AutocompleteTag.md'),
        meta: { title: 'AutocompleteTag' },
      },
      {
        path: '/en-US/components/table',
        component: () => import('../../en-US/components/Table.md'),
        meta: { title: 'Table' },
      },
      {
        path: '/en-US/components/crud',
        component: () => import('../../en-US/components/Crud.md'),
        meta: { title: 'Crud' },
      },
      {
        path: '/en-US/components/column-setting',
        component: () => import('../../en-US/components/ColumnSetting.md'),
        meta: { title: 'ColumnSetting' },
      },
      {
        path: '/en-US/components/descriptions',
        component: () => import('../../en-US/components/Descriptions.md'),
        meta: { title: 'Descriptions' },
      },
    ],
  },
]

export default enUS
