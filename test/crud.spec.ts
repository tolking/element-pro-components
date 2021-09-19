import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { ElInput, ElSwitch } from 'element-plus'
import ProCrud from '../src/Crud/Crud'
import { tableData } from './mock'
import type { ICrudColumns, ICrudMenuColumns } from '../src/types/index'

interface Form {
  date?: string
  name?: string
  address?: string
}

const commonColumns: ICrudColumns<Form> = [
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
    add: true,
    edit: true,
    search: true,
    hide: true,
  },
  {
    label: 'Name',
    prop: 'name',
    component: 'el-input',
    add: true,
    edit: true,
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'el-input',
    add: true,
  },
]
const _mount = (options: Record<string, unknown>) =>
  mount(
    {
      components: { ProCrud },
      ...options,
    },
    {
      global: {
        components: { ElInput, ElSwitch },
      },
    }
  )
const addClass = '.pro-crud .pro-crud-menu button'
const searchClass =
  '.pro-crud .pro-crud-search .el-form-item:last-child .el-form-item__content button'
const menuClass =
  '.pro-crud .pro-crud-table .el-table__body-wrapper .el-table__body .el-table__row td:last-child .cell button'
const formClass =
  '.pro-crud .pro-crud-dialog .pro-crud-form .el-form-item:last-child button'
const dialogClose =
  '.pro-crud .pro-crud-dialog .el-dialog__header .el-dialog__headerbtn'
const headerClass =
  '.pro-crud .pro-crud-table .el-table__header-wrapper .el-table__header thead tr'
const getHeader = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(headerClass + ' th')
const bodyClass =
  '.pro-crud .pro-crud-table .el-table__body-wrapper .el-table__body tbody tr'
const getHeaderList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getHeader(wrapper).map((item) => item.find('.cell').text())
const getBodyItem = (wrapper: VueWrapper<ComponentPublicInstance>, index = 1) =>
  wrapper
    .findAll(`${bodyClass}:nth-child(${index}) td`)
    .map((item) => item.find('.cell').text())
const getSearchList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll('.pro-crud .pro-crud-search .pro-form-item')
const getSearchLabelList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getSearchList(wrapper).map((item) => item.find('.el-form-item__label').text())
const getSearchComponentList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getSearchList(wrapper).map((item) =>
    item.find('.el-form-item__content div').classes()
  )
const getFormList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll('.pro-crud .pro-crud-dialog .pro-crud-form .pro-form-item')
const getLabelList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) => item.find('.el-form-item__label').text())
const getComponentList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) =>
    item.find('.el-form-item__content div').classes()
  )

