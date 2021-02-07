import { ComponentPublicInstance, nextTick, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProForm from '../src/Form/Form.vue'
// import ProInputTag from '../src/InputTag/InputTag.vue'
// import { ElInput, ElSwitch } from 'element-plus'
import { ProFormColumns } from '../src/types/index'

const columns: ProFormColumns = [
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
const _mount = (options: Record<string, unknown>) =>
  mount({
    // NOTE: not work on vue-jest 5.0.0-alpha.8 ?
    // global: {
    //   components: {
    //     ProInputTag,
    //     'el-input': ElInput,
    //     'el-swwitch': ElSwitch,
    //   }
    // },
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
        return { form, columns: ref(columns) }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: ProFormColumns }

    expect(getFormItem(wrapper)).toHaveLength(2)
    expect(haveItem(wrapper, 'el-input')).toBeTruthy()
    expect(haveItem(wrapper, 'el-switch')).toBeTruthy()

    await vm.columns.push({
      label: 'input-tag',
      prop: 'inputTag',
      component: 'el-input-tag',
    })
    expect(getFormItem(wrapper)).toHaveLength(3)
    expect(haveItem(wrapper, '<el-input-tag>')).toBeTruthy()

    await vm.columns.splice(2, 1)
    expect(getFormItem(wrapper)).toHaveLength(2)
    expect(haveItem(wrapper, '<el-input-tag>')).toBeFalsy()

    await (vm.columns[0].component = 'el-input-tag')
    expect(getFormItem(wrapper)).toHaveLength(2)
    expect(haveItem(wrapper, '<el-input>')).toBeFalsy()
    expect(haveItem(wrapper, '<el-input-tag>')).toBeTruthy()
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
    const vm = (wrapper.vm as unknown) as { columns: ProFormColumns }

    expect(getFormContent(wrapper, '.children-form').exists()).toBe(false)
    expect(getFormContent(wrapper, '.el-button.is-circle').exists()).toBe(true)

    await getFormContent(wrapper, '.el-button.is-circle').trigger('click')
    expect(getFormContent(wrapper, '.children-form').exists()).toBe(true)

    await (vm.columns = columns)
    expect(getFormContent(wrapper, '.children-form').exists()).toBe(false)
    expect(getFormContent(wrapper, '.el-button.is-circle').exists()).toBe(false)
  })
})
