import { describe, test, expect, afterEach, beforeEach, afterAll } from 'vitest'
import {
  ComponentPublicInstance,
  ref,
  shallowRef,
  markRaw,
  computed,
  defineComponent,
  h,
} from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import { ElInput, ElSwitch } from 'element-plus'
import {
  formContentKey,
  ProArrayForm,
  ProGroupForm,
  ProTabsForm,
  ProCollapseForm,
  ProStepsForm,
  ProFormComponent,
  ProFormItem,
  ProFormList,
  ProForm,
  defineFormColumns,
} from './index'
import type { IFormColumns, IFormMenuColumns, FormColumn } from './index'
import type { ExternalParam, Mutable } from '../types/index'

const MyInput = defineComponent({
  name: 'MyInput',
  props: {
    start: {
      type: String,
      default: '',
    },
    end: {
      type: String,
      default: '',
    },
  },
  emits: ['update:start', 'update:end'],
  setup(props, { emit }) {
    return () =>
      h('div', [
        h('input', {
          class: 'my-input',
          value: props.start,
          onInput: (e: { target: { value: string } }) =>
            emit('update:start', e.target.value),
        }),
        h('input', {
          class: 'my-input-end',
          value: props.end,
          onInput: (e: { target: { value: string } }) =>
            emit('update:end', e.target.value),
        }),
      ])
  },
})

config.global.components = {
  ProArrayForm,
  ProGroupForm,
  ProTabsForm,
  ProCollapseForm,
  ProStepsForm,
  ProFormComponent,
  ProFormItem,
  ProFormList,
  ProForm,
  ElInput,
  ElSwitch,
  MyInput,
}

const columns: IFormColumns = [
  {
    label: 'input',
    prop: 'input',
    component: 'el-input',
  },
]
const groupColumns: IFormColumns = [
  {
    label: 'Group',
    type: 'group',
    children: columns,
  },
]
const tabsColumns: IFormColumns = [
  {
    label: 'Tab1',
    type: 'tabs',
    children: columns,
  },
  {
    label: 'Tab2',
    type: 'tabs',
    children: [
      {
        label: 'Other',
        prop: 'other',
        component: 'el-input',
      },
    ],
  },
]
const collapseColumns: IFormColumns = [
  {
    label: 'Collapse',
    type: 'collapse',
    children: columns,
  },
]
const stepsColumns: IFormColumns = [
  {
    label: 'Steps1',
    type: 'steps',
    children: columns,
  },
  {
    label: 'Steps2',
    type: 'steps',
    children: [
      {
        label: 'Other',
        prop: 'other',
        component: 'el-input',
      },
    ],
  },
]

const addClass = '.form-btn-add'
const deleteClass = '.form-btn-delete'
const arrayClass = '.pro-array-form'
const arrayContentClass = `${arrayClass} .form-content`
const groupTitle = '.pro-group-form-title'
const tabLabel = '.pro-tabs-form .el-tabs__item'
const stepsTitle = '.pro-steps-form'
const stepsMenu = '.pro-steps-form-menu'
const stepItem = '.pro-steps-form .el-step'
const stepHead = `${stepItem} .el-step__head`
const collapseLabel =
  '.pro-collapse-form .el-collapse-item .el-collapse-item__header'
const buttonClass =
  '.pro-form .el-form-item:last-child .el-form-item__content button'
const getFormList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll('.pro-form-item')
const getFormClassList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) => item.classes())
const getLabelList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) => item.find('.el-form-item__label').text())
const getComponentList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) =>
    item.find('.el-form-item__content div').classes(),
  )
const getFormBtnList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(buttonClass).map((item) => item.text())
const getFormContent = (
  wrapper: VueWrapper<ComponentPublicInstance>,
  className = '',
) =>
  wrapper.find('.pro-form .pro-form-item .el-form-item__content ' + className)

describe('ProFormComponent', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('input', async () => {
    const wrapper = await mount({
      template: '<pro-form-component v-model="form" is="input" />',
      setup() {
        const form = ref()
        return { form }
      },
    })

    expect(wrapper.find('input').exists()).toBe(true)

    await wrapper.find('input').setValue('value')
    expect(wrapper.find('input').element.value).toBe('value')
    expect(wrapper.vm.form).toBe('value')
  })

  test.concurrent('textarea', async () => {
    const wrapper = await mount({
      template: '<pro-form-component v-model="form" is="textarea" />',
      setup() {
        const form = ref()
        return { form }
      },
    })

    expect(wrapper.find('textarea').exists()).toBe(true)

    await wrapper.find('textarea').setValue('value')
    expect(wrapper.find('textarea').element.value).toBe('value')
    expect(wrapper.vm.form).toBe('value')
  })

  test.concurrent('radio', async () => {
    const wrapper = await mount({
      template: '<pro-form-component v-model="form" is="input" type="radio" />',
      setup() {
        const form = ref()
        return { form }
      },
    })

    expect(wrapper.find('input').exists()).toBe(true)

    await wrapper.find('input').setValue(true)
    expect(wrapper.vm.form).toBe(true)
  })

  test.concurrent('el-input', async () => {
    const wrapper = await mount({
      template: '<pro-form-component v-model="form" is="el-input" />',
      setup() {
        const form = ref()
        return { form }
      },
    })

    expect(wrapper.find('.el-input').exists()).toBe(true)

    await wrapper.find('input').setValue('value')
    expect(wrapper.find('input').element.value).toBe('value')
    expect(wrapper.vm.form).toBe('value')
  })

  test.concurrent('slots', async () => {
    const wrapper = await mount({
      template: '<pro-form-component is="div" :slots="slots" />',
      setup() {
        const slots = ref({
          default: 'slots',
        })
        return { slots }
      },
    })

    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('div').text()).toBe('slots')
  })

  test.concurrent('binding multiple arguments', async () => {
    const wrapper = await mount({
      template:
        '<pro-form-component v-model:start="form.start" v-model:end="form.end" is="my-input" />',
      setup() {
        const form = ref({})
        return { form }
      },
    })

    expect(wrapper.find('.my-input').exists()).toBe(true)
    expect(wrapper.find('.my-input-end').exists()).toBe(true)

    await wrapper.find('.my-input').setValue('start')
    expect(wrapper.find('input').element.value).toBe('start')
    expect(wrapper.vm.form).toEqual({ start: 'start' })

    await wrapper.find('.my-input-end').setValue('end')
    expect(wrapper.vm.form).toEqual({ start: 'start', end: 'end' })
  })

  test.concurrent('expose', async () => {
    const wrapper = await mount({
      template:
        '<pro-form-component :_ref="(el) => inputRef = el" v-model="form" is="el-input" />',
      setup() {
        const form = ref()
        const inputRef = ref()
        return { form, inputRef }
      },
    })

    expect(wrapper.find('.el-input').exists()).toBe(true)
    expect(Object.keys(wrapper.vm.inputRef)).not.toHaveLength(0)
    expect(wrapper.vm.inputRef).toHaveProperty('focus')
    expect(wrapper.vm.inputRef).toHaveProperty('blur')
  })
})

