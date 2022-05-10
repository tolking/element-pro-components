import { describe, test, expect, afterEach } from 'vitest'
import { ComponentPublicInstance } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProMenu from './Menu'
import { initRouter } from '../__mocks__/index'
import type { RouteRecordRaw } from 'vue-router'

initRouter()

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProMenu },
    ...options,
  })
const getSubMenuList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.pro-menu .el-sub-menu')
    .map((item) => item.find('.el-sub-menu__title .pro-link'))
const getMenuList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.pro-menu .el-menu-item')
    .map((item) => item.find('.pro-link'))

describe('Menu', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = _mount({
      template: '<pro-menu/>',
    })

    expect(wrapper.find('.pro-menu').exists()).toBe(true)
    expect(getMenuList(wrapper)).toHaveLength(2)
    expect(getMenuList(wrapper)[0].find('.pro-menu-icon').classes()).toContain(
      'icon-house'
    )
    expect(getMenuList(wrapper)[0].find('span').text()).toBe('home')
    expect(getMenuList(wrapper)[0].attributes()).toEqual({
      class: 'pro-link',
      to: '/',
    })
    expect(getMenuList(wrapper)[1].find('span').text()).toBe('two')
    expect(getMenuList(wrapper)[1].attributes()).toEqual({
      class: 'pro-link',
      to: '/two',
    })
  })

  test.concurrent('routes', async () => {
    const wrapper = _mount({
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
    const vm = (wrapper.vm as unknown) as { routes: RouteRecordRaw[] }

    expect(getSubMenuList(wrapper)).toHaveLength(2)
    expect(getSubMenuList(wrapper)[0].find('span').text()).toBe('one')
    expect(getSubMenuList(wrapper)[1].find('span').text()).toBe('oneInfo')
    expect(getMenuList(wrapper)).toHaveLength(3)
    expect(getMenuList(wrapper)[0].find('span').text()).toBe('oneIndex')
    expect(getMenuList(wrapper)[0].attributes()).toEqual({
      class: 'pro-link',
      to: '/one/index',
    })
    expect(getMenuList(wrapper)[1].find('span').text()).toBe('twoIndex')
    expect(getMenuList(wrapper)[1].attributes()).toEqual({
      class: 'pro-link',
      to: '/two/index',
    })
    expect(getMenuList(wrapper)[2].find('span').text()).toBe('twoInfo')
    expect(getMenuList(wrapper)[2].attributes()).toEqual({
      class: 'pro-link',
      to: '/two/info',
    })

    await vm.routes[0].children?.push({
      path: '/one/dynamic',
      component: { template: 'one dynamic page' },
      meta: { title: 'oneDynamic' },
    })
    expect(getMenuList(wrapper)).toHaveLength(4)
    expect(getMenuList(wrapper)[3].find('span').text()).toBe('oneDynamic')
    expect(getMenuList(wrapper)[3].attributes()).toEqual({
      class: 'pro-link',
      to: '/one/dynamic',
    })
  })

  test.concurrent('slots', () => {
    const wrapper = _mount({
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

    expect(getMenuList(wrapper)).toHaveLength(2)
    expect(getMenuList(wrapper)[0].find('.path').text()).toBe('/')
    expect(getMenuList(wrapper)[0].find('.icon').text()).toBe('icon-house')
    expect(getMenuList(wrapper)[0].find('.title').text()).toBe('home')
    expect(getMenuList(wrapper)[1].find('.path').text()).toBe('/two')
    expect(getMenuList(wrapper)[1].find('.title').text()).toBe('two')
  })
})
