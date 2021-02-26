import {
  checkUrl,
  filterRouterByHidden,
  findRouterItemListByPath,
  getScreenSize,
} from '../src/utils/index'
import { routes } from './mock'
import type { IRouteRecordRaw } from '../src/types/index'

function getRouterTitle(list: IRouteRecordRaw[]) {
  return list.map((item) => item.meta?.title || '')
}

describe('all utils', () => {
  describe('checkUrl', () => {
    test('checkUrl https://ououe.com', () => {
      expect(checkUrl('https://ououe.com')).toBeTruthy()
    })
    test('checkUrl http://ououe.com', () => {
      expect(checkUrl('https://ououe.com')).toBeTruthy()
    })
    test('checkUrl /children', () => {
      expect(checkUrl('/children')).toBeFalsy()
    })
  })

  describe('filterRouterByHidden', () => {
    const _routes = filterRouterByHidden(routes)

    expect(_routes.length).toBe(2)
    expect(_routes[0]).toEqual({
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
    })
    expect(_routes[1]).toEqual({
      path: '/two',
      component: { template: 'two page' },
      meta: { title: 'two' },
      children: [
        {
          path: '/two/info',
          component: { template: 'two info page' },
          meta: { title: 'twoInfo' },
        },
      ],
    })
  })

  describe('findRouterItemListByPath', () => {
    const indexPath = findRouterItemListByPath(routes, '/index')
    const twoPath = findRouterItemListByPath(routes, '/two/info')

    expect(getRouterTitle(indexPath)).toContain('home')
    expect(getRouterTitle(indexPath)).toContain('Home')
    expect(getRouterTitle(twoPath)).toContain('two')
    expect(getRouterTitle(twoPath)).toContain('twoInfo')
  })

  describe('getScreenSize', () => {
    expect(getScreenSize(1920)).toBe('xl')
    expect(getScreenSize(1500)).toBe('lg')
    expect(getScreenSize(1100)).toBe('md')
    expect(getScreenSize(920)).toBe('sm')
    expect(getScreenSize(375)).toBe('xs')
  })
})
