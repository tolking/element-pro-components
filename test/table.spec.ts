import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProTable from '../src/Table/Table.vue'
import { tableData, TableItem } from './mock'
import type { ProTableColumns, ProTableIndexColumns } from '../src/types/index'

const columns: ProTableColumns = [
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
    components: { ProTable },
    ...options,
  })
const getHeaderList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll(
      '.pro-table .el-table__header-wrapper .el-table__header thead tr th'
    )
    .map((item) => item.find('.cell').text())
const getBodyList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll('.pro-table .el-table__body-wrapper .el-table__body tbody tr')

describe('Table.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('columns', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" />',
      setup() {
        return { columns: ref(columns) }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: ProTableColumns }

    expect(getHeaderList(wrapper)).toContain('Date')
    expect(getHeaderList(wrapper)).toContain('Name')
    expect(getHeaderList(wrapper)).toContain('Address')

    await vm.columns.push({ label: 'Vue', prop: 'vue' })
    expect(getHeaderList(wrapper)).toHaveLength(4)
    expect(getHeaderList(wrapper)).toContain('Vue')

    await vm.columns.splice(1, 1)
    expect(getHeaderList(wrapper)).toHaveLength(3)
    expect(getHeaderList(wrapper)).not.toContain('Name')

    await (vm.columns[0].label = '-Date')
    expect(getHeaderList(wrapper)).toHaveLength(3)
    expect(getHeaderList(wrapper)).not.toContain('Date')
    expect(getHeaderList(wrapper)).toContain('-Date')
  })

  test('data', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" :data="data" />',
      setup() {
        return { columns, data: ref(tableData) }
      },
    })
    const vm = (wrapper.vm as unknown) as { data: TableItem[] }

    expect(getBodyList(wrapper)).toHaveLength(4)

    await vm.data.push({ date: '0000', name: 'vue', address: '--' })
    expect(getBodyList(wrapper)).toHaveLength(5)
  })

  test('idnex', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" :data="data" :index="index" />',
      setup() {
        const index = ref<boolean | ProTableIndexColumns>({ label: '#' })
        return { columns, data: tableData, index }
      },
    })
    const vm = (wrapper.vm as unknown) as {
      index: boolean | ProTableIndexColumns
    }

    expect(getHeaderList(wrapper)).toContain('#')

    await (typeof vm.index === 'object' && (vm.index.label = '-'))
    expect(getHeaderList(wrapper)).toHaveLength(4)
    expect(getHeaderList(wrapper)).not.toContain('#')
    expect(getHeaderList(wrapper)).toContain('-')

    await (vm.index = false)
    expect(getHeaderList(wrapper)).toHaveLength(3)
    expect(getHeaderList(wrapper)).not.toContain('#')
    expect(getHeaderList(wrapper)).not.toContain('-')
  })

  // TODO: more test
})
