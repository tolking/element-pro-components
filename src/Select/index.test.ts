import { describe, test, expect, afterEach, afterAll } from 'vitest'
import { ComponentPublicInstance, ref, nextTick } from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import ProSelect from './Select'
import { dicList, dictConfigList } from '../__mocks__/index'

config.global.components = { ProSelect }

const getInputValue = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.find<HTMLInputElement>('.el-input__inner').element.value
const getOptions = () =>
  Array.from(
    document.querySelectorAll<HTMLElement>(
      'body > div:last-child .el-select-dropdown__item'
    )
  )

describe('Select', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('test modelValue', async () => {
    const wrapper = mount({
      template: `
        <pro-select
          v-model="value"
          :data="data"
        />
      `,
      setup() {
        const value = ref('')
        return { value, data: dicList }
      },
    })

    // init
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    expect(wrapper.vm.value).toBe('')
    expect(getInputValue(wrapper)).toBe('')

    options[2].click()
    await nextTick()
    expect(wrapper.vm.value).toBe('Python')
    expect(getInputValue(wrapper)).toBe('python')

    options[4].click()
    await nextTick()
    expect(wrapper.vm.value).toBe('V')
    expect(getInputValue(wrapper)).toBe('v')

    // change model-value
    await (wrapper.vm.value = 'Dart')
    expect(wrapper.vm.value).toBe('Dart')
    expect(getInputValue(wrapper)).toBe('dart')
  })

  test.concurrent('change data', async () => {
    const wrapper = mount({
      template: `
        <pro-select
          v-model="value"
          :data="data"
        />
      `,
      setup() {
        const value = ref('')
        const data = ref(dicList)
        return { value, data }
      },
    })

    await wrapper.vm.data.push({ value: 'Vue', label: 'vue' })
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()

    options[5].click()
    expect(wrapper.vm.value).toBe('Vue')
  })

  test.concurrent('config', async () => {
    const wrapper = mount({
      template: '<pro-select v-model="value" :data="data" :config="config" />',
      setup() {
        const value = ref(0)
        const config = { label: 'value.key', value: 'id' }
        return { value, data: dictConfigList, config }
      },
    })

    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    const list = options.map((item) => item.querySelector('span')?.innerHTML)
    ;['a', 'b', 'c', 'd', 'e'].forEach((item) => {
      expect(list).toContain(item)
    })

    await options[3].click()
    expect(wrapper.vm.value).toBe(3)
    expect(getInputValue(wrapper)).toBe('d')
  })
})

afterAll(() => {
  config.global.components = {}
})
