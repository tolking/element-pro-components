import { describe, test, expect, afterEach, afterAll } from 'vitest'
import { ComponentPublicInstance, ref } from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import ProCheckbox from './Checkbox'
import { dicList, dictConfigList } from '../__mocks__/index'

config.global.components = { ProCheckbox }

const getList = (wrapper: VueWrapper<ComponentPublicInstance>, calss = '') => {
  const className = '.pro-checkbox .el-checkbox' + calss
  return wrapper
    .findAll(className)
    .map((item) => (item ? item.find('.el-checkbox__label').text() : ''))
}

describe('Checkbox', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('test modelValue', async () => {
    const wrapper = mount({
      template: '<pro-checkbox v-model="value" :data="data" />',
      setup() {
        const value = ref(['JavaScript'])
        return { value, data: dicList }
      },
    })

    /** init */
    expect(getList(wrapper)).toContain('javascript')
    expect(getList(wrapper)).toContain('python')
    expect(getList(wrapper)).toContain('dart')
    expect(getList(wrapper, '.is-disabled')).toContain('go')
    expect(getList(wrapper, '.is-checked')).toContain('javascript')
    expect(getList(wrapper, '.is-checked')).not.toContain('python')
    expect(getList(wrapper, '.is-checked')).not.toContain('dart')

    /** change model-value */
    await wrapper.vm.value.push('Dart')
    expect(getList(wrapper, '.is-checked')).toContain('dart')
  })

  test.concurrent('change data', async () => {
    const wrapper = mount({
      template: '<pro-checkbox v-model="value" :data="data" />',
      setup() {
        const value = ref(['JavaScript'])
        const data = ref(dicList)
        return { value, data }
      },
    })

    expect(getList(wrapper)).not.toContain('vue')
    await wrapper.vm.data.push({ value: 'Vue', label: 'vue' })
    expect(getList(wrapper)).toContain('vue')
  })

  test.concurrent('config', async () => {
    const wrapper = mount({
      template:
        '<pro-checkbox v-model="value" :data="data" :config="config" />',
      setup() {
        const value = ref([0])
        const config = { label: 'value.key', value: 'id' }
        return { value, data: dictConfigList, config }
      },
    })

    const list = getList(wrapper)
    ;['a', 'b', 'c', 'd', 'e'].forEach((item) => {
      expect(list).toContain(item)
    })

    await wrapper.vm.value.push(3)
    expect(getList(wrapper, '.is-checked')).toContain('a')
    expect(getList(wrapper, '.is-checked')).toContain('d')
  })
})

afterAll(() => {
  config.global.components = {}
})
