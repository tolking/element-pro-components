import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import ProSelect from '../src/Select/Select.vue'
import { dicList, DicItem } from './mock'

const _mount = (options: Record<string, unknown>) =>
  mount(
    {
      components: { ProSelect },
      ...options,
    },
    {
      attachTo: 'body',
    }
  )
const getList = (calss = '') => {
  const className = 'body .el-select__popper .el-select-dropdown__item' + calss
  return Array.from(document.querySelectorAll(className)).map(
    (item) => item.querySelector('span')?.textContent
  )
}

describe('Select.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-select v-model="value" :data="data" />',
      setup() {
        const value = ref('Javascript')
        const data = ref(dicList)
        return { value, data }
      },
    })
    const vm = (wrapper.vm as unknown) as { value: string }

    // init
    await wrapper.find('.select-trigger').trigger('click')
    expect(wrapper.find('.el-input__inner').element.value).toBe('Javascript')
    expect(getList()).toContain('javascript')
    expect(getList()).toContain('python')
    expect(getList()).toContain('dart')
    expect(getList('.is-disabled')).toContain('go')

    // change model-value
    await (vm.value = 'Dart')
    expect(wrapper.find('.el-input__inner').element.value).toBe('dart')
  })

  test('change data', async () => {
    const wrapper = _mount({
      template: '<pro-select v-model="value" :data="data" />',
      setup() {
        const value = ref('JavaScript')
        const data = ref(dicList)
        return { value, data }
      },
    })
    const vm = (wrapper.vm as unknown) as { data: DicItem[] }

    expect(getList()).not.toContain('vue')
    await vm.data.push({ value: 'Vue', label: 'vue' })
    expect(getList()).toContain('vue')
  })
})
