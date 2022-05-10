import { describe, test, expect, afterEach } from 'vitest'
import { ComponentPublicInstance } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProTabs from './Tabs'
import { initRouter } from '../__mocks__/index'

initRouter()

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProTabs },
    ...options,
  })
const getTabList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll('.pro-tabs .el-tabs__item')

describe('Tabs', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('empt', async () => {
    const wrapper = await _mount({
      template: '<pro-tabs />',
    })

    expect(wrapper.find('.pro-tabs').exists()).toBe(true)
    expect(getTabList(wrapper)).toHaveLength(1)
    expect(getTabList(wrapper)[0].text()).toBe('Home')
    expect(getTabList(wrapper)[0].element.id).toBe('tab-/index')
  })
})
