import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProRadioButton from '../src/RadioButton/RadioButton.vue'
import { dicList, DicItem } from './mock'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProRadioButton },
    ...options,
  })
const getList = (wrapper: VueWrapper<ComponentPublicInstance>, calss = '') => {
  const className = '.pro-radio-button .el-radio-button' + calss
  return wrapper
    .findAll(className)
    .map((item) => item.find('.el-radio-button__inner').text())
}

describe('RadioButton.vue', () => {
  test('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-radio-button v-model="value" :data="data" />',
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
    expect(getList(wrapper, '.is-disabled')).toContain('go')
    expect(getList(wrapper, '.is-active')).toContain('javascript')
    expect(getList(wrapper, '.is-active')).not.toContain('python')
    expect(getList(wrapper, '.is-active')).not.toContain('dart')

    /** change model-value */
    await (vm.value = 'Dart')
    expect(getList(wrapper, '.is-active')).toContain('dart')
  })

  test('change data', async () => {
    const wrapper = _mount({
      template: '<pro-radio-button v-model="value" :data="data" />',
      setup() {
        const value = ref('JavaScript')
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
