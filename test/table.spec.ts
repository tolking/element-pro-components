import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProTable from '../src/Table/Table'
import { config } from '../src/utils/config'
import { tableData, TableItem } from './mock'
import type {
  ITableColumns,
  ITableIndexColumns,
  ITableExpandColumns,
  ITableMenuColumns,
  IPagination,
} from '../src/types/index'

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
    components: { ProTable },
    ...options,
  })
const headerClass =
  '.pro-table .el-table__header-wrapper .el-table__header thead tr'
const getHeader = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(headerClass + ' th')
const getMultiHeader = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(headerClass)
const getHeaderList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getHeader(wrapper).map((item) => item.find('.cell').text())
const getHeaderClass = (
  wrapper: VueWrapper<ComponentPublicInstance>,
  index = 0
) => getHeader(wrapper)[index].classes()
const bodyClass = '.pro-table .el-table__body-wrapper .el-table__body tbody tr'
const getBody = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(bodyClass)
const getBodyItem = (wrapper: VueWrapper<ComponentPublicInstance>, index = 1) =>
  wrapper
    .findAll(`${bodyClass}:nth-child(${index}) td`)
    .map((item) => item.find('.cell').text())
const getBodyClass = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.find(bodyClass + ' td').classes()
const getCheckBox = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.find(headerClass + ' th .cell .el-checkbox')
const getPager = (wrapper: VueWrapper<ComponentPublicInstance>, classes = '') =>
  wrapper.find('.pro-pagination .el-pager .number' + classes)
const getSizesItem = (classes = '') =>
  document.querySelector(
    '.el-select__popper .el-select-dropdown__item' + classes
  )

