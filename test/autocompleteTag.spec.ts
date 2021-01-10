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
          :popper-append-to-body="false"
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
