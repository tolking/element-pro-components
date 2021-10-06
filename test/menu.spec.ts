import { ComponentPublicInstance } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { initRouter } from './mock'
import ProMenu from '../src/Menu/Menu'
import type { IRouteRecordRaw } from '../src/types/index'

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

describe('Link', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('empt', async () => {
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

  test('routes', async () => {
    const wrapper = _mount({
      template: '<pro-menu :routes="routes"/>',
      setup() {
        const routes: IRouteRecordRaw[] = [
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
              },
            ],
          },
        ]

        return { routes }
      },
    })
    const vm = (wrapper.vm as unknown) as { routes: IRouteRecordRaw[] }

    expect(getSubMenuList(wrapper)).toHaveLength(1)
    expect(getSubMenuList(wrapper)[0].find('span').text()).toBe('one')
    expect(getMenuList(wrapper)).toHaveLength(2)
    expect(getMenuList(wrapper)[0].find('span').text()).toBe('oneIndex')
    expect(getMenuList(wrapper)[0].attributes()).toEqual({
      class: 'pro-link',
      to: '/one/index',
    })
    expect(getMenuList(wrapper)[1].find('span').text()).toBe('oneInfo')
    expect(getMenuList(wrapper)[1].attributes()).toEqual({
      class: 'pro-link',
      to: '/one/info',
    })

    await vm.routes[0].children?.push({
      path: '/one/dynamic',
      component: { template: 'one dynamic page' },
      meta: { title: 'oneDynamic' },
    })
    expect(getMenuList(wrapper)).toHaveLength(3)
    expect(getMenuList(wrapper)[2].find('span').text()).toBe('oneDynamic')
    expect(getMenuList(wrapper)[2].attributes()).toEqual({
      class: 'pro-link',
      to: '/one/dynamic',
    })
  })
})
