import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { ElInput, ElSwitch } from 'element-plus'
import ProForm from '../src/Form/Form'
import type { IFormColumns, IFormMenuColumns } from '../src/types/index'

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

describe('Table.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('columns', async () => {
    const wrapper = await _mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({})
        return { form, columns: ref([...columns]) }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: IFormColumns }

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

    await (vm.columns[0].props = { type: 'text' })
    expect(getFormList(wrapper)).toHaveLength(1)
    expect(getComponentList(wrapper)[0]).not.toContain('el-textarea')
    expect(getComponentList(wrapper)[0]).toContain('el-input')

    await ((vm.columns[0].component = 'el-switch'),
    (vm.columns[0].props = undefined))
    expect(getComponentList(wrapper)[0]).not.toContain('el-input')
    expect(getComponentList(wrapper)[0]).toContain('el-switch')
  })

  test('sub-form', async () => {
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
            size: 'mini',
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
    const vm = (wrapper.vm as unknown) as { columns: IFormColumns }

    expect(getFormContent(wrapper, '.children-form').exists()).toBe(false)
    expect(getFormContent(wrapper, '.el-button.is-circle').exists()).toBe(true)

    await getFormContent(wrapper, '.el-button.is-circle').trigger('click')
    expect(getFormContent(wrapper, '.children-form').exists()).toBe(true)

    await (vm.columns = columns)
    expect(getFormContent(wrapper, '.children-form').exists()).toBe(false)
    expect(getFormContent(wrapper, '.el-button.is-circle').exists()).toBe(false)
  })

  test('slots', async () => {
    const wrapper = await _mount({
      template: `
        <pro-form
          v-model="form"
          :columns="columns"
        >
          <template #slot-label>
            slot-label
          </template>
          <template #slot="{ value, setValue }">
            <el-input
              :model-value="value"
              calss="slot"
              @input="e => setValue(e.taget.value)"
            />
          </template>
          <template #menu-left>
            <button>menu-left</button>
          </template>
          <template #menu-right>
            <button>menu-right</button>
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
    expect(wrapper.find('label[for="slot"]').text()).toBe('slot-label')
    expect(getFormBtnList(wrapper)).toContain('menu-left')
    expect(getFormBtnList(wrapper)).toContain('menu-right')
  })

  test('modelValue', async () => {
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
    const vm = (wrapper.vm as unknown) as {
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

  test('menu', async () => {
    const wrapper = await _mount({
      template: '<pro-form v-model="form" :columns="columns" :menu="menu" />',
      setup() {
        const form = ref({})
        const menu = ref<IFormMenuColumns>({})
        return { form, columns, menu }
      },
    })
    const vm = (wrapper.vm as unknown) as { menu: IFormMenuColumns }

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

  test('grid layout', async () => {
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
    const vm = (wrapper.vm as unknown) as { columns: IFormColumns }

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

    await ((vm.columns[0].span = 8), (vm.columns[0].pull = 2))
    expect(getFormClassList(wrapper)[0]).toContain('el-col-8')
    expect(getFormClassList(wrapper)[0]).toContain('el-col-pull-2')
  })

  // test('event', async () => {
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
