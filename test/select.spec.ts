import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProSelect from '../src/Select/Select.vue'
import { dicList, DicItem } from './mock'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProSelect },
    ...options,
  })
const selectItemClass =
  '.pro-select .el-select__popper .el-select-dropdown__item'
const getList = (wrapper: VueWrapper<ComponentPublicInstance>, calss = '') =>
  wrapper
    .findAll(selectItemClass + calss)
    .map((item) => item.find('span').text())

describe('Select.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('test modelValue', async () => {
    const wrapper = _mount({
      template: `
        <pro-select
          v-model="value"
          :data="data"
          :popper-append-to-body="false"
        />
      `,
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
    expect(getList(wrapper)).toContain('javascript')
    expect(getList(wrapper)).toContain('python')
    expect(getList(wrapper)).toContain('dart')
    expect(getList(wrapper, '.is-disabled')).toContain('go')

    await wrapper.find(selectItemClass + ':last-child').trigger('click')
    expect(wrapper.find('.el-input__inner').element.value).toBe('v')
    expect(vm.value).toBe('V')

    // change model-value
    await (vm.value = 'Dart')
    expect(wrapper.find('.el-input__inner').element.value).toBe('dart')
  })

  test('change data', async () => {
    const wrapper = _mount({
      template: `
        <pro-select
          v-model="value"
          :data="data"
          :popper-append-to-body="false"
        />
      `,
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
