import { describe, test, expect, afterEach, vi, afterAll } from 'vitest'
import { ComponentPublicInstance, ref } from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import { ElInput, ElSwitch, ElTableColumn, ElDrawer } from 'element-plus'
import ProCrud from './Crud'
import { doubleWait, tableData } from '../__mocks__/index'
import type { ICrudColumns, ICrudMenuColumns } from './index'

interface Form {
  date?: string
  name?: string
  address?: string
}

config.global.components = {
  ProCrud,
  ElTableColumn,
  ElInput,
  ElSwitch,
  ElDrawer,
}

const commonColumns: ICrudColumns<Form> = [
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
    add: true,
    edit: true,
    search: true,
    detail: true,
    hide: true,
    detailSpan: 2,
  },
  {
    label: 'Name',
    prop: 'name',
    component: 'el-input',
    add: true,
    edit: true,
    detail: true,
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'el-input',
    add: true,
  },
]

const addClass = '.pro-crud .pro-crud-menu button'
const searchClass =
  '.pro-crud .pro-crud-search .pro-form-menu .el-form-item__content button'
const menuClass =
  '.pro-crud .pro-crud-table .el-table__body-wrapper .el-table__body .el-table__row td:last-child .cell button'
const dialogClose = '.pro-crud .pro-crud-dialog .el-dialog__headerbtn'
const dialogBody = '.pro-crud .pro-crud-dialog .el-dialog__body'
const formClass =
  dialogBody + ' .pro-crud-form .pro-form-menu .el-form-item__content button'
const headerClass =
  '.pro-crud .pro-crud-table .el-table__header-wrapper .el-table__header thead tr'
const detailClass = dialogBody + ' .pro-crud-detail'
const detailCellClass =
  detailClass +
  ' .el-descriptions__body .el-descriptions__table tbody tr .el-descriptions__cell'
const getHeader = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(headerClass + ' th')
const bodyClass =
  '.pro-crud .pro-crud-table .el-table__body-wrapper .el-table__body tbody tr'
const appendClass =
  '.pro-crud .pro-crud-table .el-table__body-wrapper .el-table__append-wrapper .append'
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
const getDetailList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(detailCellClass)
const getDetailLabelList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getDetailList(wrapper).map((item) =>
    item.find('.el-descriptions__label').text()
  )
const getDetailValueList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getDetailList(wrapper).map((item) =>
    item.find('.el-descriptions__content').text()
  )

