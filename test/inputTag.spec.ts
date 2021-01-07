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
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('empty', () => {
    const wrapper = _mount({
      template: '<pro-input-tag />',
    })

    expect(wrapper.find('input').element.value).toBe('')
    expect(getList(wrapper)).toHaveLength(0)
  })

  test('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-input-tag v-model="list" />',
      setup() {
        const list = ref(['test'])
        return { list }
      },
    })

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
  })

  test('autocomplete', () => {
    const wrapper = _mount({
      template: `
        <pro-input-tag
          v-model="value"
          :fetch-suggestions="querySearch"
          :popper-append-to-body="false"
          autocomplete
        />
      `,
      setup() {
        const value = ref([])
        const list = [
          { value: 'Go', tag: 'go' },
          { value: 'JavaScript', tag: 'javascript' },
          { value: 'Python', tag: 'python' },
        ]

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

    expect(wrapper.find('.pro-input-tag .el-autocomplete')).not.toBeNull()
    expect(wrapper.find('.el-autocomplete-suggestion__list')).not.toBeNull()
  })
})
