import { vi } from 'vitest'
import { nextTick } from 'vue'
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router'

export function initRouter(list = routes) {
  const push = vi.fn()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  useRoute.mockImplementation(() => ({
    path: '/index',
    meta: { title: 'Home' },
    matched: [
      {
        path: '/',
        redirect: '/index',
        component: { template: '<router-view />' },
        meta: { title: 'home', icon: 'icon-house' },
      },
      {
        path: '/index',
        component: { template: 'index page' },
        meta: { title: 'Home' },
      },
    ],
  }))
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  useRouter.mockImplementation(() => ({
    push,
    options: { routes: list },
  }))

  return {
    push,
  }
}

export function NOOP() {
  return null
}

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

export const dictConfigList = [
  { id: 0, value: { key: 'a' } },
  { id: 1, value: { key: 'b' } },
  { id: 2, value: { key: 'c' } },
  { id: 3, value: { key: 'd' } },
  { id: 4, value: { key: 'e' } },
]

export interface TableItem {
  date: string
  name: string
  address: string
}

export const tableData: TableItem[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

export interface SlotItem {
  slot?: boolean
  label: string
  children?: SlotItem[]
  [key: string]: unknown
}

export const slotList: SlotItem[] = [
  { slot: true, label: 'label1' },
  { label: 'label2' },
  {
    slot: true,
    label: 'label3',
    children: [{ slot: true, label: 'label4' }, { label: 'label5' }],
  },
  {
    label: 'label6',
    children: [{ slot: true, label: 'label7' }, { label: 'label8' }],
  },
]

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
    component: { template: '<router-view />' },
    meta: { title: 'home', icon: 'icon-house' },
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

export interface TreeItem extends DicItem {
  children?: TreeItem[]
}

export const treeList: TreeItem[] = [
  {
    label: '1',
    value: '1',
    disabled: true,
    children: [{ value: '11', label: '1-1', disabled: true }],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '21',
        label: '2-1',
      },
      {
        value: '22',
        label: '2-2',
        children: [{ value: '221', label: '2-2-1' }],
      },
    ],
  },
]

export async function doubleWait() {
  await nextTick()
  await nextTick()
}
