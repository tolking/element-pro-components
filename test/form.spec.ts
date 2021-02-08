import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProForm from '../src/Form/Form.vue'
import { ProFormColumns } from '../src/types/index'

const columns: ProFormColumns = [
  {
    label: 'input',
    prop: 'input',
    component: 'input',
    props: {
      type: 'input',
    },
  },
]
const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProForm },
    ...options,
  })
const getFormItem = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.pro-form .pro-form-item')
    .map((item) => item.find('.el-form-item__content').html())
const haveItem = (
  wrapper: VueWrapper<ComponentPublicInstance>,
  value: string
) => getFormItem(wrapper).some((item) => item.indexOf(value) > -1)
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
    const vm = (wrapper.vm as unknown) as { columns: ProFormColumns }

    expect(getFormItem(wrapper)).toHaveLength(1)
    expect(haveItem(wrapper, '<input')).toBeTruthy()
    expect(haveItem(wrapper, '<textarea')).toBeFalsy()

    await vm.columns.push({
      label: 'textarea',
      prop: 'textarea',
      component: 'textarea',
    })
    expect(getFormItem(wrapper)).toHaveLength(2)
    expect(haveItem(wrapper, '<textarea')).toBeTruthy()

    await vm.columns.splice(0, 1)
    expect(getFormItem(wrapper)).toHaveLength(1)
    expect(haveItem(wrapper, '<input')).toBeFalsy()

    await (vm.columns[0].component = 'input')
    expect(getFormItem(wrapper)).toHaveLength(1)
    expect(haveItem(wrapper, '<textarea')).toBeFalsy()
    expect(haveItem(wrapper, '<input')).toBeTruthy()

    await (vm.columns[0].props = { type: 'radio' })
    expect(haveItem(wrapper, '<input')).toBeTruthy()
    expect(haveItem(wrapper, '<input type="radio"')).toBeTruthy()
  })

  test('sub-form', async () => {
    const wrapper = await _mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref({})
        const _columns = ref<ProFormColumns>([
          {
            label: 'Date',
            prop: 'date',
            component: 'input',
          },
          {
            label: 'User',
            prop: 'user',
            size: 'mini',
            children: [
              {
                label: 'Name',
                prop: 'name',
                component: 'input',
              },
              {
                label: 'Address',
                prop: 'address',
                component: 'input',
              },
            ],
          },
        ])
        return { form, columns: _columns }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: ProFormColumns }

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
            <input
              :model-value="value"
              calss="slot"
              @input="e => setValue(e.taget.value)"
            />
          </template>
          <template #menu>
            <button>Submit</button>
          </template>
        </pro-form>
      `,
      setup() {
        const form = ref<{ slot: string }>({ slot: '' })
        const _colums: ProFormColumns = [
          {
            prop: 'slot',
            slot: true,
          },
        ]
        return { form, columns: _colums }
      },
    })
    const vm = (wrapper.vm as unknown) as { form: { slot: string } }

    expect(getFormItem(wrapper)).toHaveLength(1)
    expect(haveItem(wrapper, '<input')).toBeTruthy()
    expect(wrapper.find('label[for="slot"]').text()).toBe('slot-label')
    expect(wrapper.find('button').text()).toBe('Submit')
  })

  test('test modelValue', async () => {
    const wrapper = _mount({
      template: '<pro-form v-model="form" :columns="columns" />',
      setup() {
        const form = ref<Record<string, string>>({})
        const _colums: ProFormColumns = [
          ...columns,
          {
            label: 'textarea',
            prop: 'textarea',
            component: 'textarea',
          },
        ]
        return { form, columns: _colums }
      },
    })
    const vm = (wrapper.vm as unknown) as {
      form: Record<string, string>
      columns: ProFormColumns
    }

    expect(getFormItem(wrapper)).toHaveLength(2)
    expect(wrapper.find('input').element.value).toBe('')
    expect(vm.form.input).toBe(undefined)
  })
})
