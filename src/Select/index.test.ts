import { describe, test, expect, afterEach } from 'vitest'
import { ComponentPublicInstance, ref, nextTick } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProSelect from './Select'
import { dicList, DicItem } from '../__mocks__/index'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProSelect },
    ...options,
  })

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
    const wrapper = _mount({
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
    const vm = (wrapper.vm as unknown) as { value: string }

    // init
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()
    expect(vm.value).toBe('')
    expect(getInputValue(wrapper)).toBe('')

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

  test.concurrent('change data', async () => {
    const wrapper = _mount({
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
    const vm = (wrapper.vm as unknown) as { value: string; data: DicItem[] }

    await vm.data.push({ value: 'Vue', label: 'vue' })
    await wrapper.find('.select-trigger').trigger('click')
    const options = getOptions()

    options[5].click()
    expect(vm.value).toBe('Vue')
  })
})
