import { describe, test, expect, afterEach } from 'vitest'
import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProCheckboxButton from './CheckboxButton'
import { dicList, DicItem } from '../__mocks__/index'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProCheckboxButton },
    ...options,
  })
const getList = (wrapper: VueWrapper<ComponentPublicInstance>, calss = '') => {
  const className = '.pro-checkbox-button .el-checkbox-button' + calss
  return wrapper
    .findAll(className)
    .map((item) => item.find('.el-checkbox-button__inner').text())
}

describe('CheckboxButton', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-checkbox-button v-model="value" :data="data" />',
      setup() {
        const value = ref(['JavaScript'])
        return { value, data: dicList }
      },
    })
    const vm = (wrapper.vm as unknown) as { value: string[] }

    /** init */
    expect(getList(wrapper)).toContain('javascript')
    expect(getList(wrapper)).toContain('python')
    expect(getList(wrapper)).toContain('dart')
    expect(getList(wrapper, '.is-disabled')).toContain('go')
    expect(getList(wrapper, '.is-checked')).toContain('javascript')
    expect(getList(wrapper, '.is-checked')).not.toContain('python')
    expect(getList(wrapper, '.is-checked')).not.toContain('dart')

    /** change model-value */
    await vm.value.push('Dart')
    expect(getList(wrapper, '.is-checked')).toContain('dart')
  })

  test.concurrent('change data', async () => {
    const wrapper = _mount({
      template: '<pro-checkbox-button v-model="value" :data="data" />',
      setup() {
        const value = ref(['JavaScript'])
        const data = ref(dicList)
        return { value, data }
      },
    })
    const vm = (wrapper.vm as unknown) as { data: DicItem[] }

    expect(getList(wrapper)).not.toContain('vue')
    await vm.data.push({ value: 'Vue', label: 'vue' })
    expect(getList(wrapper)).toContain('vue')
  })
})
