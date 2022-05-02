import { describe, test, expect, afterEach } from 'vitest'
import { ComponentPublicInstance } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { initRouter } from '../__mocks__/index'
import ProBreadcrumb from './Breadcrumb'

initRouter()

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProBreadcrumb },
    ...options,
  })
const getTabList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.pro-breadcrumb .el-breadcrumb__item')
    .map((item) => item.find('.pro-link'))

describe('Breadcrumb', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = await _mount({
      template: '<pro-breadcrumb />',
    })

    expect(wrapper.find('.pro-breadcrumb').exists()).toBe(true)
    expect(getTabList(wrapper)).toHaveLength(2)
    expect(getTabList(wrapper)[0].text()).toBe('home')
    expect(getTabList(wrapper)[1].text()).toBe('Home')
  })
})
