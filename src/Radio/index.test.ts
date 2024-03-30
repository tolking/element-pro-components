import { describe, test, expect, afterEach, afterAll } from 'vitest'
import { ComponentPublicInstance, ref } from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import ProRadio from './Radio'
import { dicList, dictConfigList } from '../__mocks__/index'

config.global.components = { ProRadio }

const getList = (wrapper: VueWrapper<ComponentPublicInstance>, calss = '') => {
  const className = '.pro-radio .el-radio' + calss
  return wrapper
    .findAll(className)
    .map((item) => item.find('.el-radio__label').text())
}

describe('Radio', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('test modelValue', async () => {
    const wrapper = mount({
      template: '<pro-radio v-model="value" :data="data" />',
      setup() {
        const value = ref('JavaScript')
        return { value, data: dicList }
      },
    })
    const vm = wrapper.vm as unknown as { value: string }

    /** init */
    expect(getList(wrapper)).toContain('javascript')
    expect(getList(wrapper)).toContain('python')
    expect(getList(wrapper)).toContain('dart')
    expect(getList(wrapper, '.is-disabled')).toContain('go')
    expect(getList(wrapper, '.is-checked')).toContain('javascript')
    expect(getList(wrapper, '.is-checked')).not.toContain('python')
    expect(getList(wrapper, '.is-checked')).not.toContain('dart')

    /** change model-value */
    await (vm.value = 'Dart')
    expect(getList(wrapper, '.is-checked')).toContain('dart')
  })

  test.concurrent('change data', async () => {
    const wrapper = mount({
      template: '<pro-radio v-model="value" :data="data" />',
      setup() {
        const value = ref('JavaScript')
        const data = ref(dicList)
        return { value, data }
      },
    })
    const vm = wrapper.vm as unknown as {
      value: string
      data: { value: string; label: string }[]
    }

    expect(getList(wrapper)).not.toContain('vue')
    await vm.data.push({ value: 'Vue', label: 'vue' })
    expect(getList(wrapper)).toContain('vue')
  })

  test.concurrent('config', async () => {
    const wrapper = mount({
      template: '<pro-radio v-model="value" :data="data" :config="config" />',
      setup() {
        const value = ref(0)
        const config = { label: 'value.key', value: 'id' }
        return { value, data: dictConfigList, config }
      },
    })
    const vm = wrapper.vm as unknown as { value: number }

    const list = getList(wrapper)
    ;['a', 'b', 'c', 'd', 'e'].forEach((item) => {
      expect(list).toContain(item)
    })
    expect(getList(wrapper, '.is-checked')).toContain('a')

    await (vm.value = 3)
    expect(getList(wrapper, '.is-checked')).toContain('d')
  })
})

afterAll(() => {
  config.global.components = {}
})
