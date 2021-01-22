import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProAutocompleteTag from '../src/AutocompleteTag/AutocompleteTag.vue'
import { dicList } from './mock'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProAutocompleteTag },
    ...options,
  })
const getList = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  return wrapper.findAll('.el-tag').map((item) => item.text())
}

describe('AutocompleteTag.vue', () => {
  test('empty', () => {
    const wrapper = _mount({
      template: '<pro-autocomplete-tag />',
    })

    expect(wrapper.find('input').element.value).toBe('')
    expect(getList(wrapper)).toHaveLength(0)
  })

  test('test modelValue', async () => {
    const wrapper = _mount({
      template: `
        <pro-autocomplete-tag
          v-model="value"
          :fetch-suggestions="querySearch"
        />
      `,
      setup() {
        const value = ref(['test'])
        const list = dicList

        function querySearch(
          queryString: string,
          cb: (...arg: unknown[]) => void
        ) {
          cb(
            queryString
              ? list.filter((i) => {
                  return i.value.indexOf(queryString.toLowerCase()) === 0
                })
              : list
          )
        }

        return {
          value,
          list,
          querySearch,
        }
      },
    })
    const vm = (wrapper.vm as unknown) as { value: string[] }

    expect(wrapper.find('.pro-input-tag .el-autocomplete')).not.toBeNull()
    expect(wrapper.find('.el-autocomplete-suggestion__list')).not.toBeNull()

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
    /** keyup */
    await wrapper.find('input').setValue('space')
    await wrapper.find('input').trigger('keyup', { key: ' ' })
    expect(getList(wrapper)).toContain('space')

    /** close */
    await wrapper.find('.el-tag .el-tag__close').trigger('click')
    expect(getList(wrapper)).not.toContain('test')

    /** change model-value */
    await vm.value.push('model')
    expect(getList(wrapper)).toContain('model')
  })

  test('test props', async () => {
    const wrapper = _mount({
      template: `
        <pro-autocomplete-tag
          v-model="value"
          :trigger="trigger"
          :size="size"
          :type="type"
          :hit="hit"
          :color="color"
          :effect="effect"
        />
      `,
      setup() {
        const value = ref([])
        const trigger = ref('space')
        const size = ref('')
        const type = ref('')
        const hit = ref(false)
        const color = ref('')
        const effect = ref('light')

        return {
          value,
          trigger,
          size,
          type,
          hit,
          color,
          effect,
        }
      },
    })
    const vm = (wrapper.vm as unknown) as {
      value: string[]
      trigger: 'space' | 'enter'
      size: 'medium' | 'small' | 'mini'
      type: 'success' | 'info' | 'warning' | 'danger'
      hit: boolean
      color: string
      effect: 'light' | 'dark' | 'plain'
    }

    // change trigger
    await wrapper.find('input').setValue('space')
    await wrapper.find('input').trigger('keyup', { key: ' ' })
    expect(getList(wrapper)).toContain('space')
    await (vm.trigger = 'enter')
    await wrapper.find('input').setValue('enter')
    await wrapper.find('input').trigger('keyup', { key: 'Enter' })
    expect(getList(wrapper)).toContain('enter')

    // change size
    expect(wrapper.find('.el-tag').classes()).not.toContain('el-tag--small')
    expect(wrapper.find('.el-input').classes()).not.toContain('el-input--small')
    await (vm.size = 'small')
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--small')
    expect(wrapper.find('.el-input').classes()).toContain('el-input--small')

    // change type
    expect(wrapper.find('.el-tag').classes()).not.toContain('el-tag--danger')
    await (vm.type = 'danger')
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--danger')

    // change hit
    expect(wrapper.find('.el-tag').classes()).not.toContain('is-hit')
    await (vm.hit = true)
    expect(wrapper.find('.el-tag').classes()).toContain('is-hit')

    // change color
    await (vm.color = 'rgb(125, 233, 45)')
    expect(wrapper.find('.el-tag').element.style.backgroundColor).toEqual(
      'rgb(125, 233, 45)'
    )

    // change effect
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--light')
    await (vm.effect = 'plain')
    expect(wrapper.find('.el-tag').classes()).toContain('el-tag--plain')
  })
})
