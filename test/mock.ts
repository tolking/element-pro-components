import type { ProRouteRecordRaw } from '../src/types/index'

export interface DicItem {
  value: string
  label: string
  disabled?: boolean
}

export const dicList: DicItem[] = [
  { value: 'Go', label: 'go', disabled: true },
  { value: 'JavaScript', label: 'javascript' },
  { value: 'Python', label: 'python' },
  { value: 'Dart', label: 'dart' },
  { value: 'V', label: 'v' },
]

export const routes: ProRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
    component: { template: '<router-view />' },
    meta: { title: 'home' },
    children: [
      {
        path: '/index',
        component: { template: 'index page' },
        meta: { title: 'Home' },
      },
    ],
  },
  {
    path: '/one',
    component: { template: 'one page' },
    meta: { title: 'one', hidden: true },
    children: [
      {
        path: '/one/index',
        component: { template: 'one index page' },
        meta: { title: 'oneIndex' },
      },
    ],
  },
  {
    path: '/two',
    component: { template: 'two page' },
    meta: { title: 'two' },
    children: [
      {
        path: '/two/index',
        component: { template: 'two index page' },
        meta: { title: 'twoIndex', hidden: true },
      },
      {
        path: '/two/info',
        component: { template: 'two info page' },
        meta: { title: 'twoInfo' },
      },
    ],
  },
  {
    path: '/404',
    component: { template: '404 page' },
    meta: { title: '404', hidden: true },
  },
]
