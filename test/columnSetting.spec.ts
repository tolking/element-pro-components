import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import ProColumnSetting from '../src/ColumnSetting/ColumnSetting.vue'
import type { ITableColumns } from '../src/types/index'

const columns: ITableColumns = [
  {
    label: 'Date',
    prop: 'date',
  },
  {
    label: 'Name',
    prop: 'name',
  },
  {
    label: 'Address',
    prop: 'address',
  },
]
const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProColumnSetting },
    ...options,
  })
const getList = () => {
  const list: string[] = []

  document
    .querySelectorAll('.pro-column-setting-tree .el-tree-node')
    .forEach((item) => {
      const value = item.querySelector(
        '.el-tree-node__content .el-tree-node__label'
      )?.innerHTML
      value && list.push(value)
    })
  return list
}

describe('ColumnSetting.vue', () => {
  test('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-column-setting v-model="columns" />',
      setup() {
        return { columns: ref(columns) }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: ITableColumns }

    await wrapper.find('.pro-column-setting').trigger('hover')
    expect(getList()).toHaveLength(3)
    expect(getList()).toContain('Date')
    expect(getList()).toContain('Name')
    expect(getList()).toContain('Address')

    await vm.columns.push({ label: 'Vue', prop: 'vue' })
    expect(getList()).toHaveLength(4)
    expect(getList()).toContain('Vue')
  })
})
