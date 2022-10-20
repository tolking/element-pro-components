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
        component: () => import('../../docs/en-US/guide/introduction.md'),
        meta: { title: 'Introduction' },
      },
      {
        path: '/en-US/guide/',
        component: () => import('../../docs/en-US/guide/index.md'),
        meta: { title: 'Quick Start' },
      },
      {
        path: '/en-US/guide/i18n',
        component: () => import('../../docs/en-US/guide/i18n.md'),
        meta: { title: 'Internationalization' },
      },
      {
        path: '/en-US/guide/theme',
        component: () => import('../../docs/en-US/guide/theme.md'),
        meta: { title: 'Custom Theme' },
      },
      {
        path: '/en-US/guide/router',
        component: () => import('../../docs/en-US/guide/router.md'),
        meta: { title: 'Router and Menu' },
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
        component: () => import('../../docs/en-US/components/Layout.md'),
        meta: { title: 'Layout' },
      },
      {
        path: '/en-US/components/card',
        component: () => import('../../docs/en-US/components/Card.md'),
        meta: { title: 'Card' },
      },
      {
        path: '/en-US/components/menu',
        component: () => import('../../docs/en-US/components/Menu.md'),
        meta: { title: 'Menu' },
      },
      {
        path: '/en-US/components/filter-routes',
        component: () => import('../../docs/en-US/components/FilterRoutes.md'),
        meta: { title: 'FilterRoutes' },
      },
      {
        path: '/en-US/components/breadcrumb',
        component: () => import('../../docs/en-US/components/Breadcrumb.md'),
        meta: { title: 'Breadcrumb' },
      },
      {
        path: '/en-US/components/tabs',
        component: () => import('../../docs/en-US/components/Tabs.md'),
        meta: { title: 'Tabs' },
      },
      {
        path: '/en-US/components/link',
        component: () => import('../../docs/en-US/components/Link.md'),
        meta: { title: 'Link' },
      },
      {
        path: '/en-US/components/form',
        component: () => import('../../docs/en-US/components/Form.md'),
        meta: { title: 'Form' },
      },
      {
        path: '/en-US/components/array-form',
        component: () => import('../../docs/en-US/components/ArrayForm.md'),
        meta: { title: 'ArrayForm' },
      },
      {
        path: '/en-US/components/radio',
        component: () => import('../../docs/en-US/components/Radio.md'),
        meta: { title: 'Radio' },
      },
      {
        path: '/en-US/components/checkbox',
        component: () => import('../../docs/en-US/components/Checkbox.md'),
        meta: { title: 'Checkbox' },
      },
      {
        path: '/en-US/components/select',
        component: () => import('../../docs/en-US/components/Select.md'),
        meta: { title: 'Select' },
      },
      {
        path: '/en-US/components/tree-select',
        component: () => import('../../docs/en-US/components/TreeSelect.md'),
        meta: { title: 'TreeSelect' },
      },
      {
        path: '/en-US/components/input-tag',
        component: () => import('../../docs/en-US/components/InputTag.md'),
        meta: { title: 'InputTag' },
      },
      {
        path: '/en-US/components/autocomplete-tag',
        component: () =>
          import('../../docs/en-US/components/AutocompleteTag.md'),
        meta: { title: 'AutocompleteTag' },
      },
      {
        path: '/en-US/components/table',
        component: () => import('../../docs/en-US/components/Table.md'),
        meta: { title: 'Table' },
      },
      {
        path: '/en-US/components/crud',
        component: () => import('../../docs/en-US/components/Crud.md'),
        meta: { title: 'Crud' },
      },
      {
        path: '/en-US/components/column-setting',
        component: () => import('../../docs/en-US/components/ColumnSetting.md'),
        meta: { title: 'ColumnSetting' },
      },
      {
        path: '/en-US/components/descriptions',
        component: () => import('../../docs/en-US/components/Descriptions.md'),
        meta: { title: 'Descriptions' },
      },
    ],
  },
]

export default enUS
