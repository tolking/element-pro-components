import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProInputTag from '../src/InputTag/InputTag.vue'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProInputTag },
    ...options,
  })
const getList = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  return wrapper.findAll('.el-tag').map((item) => item.text())
}

describe('InputTag.vue', () => {
  test('empty', () => {
    const wrapper = _mount({
      template: '<pro-input-tag />',
    })

    expect(wrapper.find('input').element.value).toBe('')
    expect(getList(wrapper)).toHaveLength(0)
  })

  test('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-input-tag v-model="value" />',
      setup() {
        const value = ref(['test'])
        return { value }
      },
    })
    const vm = (wrapper.vm as unknown) as { value: string[] }

    /** init */
    expect(wrapper.find('input').element.value).toBe('')
    expect(getList(wrapper)).toContain('test')

    /** add */
    await wrapper.find('input').setValue('blur')
    expect(wrapper.find('input').element.value).toEqual('blur')
    /** blur */
    await wrapper.find('input').trigger('blur')
    expect(wrapper.find('input').element.value).toBe('')
    expect(getList(wrapper)).toContain('blur')
    /** keyup.space */
    await wrapper.find('input').setValue('space')
    await wrapper.find('input').trigger('keyup.space')
    expect(getList(wrapper)).toContain('space')

    /** close */
    await wrapper.find('.el-tag .el-tag__close').trigger('click')
    expect(getList(wrapper)).not.toContain('test')

    /** change model-value */
    await vm.value.push('model')
    expect(getList(wrapper)).toContain('model')
  })
})