describe('Crud.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('columns', async () => {
    const wrapper = await _mount({
      template: `
        <pro-crud
          v-model="form"
          v-model:search="searchForm"
          :columns="columns"
          :data="data"
          :menu="{ label: 'Label' }"
          :append-to-body="false"
        />
      `,
      setup() {
        const form = ref({})
        const searchForm = ref({})
        const columns = ref<ICrudColumns<Form>>([...commonColumns])

        return { form, searchForm, columns, data: tableData }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: ICrudColumns<Form> }

    expect(getHeaderList(wrapper)).toHaveLength(3)
    expect(getHeaderList(wrapper)).not.toContain('Date')
    expect(getHeaderList(wrapper)).toContain('Name')
    expect(getHeaderList(wrapper)).toContain('Address')
    expect(getHeaderList(wrapper)).toContain('Label')

    expect(getSearchList(wrapper)).toHaveLength(1)
    expect(getSearchLabelList(wrapper)).toContain('Date')
    expect(getSearchLabelList(wrapper)).not.toContain('Name')
    expect(getSearchLabelList(wrapper)).not.toContain('Address')
    expect(getSearchComponentList(wrapper)[0]).toContain('el-input')

    await wrapper.find(addClass).trigger('click')
    expect(getFormList(wrapper)).toHaveLength(3)
    expect(getLabelList(wrapper)).toContain('Date')
    expect(getLabelList(wrapper)).toContain('Name')
    expect(getLabelList(wrapper)).toContain('Address')
    expect(getComponentList(wrapper)[1]).toContain('el-input')
    await wrapper.find(dialogClose).trigger('click')

    await wrapper.find(menuClass).trigger('click')
    expect(getFormList(wrapper)).toHaveLength(2)
    expect(getLabelList(wrapper)).toContain('Date')
    expect(getLabelList(wrapper)).toContain('Name')
    expect(getLabelList(wrapper)).not.toContain('Address')
    expect(getComponentList(wrapper)[1]).toContain('el-input')
    await wrapper.find(dialogClose).trigger('click')

    await (vm.columns[0] = {
      label: 'Date-label',
      prop: 'date',
      component: 'el-switch',
      add: false,
      edit: false,
      search: false,
      hide: false,
    })
    expect(getHeaderList(wrapper)).toContain('Date-label')
    expect(getSearchList(wrapper)).toHaveLength(0)

    await wrapper.find(addClass).trigger('click')
    expect(getFormList(wrapper)).toHaveLength(2)
    expect(getLabelList(wrapper)).not.toContain('Date')
    expect(getLabelList(wrapper)).toContain('Name')
    expect(getLabelList(wrapper)).toContain('Address')
    await wrapper.find(dialogClose).trigger('click')

    await wrapper.find(menuClass).trigger('click')
    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getLabelList(wrapper)).not.toContain('Date')
    expect(getLabelList(wrapper)).toContain('Name')
    expect(getLabelList(wrapper)).not.toContain('Address')
    await wrapper.find(dialogClose).trigger('click')

    await (vm.columns[0].search = true)
    expect(getSearchList(wrapper)).toHaveLength(1)
    expect(getSearchLabelList(wrapper)).toContain('Date-label')
    expect(getSearchComponentList(wrapper)[0]).toContain('el-switch')
  })

  test('menu', async () => {
    const wrapper = await _mount({
      template: `
        <pro-crud
          v-model="form"
          v-model:search="searchForm"
          :columns="columns"
          :data="data"
          :menu="menu"
          :append-to-body="false"
        />
      `,
      setup() {
        const form = ref({})
        const searchForm = ref({})
        const menu = ref<ICrudMenuColumns>({
          label: 'Label',
          addText: 'add-text',
          editText: 'edit-text',
          delText: 'del-text',
          searchText: 'search-text',
          searchResetText: 'reset-text',
          submitText: 'submit-text',
          resetText: 'reset-text',
          editProps: { type: 'default', plain: true },
          delProps: { type: 'danger', plain: true },
        })

        return {
          form,
          searchForm,
          columns: commonColumns,
          menu,
          data: tableData,
        }
      },
    })
    const vm = (wrapper.vm as unknown) as { menu: ICrudMenuColumns }

    expect(getHeaderList(wrapper)).toContain('Label')
    expect(wrapper.find(addClass).text()).toBe('add-text')
    expect(wrapper.find(searchClass).text()).toBe('search-text')
    expect(wrapper.find(searchClass + ':nth-child(2)').text()).toBe(
      'reset-text'
    )
    expect(wrapper.find(menuClass).text()).toBe('edit-text')
    expect(wrapper.find(menuClass + ':last-child').text()).toBe('del-text')

    await (vm.menu.addText = 'add')
    expect(wrapper.find(addClass).text()).toBe('add')

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find(formClass).text()).toBe('submit-text')
    expect(wrapper.find(formClass + ':nth-child(2)').text()).toBe('reset-text')
    await wrapper.find(dialogClose).trigger('click')
  })

  test('modelValue', async () => {
    const wrapper = await _mount({
      template: `
        <pro-crud
          v-model="form"
          v-model:search="searchForm"
          :columns="columns"
          :data="data"
          :menu="true"
          :append-to-body="false"
        />
      `,
      setup() {
        const form = ref<Form>({ date: 'date' })
        const searchForm = ref<Form>({})

        return { form, searchForm, columns: commonColumns, data: tableData }
      },
    })
    const vm = (wrapper.vm as unknown) as { form: Form; searchForm: Form }
    const formInput =
      '.pro-crud .pro-crud-dialog .pro-crud-form .pro-form-item .el-form-item__content input'

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find(formInput).element.value).toBe('date')

    await wrapper.find(formInput).setValue('value')
    expect(vm.form.date).toBe('value')
    await wrapper.find(dialogClose).trigger('click')
  })

  test('search', async () => {
    const wrapper = await _mount({
      template: `
        <pro-crud
          v-model="form"
          v-model:search="searchForm"
          :columns="columns"
          :data="data"
          :menu="true"
          :append-to-body="false"
        />
      `,
      setup() {
        const form = ref<Form>({})
        const searchForm = ref<Form>({ date: 'date' })

        return { form, searchForm, columns: commonColumns, data: tableData }
      },
    })
    const vm = (wrapper.vm as unknown) as { form: Form; searchForm: Form }
    const searchInput =
      '.pro-crud .pro-crud-search .pro-form-item .el-form-item__content input'

    expect(wrapper.find(searchInput).element.value).toBe('date')

    await wrapper.find(searchInput).setValue('value')
    expect(vm.searchForm.date).toBe('value')
  })

  test('slots', async () => {
    const wrapper = await _mount({
      template: `
        <pro-crud
          v-model="form"
          v-model:search="searchForm"
          :columns="columns"
          :data="data"
          :menu="{ label: 'Label' }"
          :append-to-body="false"
        >
          <template #menu-left="{ size }">
            <button class="size">menu-left</button>
          </template>
          <template #menu-right="{ size }">
            <button class="size">menu-right</button>
          </template>
          <template #menu="{ size }">
            <button class="size">@menu-</button>
          </template>
          <template #table-slot="{ row }">
            @table-{{ row.slot }}
          </template>
          <template #slot-header>
            slot-header
          </template>
          <template #form-menu-left>
            <button>form-menu-left</button>
          </template>
          <template #form-menu-right>
            <button>form-menu-right</button>
          </template>
          <template #form-slot="{ value, setValue }">
            <el-input
              :model-value="value"
              class="form-slot"
              @input="e => setValue(e.taget.value)"
            />
          </template>
          <template #slot-label>
            slot-label
          </template>
          <template #search-menu-left>
            <button>search-menu-left</button>
          </template>
          <template #search-menu-right>
            <button>search-menu-right</button>
          </template>
          <template #search-slot="{ value, setValue }">
            <el-input
              :model-value="value"
              class="search-slot"
              @input="e => setValue(e.taget.value)"
            />
          </template>
          <template #search-slot-label>
            search-slot-label
          </template>
        </pro-crud>
      `,
      setup() {
        const form = ref({})
        const searchForm = ref({})
        const columns = [
          {
            label: 'Slot',
            prop: 'slot',
            component: 'el-switch',
            form: true,
            search: true,
          },
        ]

        return { form, searchForm, columns, data: tableData }
      },
    })

    expect(wrapper.find(searchClass).text()).toBe('search-menu-left')
    expect(wrapper.find(searchClass + ':nth-child(2)').text()).toBe('Search')
    expect(wrapper.find(searchClass + ':nth-child(3)').text()).toBe('Reset')
    expect(wrapper.find(searchClass + ':nth-child(4)').text()).toBe(
      'search-menu-right'
    )
    expect(getSearchList(wrapper)).toHaveLength(1)
    expect(getSearchLabelList(wrapper)).toContain('search-slot-label')
    expect(getSearchComponentList(wrapper)[0]).toContain('search-slot')

    expect(wrapper.find(addClass).text()).toBe('menu-left')
    expect(wrapper.find(addClass + ':nth-child(2)').text()).toBe('Add')
    expect(wrapper.find(addClass + ':nth-child(3)').text()).toBe('menu-right')

    expect(getHeaderList(wrapper)).toContain('slot-header')
    expect(getBodyItem(wrapper)[0]).toMatch(/^@table-/)
    expect(getBodyItem(wrapper)[1]).toMatch(/@menu-/)

    await wrapper.find(addClass + ':nth-child(2)').trigger('click')
    expect(wrapper.find(formClass).text()).toBe('form-menu-left')
    expect(wrapper.find(formClass + ':nth-child(2)').text()).toBe('Submit')
    expect(wrapper.find(formClass + ':nth-child(3)').text()).toBe('Reset')
    expect(wrapper.find(formClass + ':nth-child(4)').text()).toBe(
      'form-menu-right'
    )
    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getLabelList(wrapper)).toContain('slot-label')
    expect(getComponentList(wrapper)[0]).toContain('form-slot')
    await wrapper.find(dialogClose).trigger('click')
  })
})