describe('Crud', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('columns', async () => {
    const wrapper = await mount({
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
    await doubleWait()

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

    await wrapper.find(menuClass + ':nth-child(2)').trigger('click')
    expect(getDetailList(wrapper)).toHaveLength(2)
    expect(getDetailLabelList(wrapper)).toContain('Date')
    expect(getDetailLabelList(wrapper)).toContain('Name')
    expect(getDetailLabelList(wrapper)).not.toContain('Address')
    await wrapper.find(dialogClose).trigger('click')

    await (wrapper.vm.columns[0] = {
      label: 'Date-label',
      prop: 'date',
      component: 'el-switch',
      add: false,
      edit: false,
      search: false,
      detail: false,
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

    await wrapper.find(menuClass + ':nth-child(2)').trigger('click')
    expect(getDetailList(wrapper)).toHaveLength(1)
    expect(getDetailLabelList(wrapper)).not.toContain('Date')
    expect(getDetailLabelList(wrapper)).toContain('Name')
    expect(getDetailLabelList(wrapper)).not.toContain('Address')
    await wrapper.find(dialogClose).trigger('click')

    await (wrapper.vm.columns[0].search = true)
    expect(getSearchList(wrapper)).toHaveLength(1)
    expect(getSearchLabelList(wrapper)).toContain('Date-label')
    expect(getSearchComponentList(wrapper)[0]).toContain('el-switch')
  })

  test.concurrent('menu', async () => {
    const wrapper = await mount({
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
          detailText: 'detail-text',
          delText: 'del-text',
          searchText: 'search-text',
          searchResetText: 'reset-text',
          submitText: 'submit-text',
          resetText: 'reset-text',
          editProps: { type: 'default', plain: true },
          detailProps: { type: 'success', plain: true },
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
    await doubleWait()

    expect(getHeaderList(wrapper)).toContain('Label')
    expect(wrapper.find(addClass).text()).toBe('add-text')
    expect(wrapper.find(searchClass).text()).toBe('search-text')
    expect(wrapper.find(searchClass + ':nth-child(2)').text()).toBe(
      'reset-text'
    )
    expect(wrapper.find(menuClass).text()).toBe('edit-text')
    expect(wrapper.find(menuClass + ':nth-child(2)').text()).toBe('detail-text')
    expect(wrapper.find(menuClass + ':last-child').text()).toBe('del-text')
    expect(wrapper.find(menuClass).classes()).toContain('is-plain')
    expect(wrapper.find(menuClass).classes()).toContain('el-button--default')
    expect(wrapper.find(menuClass + ':nth-child(2)').classes()).toContain(
      'el-button--success'
    )
    expect(wrapper.find(menuClass + ':last-child').classes()).toContain(
      'el-button--danger'
    )

    await (wrapper.vm.menu.addText = 'add')
    expect(wrapper.find(addClass).text()).toBe('add')

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find(formClass).text()).toBe('submit-text')
    expect(wrapper.find(formClass + ':nth-child(2)').text()).toBe('reset-text')
    await wrapper.find(dialogClose).trigger('click')
  })

  test.concurrent('menu click', async () => {
    const add = vi.fn()
    const edit = vi.fn()
    const detail = vi.fn()
    const del = vi.fn()
    const change = vi.fn()
    const wrapper = await mount({
      template: `
        <pro-crud
          :columns="columns"
          :data="data"
          :menu="menu"
          highlight-current-row
          @add="add"
          @edit="edit"
          @detail="detail"
          @delete="del"
          @current-change="change"
        />
      `,
      setup() {
        const menu = { label: 'Label' }

        return {
          columns: commonColumns,
          menu,
          data: tableData,
          add,
          edit,
          detail,
          del,
          change,
        }
      },
    })
    await doubleWait()

    await wrapper.find(addClass).trigger('click')
    expect(add).toHaveBeenCalledTimes(1)
    await wrapper.find(dialogClose).trigger('clcik')

    await wrapper.find(menuClass).trigger('click')
    expect(edit).toHaveBeenCalledTimes(1)
    expect(change).toHaveBeenCalledTimes(0)
    await wrapper.find(dialogClose).trigger('clcik')

    await wrapper.find(menuClass + ':nth-child(2)').trigger('click')
    expect(detail).toHaveBeenCalledTimes(1)
    expect(change).toHaveBeenCalledTimes(0)
    await wrapper.find(dialogClose).trigger('clcik')

    await wrapper.find(menuClass + ':nth-child(3)').trigger('click')
    expect(del).toHaveBeenCalledTimes(1)
    expect(change).toHaveBeenCalledTimes(0)
  })

  test.concurrent('modelValue', async () => {
    const wrapper = await mount({
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
    await doubleWait()

    const formInput =
      dialogBody + ' .pro-crud-form .pro-form-item .el-form-item__content input'

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find<HTMLInputElement>(formInput).element.value).toBe('date')

    await wrapper.find(formInput).setValue('value')
    expect(wrapper.vm.form.date).toBe('value')
    await wrapper.find(dialogClose).trigger('click')
  })

  test.concurrent('search', async () => {
    const wrapper = await mount({
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
    await doubleWait()

    const searchInput =
      '.pro-crud .pro-crud-search .pro-form-item .el-form-item__content input'

    expect(wrapper.find<HTMLInputElement>(searchInput).element.value).toBe(
      'date'
    )

    await wrapper.find(searchInput).setValue('value')
    expect(wrapper.vm.searchForm.date).toBe('value')
  })

  test.concurrent('detail', async () => {
    const wrapper = await mount({
      template: `
        <pro-crud
          :columns="columns"
          :data="data"
          :detail="detail"
          :menu="true"
          :append-to-body="false"
        />
      `,
      setup() {
        const detail = ref<Form>({})

        return { detail, columns: commonColumns, data: tableData }
      },
    })
    await doubleWait()

    await wrapper.find(menuClass + ':nth-child(2)').trigger('click')
    expect(getDetailList(wrapper)).toHaveLength(2)
    expect(getDetailLabelList(wrapper)).toContain('Date')
    expect(getDetailLabelList(wrapper)).toContain('Name')
    expect(getDetailValueList(wrapper)).not.toContain('2016-05-03')
    expect(getDetailValueList(wrapper)).not.toContain('Tom')
    expect(wrapper.find(detailCellClass).attributes('colspan')).toBe('2')
    expect(
      wrapper.find(detailCellClass + ':nth-child(2)').attributes('colspan')
    ).toBe('1')

    await (wrapper.vm.detail = tableData[0])
    expect(getDetailValueList(wrapper)).toContain('2016-05-03')
    expect(getDetailValueList(wrapper)).toContain('Tom')
    await wrapper.find(dialogClose).trigger('click')
  })

  test.concurrent('slots', async () => {
    const wrapper = await mount({
      template: `
        <pro-crud
          v-model="form"
          v-model:search="searchForm"
          :columns="columns"
          :data="data"
          :detail="data[0]"
          :menu="{ label: 'Label' }"
          :append-to-body="false"
          expand
        >
          <template #menu-left="{ size }">
            <button class="size">menu-left</button>
          </template>
          <template #menu-right="{ size }">
            <button class="size">menu-right</button>
          </template>
          <template #action="{ size }">
            <p class="action">action slot</p>
          </template>
          <template #menu="{ size }">
            <button class="size">@menu-</button>
          </template>
          <template #table-expand="{ row }">
            <p class="">@expand-{{ JSON.stringify(row) }}</p>
          </template>
          <template #table-append>
            <p class="append">append slot</p>
          </template>
          <template #table>
            <el-table-column
              prop="address"
              label="table"
            />
          </template>
          <template #table-slot="{ row }">
            @table-{{ row.slot }}
          </template>
          <template #table-slot-header>
            slot-header
          </template>
          <template #form>
            <p class="form">form slot</p>
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
          <template #form-slot-label>
            slot-label
          </template>
          <template #search>
            <p class="search">search slot</p>
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
          <template #dialog-top="{ type }">
            <p class="dialog-top">dialog-top-{{ type }}</p>
          </template>
          <template #dialog-bottom="{ type }">
            <p class="dialog-bottom">dialog-bottom-{{ type }}</p>
          </template>
          <template #detail-title>detail-title</template>
          <template #detail-extra>detail-extra</template>
          <template #detail-slot="{ item }">
            @detail-{{ item.slot }}
          </template>
          <template #detail-slot-label>
            detail-slot-label
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
            detail: true,
          },
        ]

        return { form, searchForm, columns, data: tableData }
      },
    })
    await doubleWait()

    expect(wrapper.find(searchClass).text()).toBe('search-menu-left')
    expect(wrapper.find(searchClass + ':nth-child(2)').text()).toBe('Search')
    expect(wrapper.find(searchClass + ':nth-child(3)').text()).toBe('Reset')
    expect(wrapper.find(searchClass + ':nth-child(4)').text()).toBe(
      'search-menu-right'
    )
    expect(getSearchList(wrapper)).toHaveLength(1)
    expect(getSearchLabelList(wrapper)).toContain('search-slot-label')
    expect(getSearchComponentList(wrapper)[0]).toContain('search-slot')
    expect(wrapper.find('.pro-crud .pro-crud-search .search').text()).toBe(
      'search slot'
    )

    expect(wrapper.find(addClass).text()).toBe('menu-left')
    expect(wrapper.find(addClass + ':nth-child(2)').text()).toBe('Add')
    expect(wrapper.find(addClass + ':nth-child(3)').text()).toBe('menu-right')
    expect(wrapper.find('.pro-crud .pro-crud-menu .action').text()).toBe(
      'action slot'
    )

    expect(getHeaderList(wrapper)).toHaveLength(4)
    expect(getHeaderList(wrapper)).toContain('slot-header')
    expect(getHeaderList(wrapper)).toContain('table')
    expect(getHeaderList(wrapper)).toContain('Label')
    expect(getBodyItem(wrapper)[1]).toMatch(/^@table-/)
    expect(getBodyItem(wrapper)[2]).toMatch(/^No/)
    expect(getBodyItem(wrapper)[3]).toMatch(/@menu-/)
    expect(wrapper.find(appendClass).text()).toBe('append slot')

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
    expect(wrapper.find(dialogBody + ' .pro-crud-form .form').text()).toBe(
      'form slot'
    )
    expect(wrapper.find(dialogBody + ' .dialog-top').text()).toBe(
      'dialog-top-add'
    )
    expect(wrapper.find(dialogBody + ' .dialog-bottom').text()).toBe(
      'dialog-bottom-add'
    )
    await wrapper.find(dialogClose).trigger('click')

    await wrapper.find(menuClass + ':nth-child(2)').trigger('click')
    expect(
      wrapper
        .find(detailClass + ' .el-descriptions__header .el-descriptions__title')
        .text()
    ).toBe('detail-title')
    expect(
      wrapper
        .find(detailClass + ' .el-descriptions__header .el-descriptions__extra')
        .text()
    ).toBe('detail-extra')
    expect(getDetailLabelList(wrapper)).toContain('detail-slot-label')
    expect(getDetailValueList(wrapper)[0]).toMatch(/^@detail-/)
    expect(wrapper.find(dialogBody + ' .dialog-top').text()).toBe(
      'dialog-top-detail'
    )
    expect(wrapper.find(dialogBody + ' .dialog-bottom').text()).toBe(
      'dialog-bottom-detail'
    )
    await wrapper.find(dialogClose).trigger('click')
  })

  test.concurrent('crud slots', async () => {
    const wrapper = await mount({
      template: `
        <pro-crud
          :columns="columns"
          :data="data"
          :detail="data[0]"
          :menu="{ label: 'Label' }"
          :append-to-body="false"
        >
          <template #crud-search>
            <p class="crud-search">crud-search slot</p>
          </template>
          <template #crud-table="{ createTableMenu }">
            <div
              v-for="item in data"
              :key="item.date"
            >
              <p class="crud-table">{{ item.name }}</p>
              <div class="crud-menu">
                <component :is="() => createTableMenu({ row: item })" />
              </div>
            </div>
          </template>
          <template #crud-form>
            <p class="crud-form">crud-form slot</p>
          </template>
          <template #crud-detail>
            <p class="crud-detail">crud-detail slot</p>
          </template>
        </pro-crud>
      `,
      setup() {
        const columns = [
          {
            label: 'Slot',
            prop: 'slot',
            component: 'el-switch',
            form: true,
            search: true,
            detail: true,
          },
        ]

        return { columns, data: tableData }
      },
    })
    await doubleWait()

    expect(wrapper.find('.pro-crud .crud-search').text()).toBe(
      'crud-search slot'
    )
    const btns = wrapper.findAll('.pro-crud .crud-menu .el-button')
    expect(btns).toHaveLength(3 * tableData.length)
    expect(btns[0].text()).toBe('Edit')
    expect(btns[1].text()).toBe('View')
    expect(btns[2].text()).toBe('Delete')
    expect(wrapper.find('.pro-crud .crud-table').text()).toBe('Tom')

    await btns[1].trigger('click')
    expect(wrapper.find('.pro-crud .crud-detail').text()).toBe(
      'crud-detail slot'
    )
    await wrapper.find(dialogClose).trigger('click')

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find('.pro-crud .crud-form').text()).toBe('crud-form slot')
  })

  test.concurrent('crud-dialog slots', async () => {
    const wrapper = await mount({
      template: `
        <pro-crud
          :columns="columns"
          :data="data"
          :detail="data[0]"
          :menu="{ label: 'Label' }"
          :append-to-body="false"
        >
          <template #crud-dialog="{ type, props, createDescriptions, createForm }">
            <el-drawer v-bind="props">
              <component :is="type === 'detail' ? createDescriptions() : createForm()" />
            </el-drawer>
          </template>
        </pro-crud>
      `,
      setup() {
        const columns = [
          {
            label: 'Slot',
            prop: 'slot',
            component: 'el-switch',
            form: true,
            search: true,
            detail: true,
          },
        ]

        return { columns, data: tableData }
      },
    })
    await doubleWait()

    const closeBtn = wrapper.find('.pro-crud .el-drawer__close-btn')

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find('.pro-crud .el-drawer').exists()).toBe(true)
    expect(wrapper.find('.pro-crud .el-drawer .el-form').exists()).toBe(true)
    await closeBtn.trigger('click')

    await wrapper.find(menuClass + ':nth-child(1)').trigger('click')
    expect(wrapper.find('.pro-crud .el-drawer').exists()).toBe(true)
    expect(wrapper.find('.pro-crud .el-form').exists()).toBe(true)
    await closeBtn.trigger('click')

    await wrapper.find(menuClass + ':nth-child(2)').trigger('click')
    expect(wrapper.find('.pro-crud .el-drawer').exists()).toBe(true)
    expect(wrapper.find('.pro-crud .el-descriptions').exists()).toBe(true)
    closeBtn.trigger('click')
  })

  test.concurrent('size', async () => {
    const wrapper = await mount({
      template: `
        <pro-crud
          :columns="columns"
          :data="data"
          :menu="menu"
          :size="size"
        />
      `,
      setup() {
        const size = ref('large')
        const menu = ref<ICrudMenuColumns>({
          label: 'Label',
          addProps: { size: 'small' },
          editProps: { size: 'small' },
          detailProps: { size: 'small' },
          delProps: { size: 'small' },
          searchProps: { size: 'small' },
        })

        return {
          size,
          columns: commonColumns,
          menu,
          data: tableData,
        }
      },
    })
    await doubleWait()

    expect(wrapper.find('.pro-crud .el-form').classes()).toContain(
      'el-form--large'
    )
    expect(
      wrapper.find('.pro-crud .pro-crud-table .el-table').classes()
    ).toContain('el-table--large')
    expect(wrapper.find(addClass).classes()).toContain('el-button--small')
    expect(wrapper.find(searchClass).classes()).toContain('el-button--small')
    expect(
      wrapper
        .find(
          '.pro-crud .pro-crud-table .el-table__body-wrapper .el-table__body .el-table__row td:last-child .cell button'
        )
        .classes()
    ).toContain('el-button--small')
    expect(wrapper.find(menuClass + ':nth-child(2)').classes()).toContain(
      'el-button--small'
    )
    expect(wrapper.find(menuClass + ':nth-child(3)').classes()).toContain(
      'el-button--small'
    )

    await (wrapper.vm.size = 'small')
    expect(wrapper.find('.pro-crud .el-form').classes()).not.toContain(
      'el-form--large'
    )
    expect(wrapper.find('.pro-crud .el-form').classes()).toContain(
      'el-form--small'
    )
    expect(
      wrapper.find('.pro-crud .pro-crud-table .el-table').classes()
    ).not.toContain('el-table--large')
    expect(
      wrapper.find('.pro-crud .pro-crud-table .el-table').classes()
    ).toContain('el-table--small')
    expect(wrapper.find(addClass).classes()).toContain('el-button--small')
    expect(wrapper.find(searchClass).classes()).toContain('el-button--small')
    expect(
      wrapper
        .find(
          '.pro-crud .pro-crud-table .el-table__body-wrapper .el-table__body .el-table__row td:last-child .cell button'
        )
        .classes()
    ).toContain('el-button--small')
    expect(wrapper.find(menuClass + ':nth-child(2)').classes()).toContain(
      'el-button--small'
    )
    expect(wrapper.find(menuClass + ':nth-child(3)').classes()).toContain(
      'el-button--small'
    )
  })

  test.concurrent('expose', async () => {
    const wrapper = await mount({
      template: `
        <pro-crud
          ref="crudRef"
          :columns="columns"
          :data="data"
        />
      `,
      setup() {
        const crudRef = ref()
        const columns = commonColumns

        return { crudRef, columns, data: tableData }
      },
    })
    await doubleWait()

    expect(wrapper.vm.crudRef).not.toBeUndefined()
    expect(wrapper.vm.crudRef).not.toBeNull()
    expect(wrapper.vm.crudRef.clearSelection).toBeTruthy()
    expect(wrapper.vm.crudRef.toggleRowSelection).toBeTruthy()
    expect(wrapper.vm.crudRef.toggleAllSelection).toBeTruthy()
    expect(wrapper.vm.crudRef.toggleRowExpansion).toBeTruthy()
    expect(wrapper.vm.crudRef.setCurrentRow).toBeTruthy()
    expect(wrapper.vm.crudRef.clearSort).toBeTruthy()
    expect(wrapper.vm.crudRef.clearFilter).toBeTruthy()
    expect(wrapper.vm.crudRef.doLayout).toBeTruthy()
    expect(wrapper.vm.crudRef.sort).toBeTruthy()
    expect(wrapper.vm.crudRef.validate).toBeTruthy()
    expect(wrapper.vm.crudRef.resetFields).toBeTruthy()
    expect(wrapper.vm.crudRef.scrollToField).toBeTruthy()
    expect(wrapper.vm.crudRef.clearValidate).toBeTruthy()
    expect(wrapper.vm.crudRef.validateField).toBeTruthy()
    expect(wrapper.vm.crudRef.openDialog).toBeTruthy()
    expect(wrapper.vm.crudRef.closeDialog).toBeTruthy()
  })
})

afterAll(() => {
  config.global.components = {}
})
