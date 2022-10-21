import { describe, test, expect, afterEach } from 'vitest'
import { ComponentPublicInstance, ref, shallowRef, markRaw } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { ElInput, ElSwitch } from 'element-plus'
import { ProForm } from './index'
import type { IFormColumns, IFormMenuColumns, FormColumn } from './index'
import type { Mutable } from '../types/index'

const columns: IFormColumns = [
  {
    label: 'input',
    prop: 'input',
    component: 'el-input',
  },
]
const _mount = (options: Record<string, unknown>) =>
  mount(
    {
      components: { ProForm },
      ...options,
    },
    {
      global: {
        components: { ElInput, ElSwitch },
      },
    }
  )
const buttonClass =
  '.pro-form .el-form-item:last-child .el-form-item__content button'
const getFormList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll('.pro-form .pro-form-item')
const getFormClassList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) => item.classes())
const getLabelList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) => item.find('.el-form-item__label').text())
const getComponentList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getFormList(wrapper).map((item) =>
    item.find('.el-form-item__content div').classes()
  )
const getFormBtnList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(buttonClass).map((item) => item.text())
const getFormContent = (
  wrapper: VueWrapper<ComponentPublicInstance>,
  className = ''
) =>
  wrapper.find('.pro-form .pro-form-item .el-form-item__content ' + className)

describe('Form', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('columns', async () => {
    const wrapper = await _mount({
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
    const wrapper = await _mount({
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

    expect(getFormContent(wrapper, '.pro-array-form-content').exists()).toBe(
      false
    )
    expect(getFormContent(wrapper, '.pro-array-form-btn-add').exists()).toBe(
      true
    )

    await getFormContent(wrapper, '.pro-array-form-btn-add').trigger('click')
    expect(getFormContent(wrapper, '.pro-array-form-content').exists()).toBe(
      true
    )

    await (vm.columns = columns)
    expect(getFormContent(wrapper, '.pro-array-form-content').exists()).toBe(
      false
    )
    expect(getFormContent(wrapper, '.pro-array-form-btn-add').exists()).toBe(
      false
    )
  })

  test.concurrent('slots', async () => {
    const wrapper = await _mount({
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
    const wrapper = await _mount({
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
    }

    const wrapper = _mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref<Form>({
          input: '123',
          switch: false,
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
        ]
        return { form, columns }
      },
    })
    const vm = wrapper.vm as unknown as {
      form: Form
      columns: IFormColumns
    }

    expect(getFormList(wrapper)).toHaveLength(2)
    expect(wrapper.find('input').element.value).toBe('123')
    expect(wrapper.find('.el-switch').classes()).not.toContain('is-checked')

    await wrapper.find('.el-switch').trigger('click')
    expect(vm.form.switch).toBeTruthy()
    expect(wrapper.find('.el-switch').classes()).toContain('is-checked')

    await wrapper.find('input').setValue('value')
    expect(vm.form.input).toBe('value')

    await (vm.form = { input: 'input', switch: false })
    expect(wrapper.find('input').element.value).toBe('input')
    expect(wrapper.find('.el-switch').classes()).not.toContain('is-checked')
  })

  test.concurrent('menu', async () => {
    const wrapper = await _mount({
      template: '<pro-form v-model="form" :columns="columns" :menu="menu" />',
      setup() {
        const form = ref({})
        const menu = ref<IFormMenuColumns>({})
        return { form, columns, menu }
      },
    })
    const vm = wrapper.vm as unknown as { menu: IFormMenuColumns }

    expect(getFormBtnList(wrapper)).toContain('Submit')
    expect(getFormBtnList(wrapper)).toContain('Reset')

    await (vm.menu.submitText = 'submit')
    expect(getFormBtnList(wrapper)).toContain('submit')

    await (vm.menu.submitProps = { type: 'danger' })
    expect(
      wrapper
        .find(
          '.pro-form .el-form-item:last-child .el-form-item__content button.el-button--danger'
        )
        .exists()
    ).toBeTruthy()

    await (vm.menu.reset = false)
    expect(getFormBtnList(wrapper)).not.toContain('Reset')
  })

  test.concurrent('grid layout', async () => {
    const wrapper = await _mount({
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
    const vm = wrapper.vm as unknown as { columns: Mutable<IFormColumns> }

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

    await (((vm.columns[0] as Mutable<FormColumn>).span = 8),
    ((vm.columns[0] as Mutable<FormColumn>).pull = 2))
    expect(getFormClassList(wrapper)[0]).toContain('el-col-8')
    expect(getFormClassList(wrapper)[0]).toContain('el-col-pull-2')
  })

  test.concurrent('local component', async () => {
    const wrapper = await _mount({
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
    const wrapper = await _mount({
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
      'object value'
    )
    await getFormList(wrapper)[0].find('input').trigger('object value')
    expect(vm.form.a.b.c).toBe('object value')

    await getFormList(wrapper)[1].find('input').setValue('array value')
    expect(getFormList(wrapper)[1].find('input').element.value).toEqual(
      'array value'
    )
    await getFormList(wrapper)[1].find('input').trigger('array value')
    expect(vm.form.b[0]).toBe('array value')
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