describe('Table.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('columns', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" />',
      setup() {
        return { columns: ref([...columns]) }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: ITableColumns }

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

    expect(getBody(wrapper)).toHaveLength(4)

    await vm.data.push({ date: '0000', name: 'vue', address: '--' })
    expect(getBody(wrapper)).toHaveLength(5)
    expect(getBodyItem(wrapper, 5)).toContain('0000')
  })

  test('idnex', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" :index="index" />',
      setup() {
        const index = ref<boolean | ITableIndexColumns>({ label: '#' })
        return { columns, index }
      },
    })
    const vm = (wrapper.vm as unknown) as {
      index: boolean | ITableIndexColumns
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

  test('expand', async () => {
    const wrapper = await _mount({
      template: `
        <pro-table :columns="columns" :expand="expand">
          <template #expand="{ row }">
            {{ row }}
          </template>
        </pro-table>
      `,
      setup() {
        const expand = ref<boolean | ITableExpandColumns>({ label: '>' })
        return { columns, expand }
      },
    })
    const vm = (wrapper.vm as unknown) as {
      expand: boolean | ITableExpandColumns
    }

    expect(getHeaderList(wrapper)).toContain('>')

    await (typeof vm.expand === 'object' && (vm.expand.label = '-'))
    expect(getHeaderList(wrapper)).toHaveLength(4)
    expect(getHeaderList(wrapper)).not.toContain('>')
    expect(getHeaderList(wrapper)).toContain('-')

    await (vm.expand = false)
    expect(getHeaderList(wrapper)).toHaveLength(3)
    expect(getHeaderList(wrapper)).not.toContain('>')
    expect(getHeaderList(wrapper)).not.toContain('-')
  })

  test('selection', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" :selection="selection" />',
      setup() {
        return { columns, selection: ref(true) }
      },
    })
    const vm = (wrapper.vm as unknown) as { selection: boolean }

    expect(getHeaderList(wrapper)).toHaveLength(4)
    expect(getHeaderList(wrapper)).toContain('')
    expect(getCheckBox(wrapper)).not.toBeNull()

    await (vm.selection = false)
    expect(getHeaderList(wrapper)).toHaveLength(3)
    expect(getHeaderList(wrapper)).not.toContain('')
  })

  test('menu', async () => {
    const wrapper = await _mount({
      template: `
        <pro-table :columns="columns" :menu="menu">
          <template #menu="{ size }">
            <button>{{ size }}</button>
          </template>
        </pro-table>
      `,
      setup() {
        const menu = ref<boolean | ITableMenuColumns>({ label: 'Menu' })
        return { columns, menu }
      },
    })
    const vm = (wrapper.vm as unknown) as {
      menu: boolean | ITableMenuColumns
    }

    expect(getHeaderList(wrapper)).toHaveLength(4)
    expect(getHeaderList(wrapper)).toContain('Menu')

    await (typeof vm.menu === 'object' && (vm.menu.label = '-Menu'))
    expect(getHeaderList(wrapper)).toHaveLength(4)
    expect(getHeaderList(wrapper)).not.toContain('Menu')
    expect(getHeaderList(wrapper)).toContain('-Menu')

    await (vm.menu = false)
    expect(getHeaderList(wrapper)).toHaveLength(3)
    expect(getHeaderList(wrapper)).not.toContain('Menu')
    expect(getHeaderList(wrapper)).not.toContain('-Menu')
  })

  test('pagination', async () => {
    const wrapper = await _mount({
      template: `
        <pro-table
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :columns="columns"
          :total="total"
          :pagination="pagination"
        />
      `,
      setup() {
        const total = ref(50)
        const currentPage = ref(1)
        const pageSize = ref(10)
        const pagination = ref<IPagination>(config.pagination)
        return { columns, total, currentPage, pageSize, pagination }
      },
    })
    const vm = (wrapper.vm as unknown) as {
      total: number
      currentPage: number
      pageSize: number
      pagination: IPagination
    }

    expect(wrapper.find('.pro-pagination')).not.toBeNull()

    await getPager(wrapper, ':nth-child(2)').trigger('click')
    expect(vm.currentPage).toBe(2)

    await getPager(wrapper, ':nth-child(3)').trigger('click')
    expect(vm.currentPage).toBe(3)

    await (vm.currentPage = 1)
    await expect(getPager(wrapper, '.active').text()).toBe('1')

    await (vm.pageSize = 10)
    await wrapper
      .find('.pro-pagination .el-pagination__sizes .select-trigger')
      .trigger('click')
    expect(getSizesItem('.selected')?.innerHTML).toMatch(/10/)

    await (vm.pagination.layout = 'sizes, prev, pager, next')
    expect(wrapper.find('.pro-pagination .el-pagination__total').exists()).toBe(
      false
    )
    expect(wrapper.find('.pro-pagination .el-pagination__jump').exists()).toBe(
      false
    )

    await (vm.total = 0)
    expect(wrapper.find('.pro-pagination').exists()).toBe(false)
  })

  test('align', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" :data="data" :align="align" />',
      setup() {
        const align = ref('center')
        return { columns, data: tableData, align }
      },
    })
    const vm = (wrapper.vm as unknown) as { align: string }

    expect(getHeaderClass(wrapper)).toContain('is-center')
    expect(getBodyClass(wrapper)).toContain('is-center')

    await (vm.align = 'right')
    expect(getHeaderClass(wrapper)).toContain('is-right')
    expect(getBodyClass(wrapper)).toContain('is-right')
  })

  test('headerAlign', async () => {
    const wrapper = await _mount({
      template:
        '<pro-table :columns="columns" :data="data" :headerAlign="align" />',
      setup() {
        const align = ref('center')
        return { columns, data: tableData, align }
      },
    })
    const vm = (wrapper.vm as unknown) as { align: string }

    expect(getHeaderClass(wrapper)).toContain('is-center')
    expect(getBodyClass(wrapper)).not.toContain('is-center')

    await (vm.align = 'right')
    expect(getHeaderClass(wrapper)).toContain('is-right')
    expect(getBodyClass(wrapper)).not.toContain('is-right')
  })

  test('slots', async () => {
    const wrapper = await _mount({
      template: `
        <pro-table
          :columns="columns"
          :data="data"
          :menu="menu"
        >
          <template #date-header>
            date-header
          </template>
          <template #date="{ row }">
            @date-{{ row.date }}
          </template>
          <template #menu="{ size }">
            @menu-{{ size }}
          </template>
        </pro-table>
      `,
      setup() {
        const _columns = [...columns]
        return { columns: _columns, data: tableData, menu: { label: 'Menu' } }
      },
    })

    expect(getHeaderList(wrapper)).toContain('date-header')
    expect(getBodyItem(wrapper)[0]).toMatch(/^@date-/)
    expect(getBodyItem(wrapper)[3]).toMatch(/^@menu-/)
  })

  test('multi header', async () => {
    const wrapper = await _mount({
      template: '<pro-table :columns="columns" />',
      setup() {
        const _columns = ref<ITableColumns>([
          {
            label: 'Date',
            prop: 'date',
          },
          {
            label: 'User',
            prop: 'user',
            children: [
              {
                label: 'Name',
                prop: 'name',
              },
              {
                label: 'Address',
                prop: 'address',
              },
            ],
          },
        ])
        return { columns: _columns }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: ITableColumns }

    expect(getMultiHeader(wrapper)).toHaveLength(2)

    await (vm.columns = columns)
    expect(getMultiHeader(wrapper)).toHaveLength(1)
  })
})
