import { describe, test, expect, afterEach, afterAll } from 'vitest'
import { ComponentPublicInstance } from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import ProMenu from './Menu'
import { initRouter } from '../__mocks__/index'
import type { RouteRecordRaw } from 'vue-router'

config.global.components = { ProMenu }
initRouter()

const getSubMenuList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.pro-menu .el-sub-menu')
    .map((item) => item.find('.el-sub-menu__title'))
const getMenuList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll('.pro-menu .el-menu-item')
const getGroupMenuList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.pro-menu .el-menu-item-group')
    .map((item) => item.find('.el-menu-item-group__title'))

describe('Menu', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-menu/>',
    })

    const list = getMenuList(wrapper)
    expect(wrapper.find('.pro-menu').exists()).toBe(true)
    expect(list).toHaveLength(2)
    expect(list[0].find('.el-icon').html()).toContain('icon-house')
    expect(list[0].find('span').text()).toBe('home')
    expect(list[1].find('span').text()).toBe('two')
  })

  test.concurrent('routes', async () => {
    const wrapper = mount({
      template: '<pro-menu :routes="routes"/>',
      setup() {
        const routes: RouteRecordRaw[] = [
          {
            path: '/one',
            component: { template: 'one page' },
            meta: { title: 'one' },
            children: [
              {
                path: '/one/index',
                component: { template: 'one index page' },
                meta: { title: 'oneIndex' },
              },
              {
                path: '/one/info',
                component: { template: 'one info page' },
                meta: { title: 'oneInfo' },
                children: [
                  {
                    path: '/two/index',
                    component: { template: 'two page' },
                    meta: { title: 'twoIndex' },
                  },
                  {
                    path: '/two/info',
                    component: { template: 'two page' },
                    meta: { title: 'twoInfo' },
                  },
                ],
              },
            ],
          },
        ]

        return { routes }
      },
    })

    const subMenuList = getSubMenuList(wrapper)
    const menuList = getMenuList(wrapper)

    expect(subMenuList).toHaveLength(2)
    expect(subMenuList[0].find('span').text()).toBe('one')
    expect(subMenuList[1].find('span').text()).toBe('oneInfo')
    expect(menuList).toHaveLength(3)
    expect(menuList[0].find('span').text()).toBe('oneIndex')
    expect(menuList[1].find('span').text()).toBe('twoIndex')
    expect(menuList[2].find('span').text()).toBe('twoInfo')

    await wrapper.vm.routes[0].children?.push({
      path: '/one/dynamic',
      component: { template: 'one dynamic page' },
      meta: { title: 'oneDynamic' },
    })
    const newMenuList = getMenuList(wrapper)
    expect(newMenuList).toHaveLength(4)
    expect(newMenuList[3].find('span').text()).toBe('oneDynamic')
  })

  test.concurrent('group', async () => {
    const wrapper = mount({
      template: '<pro-menu :routes="routes"/>',
      setup() {
        const routes: RouteRecordRaw[] = [
          {
            path: '/one',
            component: { template: 'one page' },
            meta: { title: 'one', group: true },
            children: [
              {
                path: '/one/index',
                component: { template: 'one index page' },
                meta: { title: 'oneIndex' },
              },
              {
                path: '/one/info',
                component: { template: 'one info page' },
                meta: { title: 'oneInfo' },
              },
            ],
          },
          {
            path: '/two',
            component: { template: 'two page' },
            meta: { title: 'two', group: true },
            children: [
              {
                path: '/two/index',
                component: { template: 'two page' },
                meta: { title: 'twoIndex' },
              },
              {
                path: '/two/info',
                component: { template: 'two page' },
                meta: { title: 'twoInfo' },
              },
            ],
          },
        ]

        return { routes }
      },
    })

    const groupList = getGroupMenuList(wrapper)
    const menuList = getMenuList(wrapper)

    expect(groupList).toHaveLength(2)
    expect(groupList[0].find('span').text()).toBe('one')
    expect(groupList[1].find('span').text()).toBe('two')
    expect(menuList).toHaveLength(4)
    expect(menuList[0].find('span').text()).toBe('oneIndex')
    expect(menuList[1].find('span').text()).toBe('oneInfo')
    expect(menuList[2].find('span').text()).toBe('twoIndex')
    expect(menuList[3].find('span').text()).toBe('twoInfo')
  })

  test.concurrent('slots', () => {
    const wrapper = mount({
      template: `
        <pro-menu>
          <template #default="item">
            <p class="pro-link">
              <span class="path">{{ item.path }}</span>
              <span class="icon">{{ item.meta?.icon }}</span>
              <span class="title">{{ item.meta?.title }}</span>
            </p>
          </template>
        </pro-menu>
      `,
    })

    const list = getMenuList(wrapper)
    expect(list).toHaveLength(2)
    expect(list[0].find('.path').text()).toBe('/')
    expect(list[0].find('.icon').text()).toBe('icon-house')
    expect(list[0].find('.title').text()).toBe('home')
    expect(list[1].find('.path').text()).toBe('/two')
    expect(list[1].find('.title').text()).toBe('two')
  })
})

afterAll(() => {
  config.global.components = {}
})
