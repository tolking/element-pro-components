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

  test.concurrent('slot', async () => {
    const wrapper = await _mount({
      template: `<pro-tabs>
        <template #label="{ title, path }">
          <span class="title">{{ title }}</span>
          <span class="path">{{ path }}</span>
        </template>
      </pro-tabs>`,
    })

    expect(wrapper.find('.pro-tabs').exists()).toBe(true)
    expect(getTabList(wrapper)).toHaveLength(1)
    expect(wrapper.find('.title').text()).toBe('Home')
    expect(wrapper.find('.path').text()).toBe('/index')
  })

  test.concurrent('contextmenu', async () => {
    const wrapper = await _mount({
      template: '<pro-tabs contextmenu />',
    })

    const list = getTabList(wrapper)
    expect(list[0].find('.el-dropdown').exists()).toBe(true)

    await list[0].find('.el-dropdown').trigger('contextmenu')
    const menu = document.querySelectorAll('.el-dropdown-menu__item')
    expect(menu).toHaveLength(3)
    expect(menu[0].textContent).toBe('Close Left')
    expect(menu[1].textContent).toBe('Close Right')
    expect(menu[2].textContent).toBe('Close Others')
  })

  test.concurrent('refreshPath', async () => {
    const wrapper = await _mount({
      template: '<pro-tabs contextmenu refreshPath="/refresh" />',
    })

    const list = getTabList(wrapper)
    await list[0].find('.el-dropdown').trigger('contextmenu')
    const menu = document.querySelectorAll('.el-dropdown-menu__item')
    expect(menu).toHaveLength(4)
    expect(menu[0].textContent).toBe('Refresh')
    expect(menu[1].textContent).toBe('Close Left')
    expect(menu[2].textContent).toBe('Close Right')
    expect(menu[3].textContent).toBe('Close Others')
  })
})
