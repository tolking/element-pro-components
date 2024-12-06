import { describe, test, expect, afterEach, afterAll } from 'vitest'
import { ComponentPublicInstance, ref, nextTick } from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import ProSelect from './Select'
import { dicList, dictConfigList } from '../__mocks__/index'

config.global.components = { ProSelect }

const getInputValue = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.find<HTMLInputElement>('.el-select__placeholder').text()
const getOptions = () =>
  Array.from(
    document.querySelectorAll<HTMLElement>(
      'body > div:last-child .el-select-dropdown__item',
    ),
  )

describe('Select', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('test modelValue', async () => {
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
    const vm = wrapper.vm as unknown as {
      value: string
      data: { value: string; label: string }[]
    }

    // init
    await wrapper.find('.el-select__wrapper').trigger('click')
    const options = getOptions()
    expect(vm.value).toBe('')
    expect(getInputValue(wrapper)).toBe('Select')

    options[2].click()
    await nextTick()
    expect(vm.value).toBe('Python')
    expect(getInputValue(wrapper)).toBe('python')

    options[4].click()
    await nextTick()
    expect(vm.value).toBe('V')
    expect(getInputValue(wrapper)).toBe('v')

    // change model-value
    await (vm.value = 'Dart')
    expect(vm.value).toBe('Dart')
    expect(getInputValue(wrapper)).toBe('dart')
  })

  test('change data', async () => {
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
    const vm = wrapper.vm as unknown as {
      value: string
      data: { value: string; label: string }[]
    }

    await vm.data.push({ value: 'Vue', label: 'vue' })
    await wrapper.find('.el-select__wrapper').trigger('click')
    const options = getOptions()

    options[5].click()
    expect(wrapper.vm.value).toBe('Vue')
  })

  test('config', async () => {
    const wrapper = mount({
      template: '<pro-select v-model="value" :data="data" :config="config" />',
      setup() {
        const value = ref(0)
        const config = { label: 'value.key', value: 'id' }
        return { value, data: dictConfigList, config }
      },
    })

    await wrapper.find('.el-select__wrapper').trigger('click')
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