describe('ProFormItem', () => {
  beforeEach(() => {
    config.global.provide = {
      [formContentKey as symbol]: {
        props: {
          inline: false,
        },
        slots: {
          'form-slot-label': () => 'slot-label',
          'form-slot': () => 'slot-default',
        },
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  test.concurrent('column', async () => {
    const wrapper = await mount({
      template: '<pro-form-item v-model="form" :item="columns[0]" />',
      setup() {
        const form = ref()
        return { form, columns }
      },
    })

    expect(wrapper.find('.el-input').exists()).toBe(true)
    expect(wrapper.find('.el-form-item__label').text()).toBe('input')

    await wrapper.find('input').setValue('value')
    expect(wrapper.find('input').element.value).toBe('value')
    expect(wrapper.vm.form).toEqual({ input: 'value' })
  })

  test.concurrent('slots', async () => {
    // The slot of the FormItem is injected through the top Form
    const wrapper = await mount({
      template: `
      <pro-form-item
        v-model="form"
        :item="columns[0]"
      />
      `,
      setup() {
        const form = ref()
        const columns = [
          {
            prop: 'slot',
          },
        ]
        return { form, columns }
      },
    })

    expect(wrapper.find('.el-form-item__content').text()).toBe('slot-default')
    expect(wrapper.find('.el-form-item__label').text()).toBe('slot-label')
  })

  test.concurrent('show', async () => {
    const wrapper = await mount({
      template: '<pro-form-item v-model="form" :item="columns[0]" />',
      setup() {
        const form = ref()
        const columns = ref([
          {
            label: 'input',
            prop: 'input',
            component: 'el-input',
            show: true,
          },
        ])
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.find('.el-input').exists()).toBe(true)
    expect(wrapper.find('.el-form-item__label').text()).toBe('input')

    await (vm.columns[0].show = false)
    expect(wrapper.find('.el-input').exists()).toBe(false)
  })

  test.concurrent('models', async () => {
    const wrapper = await mount({
      template: '<pro-form-item v-model="form" :item="columns[0]" />',
      setup() {
        const form = ref({})
        const columns = ref(
          defineFormColumns([
            {
              label: 'input',
              prop: 'input',
              component: 'my-input',
              models: [
                { prop: 'start', key: 'start' },
                { prop: 'end', key: 'end' },
              ],
            },
          ]),
        )
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.find('.my-input').exists()).toBe(true)
    expect(wrapper.find('.my-input-end').exists()).toBe(true)
    expect(wrapper.find('.el-form-item__label').text()).toBe('input')

    await wrapper.find('.my-input').setValue('start')
    expect(wrapper.find('input').element.value).toBe('start')
    expect(wrapper.vm.form).toEqual({ start: 'start' })

    await wrapper.find('.my-input-end').setValue('end')
    expect(wrapper.vm.form).toMatchObject({ end: 'end' })

    await (vm.columns[0].models = undefined)
    await wrapper.find('.my-input').setValue('modelValue')
    expect(wrapper.find('input').element.value).toBe('modelValue')
    expect(wrapper.vm.form).not.toMatchObject({ input: 'modelValue' })
  })

  test.concurrent('expose', async () => {
    const wrapper = await mount({
      template: '<pro-form-item v-model="form" :item="column" />',
      setup() {
        const form = ref()
        const formItemRef = ref()
        const inputRef = ref()
        const column = {
          ...columns[0],
          ref: formItemRef,
          props: { ref: inputRef },
        }
        return { form, formItemRef, inputRef, column }
      },
    })

    expect(wrapper.find('.el-input').exists()).toBe(true)
    expect(Object.keys(wrapper.vm.inputRef)).not.toHaveLength(0)
    expect(wrapper.vm.inputRef).toHaveProperty('focus')
    expect(wrapper.vm.inputRef).toHaveProperty('blur')

    expect(Object.keys(wrapper.vm.formItemRef)).not.toHaveLength(0)
    expect(wrapper.vm.formItemRef).toHaveProperty('validate')
    expect(wrapper.vm.formItemRef).toHaveProperty('resetField')
    expect(wrapper.vm.formItemRef).toHaveProperty('clearValidate')
    expect(wrapper.vm.formItemRef).toHaveProperty('validateState')
  })
})

describe('ProFormList', () => {
  beforeEach(() => {
    config.global.provide = {
      [formContentKey as symbol]: undefined,
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  test.concurrent('columns', async () => {
    const wrapper = await mount({
      template: '<pro-form-list v-model="form" :columns="columns" />',
      setup() {
        const form = ref()
        const columns = ref(
          defineFormColumns<string>([
            {
              label: '0',
              prop: 'key0',
              component: 'el-input',
            },
            {
              label: '1',
              prop: 'key1',
              component: 'el-input',
            },
            {
              label: '2',
              prop: 'key2',
              component: 'el-input',
            },
            {
              label: '3',
              prop: 'key3',
              component: 'el-input',
            },
            {
              label: '4',
              prop: 'key4',
              component: 'el-input',
            },
            {
              label: '5',
              prop: 'key5',
              component: 'el-input',
            },
          ]),
        )
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    const labels = getLabelList(wrapper)
    expect(labels.length).toBe(6)
    labels.forEach((item, index) => {
      expect(item).toBe(String(index))
    })

    await vm.columns.push({
      label: 'new one',
      prop: 'now',
      component: 'el-input',
    })
    const newlabels = getLabelList(wrapper)
    expect(newlabels.length).toBe(7)
    expect(newlabels[6]).toBe('new one')

    await (vm.columns[0].show = false)
    const showlabels = getLabelList(wrapper)
    expect(showlabels.length).toBe(6)
    expect(showlabels[0]).toBe('1')
  })

  test.concurrent('type=array', async () => {
    config.global.provide = {
      [formContentKey as symbol]: undefined,
    }

    const wrapper = await mount({
      template:
        '<pro-form-list v-model="form" :columns="columns" type="array" />',
      setup() {
        const form = ref()
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: { input: string }[]
      columns: IFormColumns
    }

    expect(wrapper.find(arrayClass).exists()).toBe(false)
    expect(wrapper.find(addClass).exists()).toBe(true)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(1)
    expect(wrapper.find(arrayClass).exists()).toBe(true)
    expect(wrapper.findAll(`${arrayContentClass} .pro-form-item`)).toHaveLength(
      1,
    )
    expect(
      wrapper
        .find(`${arrayContentClass} .pro-form-item .el-form-item__content div`)
        .classes(),
    ).toContain('el-input')

    await wrapper.find('input').setValue('value')
    expect(vm.form[0].input).toBe('value')

    config.global.provide = {}
  })

  test.concurrent('type=group', async () => {
    const wrapper = await mount({
      template: '<pro-form-list :columns="columns" />',
      setup() {
        const _columns = ref(
          defineFormColumns<string>([
            {
              label: 'group-1',
              type: 'group',
              children: columns,
            },
            {
              label: 'input-1',
              prop: 'key1',
              component: 'el-input',
              class: 'input-1',
            },
            {
              label: 'input-2',
              prop: 'key2',
              component: 'el-input',
              class: 'input-2',
            },
            {
              label: 'group-2',
              type: 'group',
              children: columns,
            },
            {
              label: 'group-3',
              type: 'group',
              children: columns,
            },
          ]),
        )
        return { columns: _columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    const getItem = (n: number) => wrapper.find(`.el-col-24:nth-child(${n})`)
    const list = wrapper.findAll('.el-col-24').map((item) => item.classes())

    expect(list).toHaveLength(8)
    expect(list[0]).toContain('pro-group-form-title')
    expect(getItem(1).text()).toBe('group-1')
    expect(list[2]).toContain('input-1')
    expect(list[3]).toContain('input-2')
    expect(list[4]).toContain('pro-group-form-title')
    expect(getItem(5).text()).toBe('group-2')
    expect(list[6]).toContain('pro-group-form-title')
    expect(getItem(7).text()).toBe('group-3')

    await vm.columns.push({
      label: 'new one',
      type: 'group',
      children: columns,
    })
    expect(getItem(9).classes()).toContain('pro-group-form-title')
    expect(getItem(9).text()).toBe('new one')
  })

  test.concurrent('type=tabs', async () => {
    const wrapper = await mount({
      template: '<pro-form-list :columns="columns" />',
      setup() {
        const _columns = ref(
          defineFormColumns<string>([
            {
              label: 'input-1',
              prop: 'key1',
              component: 'el-input',
              class: 'input-1',
            },
            {
              label: 'tabs-1',
              type: 'tabs',
              children: columns,
            },
            {
              label: 'tabs-2',
              type: 'tabs',
              children: columns,
            },
          ]),
        )
        return { columns: _columns }
      },
    })

    const list = wrapper.findAll('.el-col-24').map((item) => item.classes())
    expect(list).toHaveLength(4)
    expect(list[0]).toContain('input-1')
    expect(list[1]).toContain('pro-tabs-form')
    expect(list[2]).not.toContain('pro-tabs-form')
  })

  test.concurrent('type=collapse', async () => {
    const wrapper = await mount({
      template: '<pro-form-list :columns="columns" />',
      setup() {
        const _columns = ref(
          defineFormColumns<string>([
            {
              label: 'collapse-1',
              type: 'collapse',
              children: columns,
            },
            {
              label: 'collapse-2',
              type: 'collapse',
              children: columns,
            },
            {
              label: 'input-1',
              prop: 'key1',
              component: 'el-input',
              class: 'input-1',
            },
          ]),
        )
        return { columns: _columns }
      },
    })

    const list = wrapper.findAll('.el-col-24').map((item) => item.classes())
    expect(list).toHaveLength(4)
    expect(list[0]).toContain('pro-collapse-form')
    expect(list[1]).not.toContain('pro-collapse-form')
    expect(list[1]).toContain('input-1')
  })

  test.concurrent('type=steps', async () => {
    const wrapper = await mount({
      template: '<pro-form-list :columns="columns" />',
      setup() {
        const _columns = ref(
          defineFormColumns<string>([
            {
              label: 'steps-1',
              type: 'steps',
              children: columns,
            },
            {
              label: 'steps-2',
              type: 'steps',
              children: columns,
            },
          ]),
        )
        return { columns: _columns }
      },
    })

    const list = wrapper.findAll('.el-col-24').map((item) => item.classes())
    expect(list).toHaveLength(2)
    expect(list[0]).toContain('pro-steps-form')
    expect(list[1]).not.toContain('pro-steps-form')
    expect(list[1]).toContain('el-form-item')
  })

  test.concurrent('multiple types', async () => {
    const wrapper = await mount({
      template: '<pro-form-list :columns="columns" />',
      setup() {
        const _columns = ref(
          defineFormColumns<string>([
            {
              label: 'group',
              type: 'group',
              children: columns,
            },
            {
              label: 'steps-1',
              type: 'steps',
              children: columns,
            },
            {
              label: 'steps-2',
              type: 'steps',
              children: columns,
            },
            {
              label: 'collapse',
              type: 'collapse',
              children: columns,
            },
            {
              label: 'tabs-1',
              type: 'tabs',
              children: columns,
            },
            {
              label: 'tabs-2',
              type: 'tabs',
              children: columns,
            },
          ]),
        )
        return { columns: _columns }
      },
    })

    const list = wrapper.findAll('.el-col-24').map((item) => item.classes())

    expect(list).toHaveLength(9)
    expect(wrapper.findAll(stepItem).length).toBe(2)
    expect(list[0]).toContain('pro-group-form-title')
    expect(list[1]).toContain('el-form-item')
    expect(list[2]).toContain('pro-steps-form')
    expect(list[3]).toContain('el-form-item')
    expect(list[4]).toContain('pro-collapse-form')
    expect(list[5]).toContain('pro-tabs-form')
    expect(list[6]).toContain('el-form-item')
    expect(list[7]).toContain('el-form-item')
    expect(list[8]).toContain('el-form-item')
  })
})

describe('ArrayForm', () => {
  beforeEach(() => {
    config.global.provide = {
      [formContentKey as symbol]: undefined,
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-array-form />',
    })

    expect(wrapper.find(addClass).exists()).toBe(true)
    expect(wrapper.find(arrayClass).exists()).toBe(false)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.find(arrayClass).exists()).toBe(false)
  })

  test.concurrent('columns', async () => {
    const wrapper = mount({
      template: `
        <pro-array-form
          v-model="form"
          :columns="columns"
        />
      `,
      setup() {
        const form = ref()
        return { form, columns: ref([...columns]) }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.find(arrayClass).exists()).toBe(false)
    expect(wrapper.find(addClass).exists()).toBe(true)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(1)
    expect(wrapper.find(arrayClass).exists()).toBe(true)
    expect(wrapper.findAll(`${arrayContentClass} .pro-form-item`)).toHaveLength(
      1,
    )
    expect(
      wrapper
        .find(`${arrayContentClass} .pro-form-item .el-form-item__content div`)
        .classes(),
    ).toContain('el-input')

    await vm.columns.push({
      label: 'textarea',
      prop: 'textarea',
      component: 'el-input',
      props: { type: 'textarea' },
    })
    expect(wrapper.findAll(`${arrayContentClass} .pro-form-item`)).toHaveLength(
      2,
    )
    expect(
      wrapper
        .find(
          `${arrayContentClass} .pro-form-item:nth-child(2) .el-form-item__content div`,
        )
        .classes(),
    ).toContain('el-textarea')

    await wrapper.find(deleteClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(0)
    expect(wrapper.find(arrayClass).exists()).toBe(false)
  })

  test.concurrent('modelValue', async () => {
    const wrapper = mount({
      template: `
        <pro-array-form
          v-model="form"
          :columns="columns"
        />
      `,
      setup() {
        const form = ref([{ input: 'test' }])
        return { form, columns: ref([...columns]) }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: Array<{ input: string }>
      columns: IFormColumns
    }

    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find('input').setValue('value')
    expect(vm.form[0].input).toBe('value')
  })

  test.concurrent('max', async () => {
    const wrapper = mount({
      template: `
        <pro-array-form
          v-model="form"
          :columns="columns"
          :max="1"
        />
      `,
      setup() {
        const form = ref([{ input: 'test' }])
        return { form, columns: ref([...columns]) }
      },
    })

    expect(wrapper.find(addClass).exists()).toBe(false)
    expect(wrapper.find(arrayClass).exists()).toBe(true)
    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find(deleteClass).trigger('click')
    expect(wrapper.find(addClass).exists()).toBe(true)
    expect(wrapper.find(arrayClass).exists()).toBe(false)
    expect(wrapper.vm.form).toHaveLength(0)
  })

  test.concurrent('show', async () => {
    const wrapper = mount({
      template: `
        <pro-array-form
          v-model="form"
          :columns="columns"
          :max="1"
        />
      `,
      setup() {
        const form = ref([{ input: 'test' }])
        const _columns = ref(
          defineFormColumns([
            {
              label: 'input',
              prop: 'input',
              component: 'el-input',
            },
          ]),
        )
        return { form, columns: _columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.findAll(`${arrayContentClass} .pro-form-item`)).toHaveLength(
      1,
    )

    await (vm.columns[0].show = false)
    expect(wrapper.findAll(`${arrayContentClass} .pro-form-item`)).toHaveLength(
      0,
    )
  })
})

describe('ProGroupForm', () => {
  beforeEach(() => {
    config.global.provide = {
      [formContentKey as symbol]: {
        props: {
          inline: false,
        },
        slots: {
          'form-slot-label': () => 'slot-label',
        },
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-group-form />',
    })

    expect(wrapper.find(groupTitle).exists()).toBe(false)
  })

  test.concurrent('columns', async () => {
    const wrapper = mount({
      template: '<pro-group-form :columns="columns" />',
      setup() {
        return { columns: groupColumns }
      },
    })

    expect(wrapper.find(groupTitle).exists()).toBe(true)
    expect(wrapper.find(groupTitle).text()).toBe('Group')
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(1)
    expect(labels[0]).toBe('input')
    const components = getComponentList(wrapper)
    expect(components).toHaveLength(1)
    expect(components[0]).toContain('el-input')
  })

  test.concurrent('modelValue', async () => {
    const wrapper = mount({
      template: '<pro-group-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({ input: 'test' })
        return { form, columns: groupColumns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: { input: string }
      columns: IFormColumns
    }

    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find('input').setValue('value')
    expect(vm.form.input).toBe('value')
  })

  test.concurrent('slots', async () => {
    // The slot of the GroupForm is injected through the top Form
    const wrapper = await mount({
      template: '<pro-group-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref()
        const _columns: IFormColumns = [
          {
            prop: 'slot',
            type: 'group',
            children: columns,
          },
        ]
        return { form, columns: _columns }
      },
    })

    expect(wrapper.find(groupTitle).text()).toBe('slot-label')
  })

  test.concurrent('show', async () => {
    const wrapper = mount({
      template: '<pro-group-form :columns="columns" />',
      setup() {
        const columns = ref([...groupColumns])
        return { columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.find(groupTitle).exists()).toBe(true)
    expect(wrapper.find(groupTitle).text()).toBe('Group')
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(1)
    expect(labels[0]).toBe('input')
    const components = getComponentList(wrapper)
    expect(components).toHaveLength(1)
    expect(components[0]).toContain('el-input')

    await (vm.columns[0].show = false)
    expect(wrapper.find(groupTitle).exists()).toBe(false)
    const newlabels = getLabelList(wrapper)
    expect(newlabels).toHaveLength(0)
  })
})

describe('ProTabsForm', () => {
  beforeEach(() => {
    config.global.provide = {
      [formContentKey as symbol]: {
        props: {
          inline: false,
        },
        slots: {
          'form-slot-label': () => 'slot-label',
        },
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-tabs-form />',
    })

    expect(wrapper.find('.pro-tabs-form').exists()).toBe(true)
    expect(wrapper.find(tabLabel).exists()).toBe(false)
  })

  test.concurrent('columns', async () => {
    const wrapper = await mount({
      template: '<pro-tabs-form :columns="columns" />',
      setup() {
        return { columns: tabsColumns }
      },
    })

    expect(wrapper.find('.pro-tabs-form').exists()).toBe(true)
    expect(wrapper.find(tabLabel).exists()).toBe(true)
    expect(wrapper.find(tabLabel).text()).toBe('Tab1')
    expect(wrapper.find(tabLabel + ':last-child').text()).toBe('Tab2')
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(2)
    expect(labels[0]).toBe('input')
    expect(labels[1]).toBe('Other')
    const components = getComponentList(wrapper)
    expect(components).toHaveLength(2)
    expect(components[0]).toContain('el-input')
    expect(components[1]).toContain('el-input')
  })

  test.concurrent('modelValue', async () => {
    const wrapper = mount({
      template: '<pro-tabs-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({ input: 'test' })
        return { form, columns: tabsColumns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: { input: string }
      columns: IFormColumns
    }

    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find('input').setValue('value')
    expect(vm.form.input).toBe('value')
  })

  test.concurrent('slots', async () => {
    // The slot of the GroupForm is injected through the top Form
    const wrapper = await mount({
      template: '<pro-tabs-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref()
        const _columns: IFormColumns = [
          {
            prop: 'slot',
            type: 'tabs',
            children: columns,
          },
        ]
        return { form, columns: _columns }
      },
    })

    expect(wrapper.find(tabLabel).text()).toBe('slot-label')
  })

  test.concurrent('show', async () => {
    const wrapper = await mount({
      template: '<pro-tabs-form :columns="columns" />',
      setup() {
        const columns = ref([...tabsColumns])

        return { columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.find('.pro-tabs-form').exists()).toBe(true)
    expect(wrapper.find(tabLabel).exists()).toBe(true)
    expect(wrapper.find(tabLabel).text()).toBe('Tab1')
    expect(wrapper.find(tabLabel + ':last-child').text()).toBe('Tab2')
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(2)
    expect(labels[0]).toBe('input')
    expect(labels[1]).toBe('Other')
    const components = getComponentList(wrapper)
    expect(components).toHaveLength(2)
    expect(components[0]).toContain('el-input')
    expect(components[1]).toContain('el-input')

    await (vm.columns[0].show = false)
    expect(wrapper.find(tabLabel).exists()).toBe(true)
    expect(wrapper.find(tabLabel).text()).toBe('Tab2')
    const newlabels = getLabelList(wrapper)
    expect(newlabels).toHaveLength(1)
    expect(newlabels[0]).toBe('Other')
  })
})

describe('ProCollapseForm', () => {
  beforeEach(() => {
    config.global.provide = {
      [formContentKey as symbol]: {
        props: {
          inline: false,
        },
        slots: {
          'form-slot-label': () => 'slot-label',
        },
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-collapse-form />',
    })

    expect(wrapper.find('.pro-collapse-form').exists()).toBe(true)
    expect(wrapper.find(collapseLabel).exists()).toBe(false)
  })

  test.concurrent('columns', async () => {
    const wrapper = await mount({
      template: '<pro-collapse-form :columns="columns" />',
      setup() {
        return { columns: collapseColumns }
      },
    })

    expect(wrapper.find('.pro-collapse-form').exists()).toBe(true)
    expect(wrapper.find(collapseLabel).exists()).toBe(true)
    expect(wrapper.find(collapseLabel).text()).toBe('Collapse')
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(1)
    expect(labels[0]).toBe('input')
    const components = getComponentList(wrapper)
    expect(components).toHaveLength(1)
    expect(components[0]).toContain('el-input')
  })

  test.concurrent('modelValue', async () => {
    const wrapper = mount({
      template: '<pro-collapse-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({ input: 'test' })
        return { form, columns: collapseColumns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: { input: string }
      columns: IFormColumns
    }

    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find('input').setValue('value')
    expect(vm.form.input).toBe('value')
  })

  test.concurrent('slots', async () => {
    // The slot of the GroupForm is injected through the top Form
    const wrapper = await mount({
      template: '<pro-collapse-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref()
        const _columns: IFormColumns = [
          {
            prop: 'slot',
            type: 'collapse',
            children: columns,
          },
        ]
        return { form, columns: _columns }
      },
    })

    expect(wrapper.find(collapseLabel).text()).toBe('slot-label')
  })

  test.concurrent('show', async () => {
    const wrapper = await mount({
      template: '<pro-collapse-form :columns="columns" />',
      setup() {
        const columns = ref([...collapseColumns])
        return { columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.find('.pro-collapse-form').exists()).toBe(true)
    expect(wrapper.find(collapseLabel).exists()).toBe(true)
    expect(wrapper.find(collapseLabel).text()).toBe('Collapse')
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(1)
    expect(labels[0]).toBe('input')
    const components = getComponentList(wrapper)
    expect(components).toHaveLength(1)
    expect(components[0]).toContain('el-input')

    await (vm.columns[0].show = false)
    expect(wrapper.find(collapseLabel).exists()).toBe(false)
    const newlabels = getLabelList(wrapper)
    expect(newlabels).toHaveLength(0)
  })
})

describe('ProStepsForm', () => {
  beforeEach(() => {
    config.global.provide = {
      [formContentKey as symbol]: {
        props: {
          inline: false,
        },
        disabled: { value: false },
        formRef: {
          value: {
            validateField(_: unknown, cb: (isValid: boolean) => void) {
              cb(true)
            },
          },
        },
        stepChange() {
          return null
        },
        slots: {
          'form-slot-label': () => 'slot-label',
        },
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  test.concurrent('empt', async () => {
    const wrapper = mount({
      template: '<pro-steps-form />',
    })

    expect(wrapper.find(stepsTitle).exists()).toBe(false)
    expect(wrapper.find(stepsMenu).exists()).toBe(false)
  })

  test.concurrent('columns', async () => {
    const wrapper = mount({
      template: '<pro-steps-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref()
        return { form, columns: stepsColumns }
      },
    })

    expect(wrapper.find(stepsTitle).exists()).toBe(true)
    expect(wrapper.find(stepsMenu).exists()).toBe(true)
    expect(wrapper.findAll(stepItem).length).toBe(2)
    expect(wrapper.find(`${stepItem} .el-step__title`).text()).toBe('Steps1')
    expect(wrapper.find(`${stepItem}:last-child .el-step__title`).text()).toBe(
      'Steps2',
    )
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(1)
    expect(labels[0]).toBe('input')
    const components = getComponentList(wrapper)
    expect(components).toHaveLength(1)
    expect(components[0]).toContain('el-input')
    expect(wrapper.find(`${stepsMenu} .el-button`).classes()).toContain(
      'is-disabled',
    )
    expect(
      wrapper.find(`${stepsMenu} .el-button:nth-child(2)`).classes(),
    ).not.toContain('is-disabled')
    expect(wrapper.find(stepHead).classes()).not.toContain('is-finish')

    await wrapper.find(`${stepsMenu} .el-button:nth-child(2)`).trigger('click')
    const newLabels = getLabelList(wrapper)
    expect(newLabels).toHaveLength(1)
    expect(newLabels[0]).toBe('Other')
    expect(wrapper.find(stepHead).classes()).not.toContain('is-process')
    expect(wrapper.find(stepHead).classes()).toContain('is-finish')
  })

  test.concurrent('modelValue', async () => {
    const wrapper = mount({
      template: '<pro-steps-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({ input: 'test' })
        return { form, columns: stepsColumns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: { input: string }
      columns: IFormColumns
    }

    expect(wrapper.find('input').element.value).toBe('test')

    await wrapper.find('input').setValue('value')
    expect(vm.form.input).toBe('value')
  })

  test.concurrent('slots', async () => {
    // The slot of the GroupForm is injected through the top Form
    const wrapper = await mount({
      template: '<pro-steps-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref()
        const _columns: IFormColumns = [
          {
            prop: 'slot',
            type: 'steps',
            children: columns,
          },
        ]
        return { form, columns: _columns }
      },
    })

    expect(wrapper.find(`${stepItem} .el-step__title`).text()).toBe(
      'slot-label',
    )
  })

  test.concurrent('show', async () => {
    const wrapper = mount({
      template: '<pro-steps-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref()
        const columns = ref(JSON.parse(JSON.stringify(stepsColumns)))
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(wrapper.find(stepsTitle).exists()).toBe(true)
    expect(wrapper.find(stepsMenu).exists()).toBe(true)
    expect(wrapper.findAll(stepItem).length).toBe(2)
    expect(wrapper.find(`${stepItem} .el-step__title`).text()).toBe('Steps1')
    expect(wrapper.find(`${stepItem}:last-child .el-step__title`).text()).toBe(
      'Steps2',
    )
    const labels = getLabelList(wrapper)
    expect(labels).toHaveLength(1)

    await (vm.columns[0].show = false)
    expect(wrapper.find(stepsTitle).exists()).toBe(true)
    expect(wrapper.find(stepsMenu).exists()).toBe(true)
    expect(wrapper.findAll(stepItem).length).toBe(1)
    expect(wrapper.find(`${stepItem} .el-step__title`).text()).toBe('Steps2')
    const newLabels = getLabelList(wrapper)
    expect(newLabels).toHaveLength(0)
  })
})

describe('Form', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('columns', async () => {
    const wrapper = await mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({})
        return { form, columns: ref([...columns]) }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getLabelList(wrapper)).toContain('input')
    expect(getComponentList(wrapper)[0]).toContain('el-input')

    await vm.columns.push({
      label: 'textarea',
      prop: 'textarea',
      component: 'el-input',
      props: { type: 'textarea' },
    })
    expect(getFormList(wrapper)).toHaveLength(2)
    expect(getLabelList(wrapper)).toContain('input')
    expect(getLabelList(wrapper)).toContain('textarea')
    expect(getComponentList(wrapper)[1]).toContain('el-textarea')

    await vm.columns.splice(0, 1)
    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getLabelList(wrapper)).not.toContain('input')
    expect(getLabelList(wrapper)).toContain('textarea')
    expect(getComponentList(wrapper)[0]).not.toContain('el-input')
    expect(getComponentList(wrapper)[0]).toContain('el-textarea')

    await (vm.columns[0].props = { text: true })
    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getComponentList(wrapper)[0]).not.toContain('el-textarea')
    expect(getComponentList(wrapper)[0]).toContain('el-input')

    await ((vm.columns[0].component = 'el-switch'),
    (vm.columns[0].props = undefined))
    expect(getComponentList(wrapper)[0]).not.toContain('el-input')
    expect(getComponentList(wrapper)[0]).toContain('el-switch')
  })

  test.concurrent('sub-form', async () => {
    const wrapper = await mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({})
        const _columns = ref<IFormColumns>([
          {
            label: 'Date',
            prop: 'date',
            component: 'el-input',
          },
          {
            label: 'User',
            prop: 'user',
            size: 'small',
            children: [
              {
                label: 'Name',
                prop: 'name',
                component: 'el-input',
              },
              {
                label: 'Address',
                prop: 'address',
                component: 'el-input',
              },
            ],
          },
        ])
        return { form, columns: _columns }
      },
    })
    const vm = wrapper.vm as unknown as { columns: IFormColumns }

    expect(getFormContent(wrapper, arrayClass).exists()).toBe(false)
    expect(getFormContent(wrapper, addClass).exists()).toBe(true)

    await getFormContent(wrapper, addClass).trigger('click')
    expect(getFormContent(wrapper, arrayClass).exists()).toBe(true)

    await (vm.columns = columns)
    expect(getFormContent(wrapper, arrayClass).exists()).toBe(false)
    expect(getFormContent(wrapper, addClass).exists()).toBe(false)
  })

  test.concurrent('slots', async () => {
    const wrapper = await mount({
      template: `
        <pro-form
          v-model="form"
          :columns="columns"
        >
          <template #form-slot-label>
            slot-label
          </template>
          <template #form-slot="{ value, setValue, indexes }">
            <span class="indexes">{{ !indexes && 'undefined' }}</span>
            <el-input
              :model-value="value"
              calss="slot"
              @input="e => setValue(e.taget.value)"
            />
          </template>
          <template #default>
            <p class="default">default slot</p>
          </template>
          <template #menu-left="{ loading }">
            <button>menu-left-{{ loading }}</button>
          </template>
          <template #menu-right="{ loading }">
            <button>menu-right-{{ loading }}</button>
          </template>
        </pro-form>
      `,
      setup() {
        const form = ref<{ slot: string }>({ slot: '' })
        const _colums = ref<IFormColumns>([
          {
            label: 'Label',
            prop: 'slot',
            component: 'el-switch',
          },
        ])
        return { form, columns: _colums }
      },
    })

    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getComponentList(wrapper)[0]).not.toContain('el-switch')
    expect(getComponentList(wrapper)[0]).toContain('el-input')
    expect(wrapper.find('.pro-form .indexes').text()).toBe('undefined')
    expect(wrapper.find('label[for]').text()).toBe('slot-label')
    expect(getFormBtnList(wrapper)).toContain('menu-left-false')
    expect(getFormBtnList(wrapper)).toContain('menu-right-false')
    expect(wrapper.find('.pro-form .default').text()).toBe('default slot')
  })

  test.concurrent('indexes in slots', async () => {
    const wrapper = await mount({
      template: `
        <pro-form
          v-model="form"
          :columns="columns"
        >
          <template #form-c="{ indexes }">
            <span class="indexes">{{ indexes?.join('-') }}</span>
          </template>
          <template #form-c-label="{ indexes }">
            <span class="label">{{ indexes?.join('-') }}</span>
          </template>
        </pro-form>
      `,
      setup() {
        const form = ref({ a: [{ b: [{}, {}] }] })
        const _colums = ref<IFormColumns>([
          {
            label: 'a',
            prop: 'a',
            children: [
              {
                label: 'b',
                prop: 'b',
                children: [
                  {
                    label: 'c',
                    prop: 'c',
                  },
                ],
              },
            ],
          },
        ])
        return { form, columns: _colums }
      },
    })

    const indexes = wrapper.findAll('.pro-form .indexes')
    indexes.forEach((item, index) => {
      expect(item.text()).toContain(`0-${index}`)
    })

    const label = wrapper.findAll('.pro-form .label')
    label.forEach((item, index) => {
      expect(item.text()).toContain(`0-${index}`)
    })
  })

  test.concurrent('modelValue', async () => {
    interface Form {
      input: string
      switch: boolean
      input1: string
      end?: string
    }

    const wrapper = mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref<Form>({
          input: '123',
          switch: false,
          input1: 'abc',
          end: undefined,
        })
        const columns: IFormColumns<Form> = [
          {
            label: 'input',
            prop: 'input',
            component: 'el-input',
          },
          {
            label: 'switch',
            prop: 'switch',
            component: 'el-switch',
          },
          {
            label: 'MyInput',
            prop: 'input1',
            component: 'my-input',
            models: [
              { prop: 'input1', key: 'start' },
              { prop: 'end', key: 'end' },
            ],
          },
        ]
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: Form
      columns: IFormColumns
    }

    expect(getFormList(wrapper)).toHaveLength(3)
    expect(wrapper.find('input').element.value).toBe('123')
    expect(wrapper.find('.el-switch').classes()).not.toContain('is-checked')
    expect(
      (wrapper.find('input.my-input').element as HTMLInputElement).value,
    ).toBe('abc')

    await wrapper.find('.el-switch').trigger('click')
    expect(vm.form.switch).toBeTruthy()
    expect(wrapper.find('.el-switch').classes()).toContain('is-checked')

    await wrapper.find('input').setValue('value')
    expect(vm.form.input).toBe('value')

    await wrapper.find('input.my-input').setValue('value1')
    expect(vm.form.input1).toBe('value1')

    await wrapper.find('input.my-input-end').setValue('value2')
    expect(vm.form.end).toBe('value2')

    await (vm.form = {
      input: 'input',
      switch: false,
      input1: 'input1',
    })
    expect(wrapper.find('input').element.value).toBe('input')
    expect(wrapper.find('.el-switch').classes()).not.toContain('is-checked')
    expect(
      (wrapper.find('input.my-input').element as HTMLInputElement).value,
    ).toBe('input1')
    expect(
      (wrapper.find('input.my-input-end').element as HTMLInputElement).value,
    ).toBe('')
  })

  test.concurrent('menu', async () => {
    const wrapper = await mount({
      template: '<pro-form v-model="form" :columns="columns" :menu="menu" />',
      setup() {
        const form = ref({})
        const menu = ref<IFormMenuColumns>({})
        return { form, columns, menu }
      },
    })

    expect(getFormBtnList(wrapper)).toContain('Submit')
    expect(getFormBtnList(wrapper)).toContain('Reset')

    await wrapper.setProps({
      menu: {
        submitText: 'submit',
        reset: false,
        submitProps: { type: 'danger' },
      },
    } as ExternalParam)
    expect(getFormBtnList(wrapper)).toContain('submit')
    expect(
      wrapper
        .find(
          '.pro-form .el-form-item:last-child .el-form-item__content button.el-button--danger',
        )
        .exists(),
    ).toBeTruthy()
    expect(getFormBtnList(wrapper)).not.toContain('Reset')
  })

  test.concurrent('grid layout', async () => {
    const wrapper = await mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({})
        const columns = ref([
          {
            label: 'input1',
            prop: 'input1',
            component: 'el-input',
            span: 12,
          },
          {
            label: 'input2',
            prop: 'input2',
            component: 'el-input',
            span: 8,
            offset: 4,
          },
          {
            label: 'input3',
            prop: 'input3',
            component: 'el-input',
            span: 4,
            push: 2,
            pull: 2,
          },
          {
            label: 'input3',
            prop: 'input3',
            component: 'el-input',
            xs: {
              span: 24,
            },
            md: {
              span: 20,
              push: 2,
              pull: 2,
            },
            lg: {
              span: 10,
              push: 0,
              pull: 0,
              offset: 2,
            },
          },
        ])
        return { form, columns }
      },
    })

    expect(getFormList(wrapper)).toHaveLength(4)
    expect(getFormClassList(wrapper)[0]).toContain('el-col')
    expect(getFormClassList(wrapper)[0]).toContain('el-col-12')
    expect(getFormClassList(wrapper)[1]).toContain('el-col')
    expect(getFormClassList(wrapper)[1]).toContain('el-col-8')
    expect(getFormClassList(wrapper)[1]).toContain('el-col-offset-4')
    expect(getFormClassList(wrapper)[2]).toContain('el-col')
    expect(getFormClassList(wrapper)[2]).toContain('el-col-4')
    expect(getFormClassList(wrapper)[2]).toContain('el-col-push-2')
    expect(getFormClassList(wrapper)[2]).toContain('el-col-pull-2')
    expect(getFormClassList(wrapper)[3]).toContain('el-col')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-xs-24')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-md-20')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-md-push-2')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-md-pull-2')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-lg-10')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-lg-push-0')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-lg-pull-0')
    expect(getFormClassList(wrapper)[3]).toContain('el-col-lg-offset-2')

    await (((wrapper.vm.columns[0] as Mutable<FormColumn>).span = 8),
    ((wrapper.vm.columns[0] as Mutable<FormColumn>).pull = 2))
    expect(getFormClassList(wrapper)[0]).toContain('el-col-8')
    expect(getFormClassList(wrapper)[0]).toContain('el-col-pull-2')
  })

  test.concurrent('local component', async () => {
    const wrapper = await mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({})
        const columns = [
          {
            label: 'switch',
            prop: 'switch',
            component: markRaw(ElSwitch),
          },
        ]
        return { form, columns }
      },
    })

    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getLabelList(wrapper)).toContain('switch')
    expect(getComponentList(wrapper)[0]).toContain('el-switch')
  })

  test.concurrent('Nested value', async () => {
    const wrapper = await mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({})
        const columns = shallowRef([
          {
            label: 'Object',
            prop: 'a.b.c',
            component: 'el-input',
          },
          {
            label: 'Array',
            prop: 'b[0]',
            component: 'el-input',
          },
        ])
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: { a: { b: { c: string } }; b: [string] }
    }

    await getFormList(wrapper)[0].find('input').setValue('object value')
    expect(getFormList(wrapper)[0].find('input').element.value).toEqual(
      'object value',
    )
    await getFormList(wrapper)[0].find('input').trigger('object value')
    expect(vm.form.a.b.c).toBe('object value')

    await getFormList(wrapper)[1].find('input').setValue('array value')
    expect(getFormList(wrapper)[1].find('input').element.value).toEqual(
      'array value',
    )
    await getFormList(wrapper)[1].find('input').trigger('array value')
    expect(vm.form.b[0]).toBe('array value')
  })

  test.concurrent('array', async () => {
    const wrapper = await mount({
      template: '<pro-form v-model="form" :columns="columns" array />',
      setup() {
        const form = ref()
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as { form: { input: string }[] }

    expect(wrapper.find(arrayClass).exists()).toBe(false)
    expect(wrapper.find(addClass).exists()).toBe(true)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(1)
    expect(wrapper.find(arrayClass).exists()).toBe(true)
    expect(wrapper.findAll(`${arrayContentClass} .pro-form-item`)).toHaveLength(
      1,
    )
    expect(
      wrapper
        .find(`${arrayContentClass} .pro-form-item .el-form-item__content div`)
        .classes(),
    ).toContain('el-input')

    await wrapper.find('input').setValue('value')
    expect(vm.form[0].input).toBe('value')
  })

  test.concurrent('array & max', async () => {
    const wrapper = await mount({
      template: `
      <pro-form
        v-model="form"
        :columns="columns"
        :max="2"
        array
      />`,
      setup() {
        const form = ref([{}])
        return { form, columns }
      },
    })

    expect(wrapper.find(arrayClass).exists()).toBe(true)
    expect(wrapper.vm.form).toHaveLength(1)

    await wrapper.find(addClass).trigger('click')
    expect(wrapper.vm.form).toHaveLength(2)
    expect(wrapper.find(addClass).exists()).toBe(false)
  })

  test.concurrent('show', async () => {
    const wrapper = await mount({
      template: `
      <pro-form
        v-model="form"
        :columns="columns"
      />`,
      setup() {
        const form = ref({})
        const show = ref(true)
        const _columns = computed(() =>
          defineFormColumns([
            {
              label: 'input',
              prop: 'input',
              component: 'el-input',
              show: show.value,
            },
            {
              label: 'group',
              prop: 'group',
              show: show.value,
              children: columns,
            },
            {
              label: 'steps',
              prop: 'steps',
              show: show.value,
              children: columns,
            },
            {
              label: 'array',
              prop: 'array',
              show: show.value,
              children: columns,
            },
            {
              label: 'tabs',
              prop: 'tabs',
              show: show.value,
              children: columns,
            },
          ]),
        )
        return { form, columns: _columns, show }
      },
    })
    const vm = wrapper.vm as unknown as { show: boolean }

    expect(getFormList(wrapper)).toHaveLength(5)
    expect(getLabelList(wrapper)).toContain('input')
    expect(getLabelList(wrapper)).toContain('group')
    expect(getLabelList(wrapper)).toContain('steps')
    expect(getLabelList(wrapper)).toContain('array')
    expect(getLabelList(wrapper)).toContain('tabs')
    expect(getFormList(wrapper)[0].find('input').exists()).toBe(true)

    await (vm.show = false)
    expect(getFormList(wrapper)).toHaveLength(0)
  })

  test.concurrent('expose', async () => {
    const wrapper = await mount({
      template: `
      <pro-form
        ref="formRef"
        v-model="form"
        :columns="columns"
      />`,
      setup() {
        const form = ref({})
        const formRef = ref()
        const formItemRef = ref()
        const inputRef = ref()
        const _columns = [
          {
            ...columns[0],
            ref: formItemRef,
            props: { ref: inputRef },
          },
        ]
        return { form, columns: _columns, formRef, formItemRef, inputRef }
      },
    })

    expect(wrapper.find('.el-input').exists()).toBe(true)
    expect(Object.keys(wrapper.vm.inputRef)).not.toHaveLength(0)
    expect(wrapper.vm.inputRef).toHaveProperty('focus')
    expect(wrapper.vm.inputRef).toHaveProperty('blur')

    expect(Object.keys(wrapper.vm.formItemRef)).not.toHaveLength(0)
    expect(wrapper.vm.formItemRef).toHaveProperty('validate')
    expect(wrapper.vm.formItemRef).toHaveProperty('resetField')
    expect(wrapper.vm.formItemRef).toHaveProperty('clearValidate')
    expect(wrapper.vm.formItemRef).toHaveProperty('validateState')

    expect(Object.keys(wrapper.vm.formRef)).not.toHaveLength(0)
    expect(wrapper.vm.formRef).toHaveProperty('validate')
    expect(wrapper.vm.formRef).toHaveProperty('validateField')
    expect(wrapper.vm.formRef).toHaveProperty('resetFields')
    expect(wrapper.vm.formRef).toHaveProperty('clearValidate')
  })

  // test.concurrent('event', async () => {
  //   const wrapper = await _mount({
  //     template: '<pro-form v-model="form" :columns="columns" />',
  //     setup() {
  //       const form = ref({})
  //       return { form, columns }
  //     },
  //   })

  //   await wrapper.find(buttonClass + ':nth-child(2)').trigger('click')
  //   await wrapper.find(buttonClass).trigger('click')
  //   expect(wrapper.emitted()).toHaveProperty('reset')
  //   expect(wrapper.emitted()).toHaveProperty('submit')
  // })
})

afterAll(() => {
  config.global.components = {}
})
