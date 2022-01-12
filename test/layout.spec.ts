import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { initRouter } from './mock'
import ProLayout from '../src/Layout/Layout'
import type { RouteRecordRaw } from 'vue-router'

initRouter()

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProLayout },
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

describe('Layout', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('empt', async () => {
    const wrapper = _mount({
      template: '<pro-layout/>',
    })

    expect(wrapper.find('.pro-layout').exists()).toBe(true)
    expect(wrapper.find('.header-fold-btn').exists()).toBe(true)
    expect(wrapper.find('.pro-layout').classes()).toContain('layout-aside')
    expect(wrapper.find('.pro-layout').classes()).not.toContain('fixed-main')
    expect(wrapper.find('.pro-header').classes()).toContain('fixed-header')
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
      template: '<pro-layout :routes="routes"/>',
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
              },
            ],
          },
        ]

        return { routes }
      },
    })
    const vm = (wrapper.vm as unknown) as { routes: RouteRecordRaw[] }

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

  test('mode', async () => {
    const wrapper = _mount({
      template: '<pro-layout :mode="mode"/>',
      setup() {
        const mode = ref('horizontal')

        return { mode }
      },
    })
    const vm = (wrapper.vm as unknown) as { mode: string }

    expect(wrapper.find('.pro-menu').classes()).toContain('el-menu--horizontal')

    await (vm.mode = 'vertical')
    expect(wrapper.find('.pro-menu').classes()).not.toContain(
      'el-menu--horizontal'
    )
  })

  test('fixed-header', async () => {
    const wrapper = _mount({
      template: '<pro-layout :fixed-header="fixed"/>',
      setup() {
        const fixed = ref(true)

        return { fixed }
      },
    })
    const vm = (wrapper.vm as unknown) as { fixed: boolean }

    expect(wrapper.find('.pro-header').classes()).toContain('fixed-header')

    await (vm.fixed = false)
    expect(wrapper.find('.pro-header').classes()).not.toContain('fixed-header')
  })

  test('fixed-main', async () => {
    const wrapper = _mount({
      template: '<pro-layout :fixed-main="fixed"/>',
      setup() {
        const fixed = ref(true)

        return { fixed }
      },
    })
    const vm = (wrapper.vm as unknown) as { fixed: boolean }

    expect(wrapper.find('.pro-layout').classes()).toContain('fixed-main')

    await (vm.fixed = false)
    expect(wrapper.find('.pro-layout').classes()).not.toContain('fixed-main')
  })

  test('slots', () => {
    const wrapper = _mount({
      template: `
        <pro-layout>
          <template #logo="{ collapse }">
            <span class="logo">logo-{{ collapse }}</span>
          </template>
          <template #footer>
            <p class="footer">footer</p>
          </template>
          <template #header-left>
            <span class="header-left">header-left</span>
          </template>
          <template #header-right>
            <span class="header-right">header-right</span>
          </template>
          <template #header-bottom>
            <span class="header-bottom">header-bottom</span>
          </template>
          <template #main-top>
            <p class="main-top">main-top</p>
          </template>
          <template #main-bottom>
            <p class="main-bottom">main-bottom</p>
          </template>
        </pro-layout>
      `,
    })

    expect(wrapper.find('.pro-layout .logo').text()).toBe('logo-false')
    expect(wrapper.find('.pro-layout .footer').text()).toBe('footer')
    expect(wrapper.find('.pro-layout .header-left').text()).toBe('header-left')
    expect(wrapper.find('.pro-layout .header-right').text()).toBe(
      'header-right'
    )
    expect(wrapper.find('.pro-layout .header-bottom').text()).toBe(
      'header-bottom'
    )
    //NOTE perfect RouterView in mock
    // expect(wrapper.find('.pro-layout .main-top').text()).toBe('main-top')
    // expect(wrapper.find('.pro-layout .main-bottom').text()).toBe('main-bottom')
  })
})
