import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProRadio from '../src/Radio/Radio.vue'
import { dicList } from './mock'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProRadio },
    ...options,
  })
const getList = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  return wrapper
    .findAll('.pro-radio .el-radio')
    .map((item) => item.find('.el-radio__label').text())
}
const getDisableList = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  return wrapper
    .findAll('.pro-radio .el-radio.is-disabled')
    .map((item) => item.find('.el-radio__label').text())
}
const getCheckList = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  return wrapper
    .findAll('.pro-radio .el-radio.is-checked')
    .map((item) => item.find('.el-radio__label').text())
}

describe('Radio.vue', () => {
  test('empty', () => {
    const wrapper = _mount({
      template: '<pro-radio />',
    })

    expect(getList(wrapper)).toHaveLength(0)
  })

  test('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-radio v-model="value" :data="data" />',
      setup() {
        const value = ref('JavaScript')
        return { value, data: dicList }
      },
    })
    const vm = (wrapper.vm as unknown) as { value: string }

    /** init */
    expect(getList(wrapper)).toContain('javascript')
    expect(getList(wrapper)).toContain('python')
    expect(getList(wrapper)).toContain('dart')
    expect(getDisableList(wrapper)).toContain('go')
    expect(getCheckList(wrapper)).toContain('javascript')
    expect(getCheckList(wrapper)).not.toContain('python')
    expect(getCheckList(wrapper)).not.toContain('dart')

    /** change model-value */
    await (vm.value = 'Dart')
    expect(getCheckList(wrapper)).toContain('dart')
  })
})
