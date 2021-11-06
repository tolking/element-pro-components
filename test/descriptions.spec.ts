import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProDescriptions from '../src/Descriptions/Descriptions'
import type { IDescriptionsColumns } from '../src/Descriptions/index'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProDescriptions },
    ...options,
  })
const headerClass = '.pro-descriptions .el-descriptions__header'
const itemClass =
  '.pro-descriptions .el-descriptions__body .el-descriptions__table tbody tr td'
const getList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper.findAll(itemClass)
const getLabelList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getList(wrapper).map((item) => item.find('.el-descriptions__label').text())
const getPropList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  getList(wrapper).map((item) => item.find('.el-descriptions__content').text())

describe('Descriptions', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('empt', () => {
    const wrapper = _mount({
      template: '<pro-descriptions />',
    })

    expect(wrapper.find('.pro-descriptions').exists()).toBe(true)
  })

  test('columns', async () => {
    const wrapper = _mount({
      template: '<pro-descriptions :columns="columns" :detail="detail" />',
      setup() {
        const columns = ref<IDescriptionsColumns<typeof detail>>([
          { label: 'Date', prop: 'date' },
          { label: 'Name', prop: 'name' },
        ])
        const detail = {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }

        return { columns, detail }
      },
    })
    const vm = (wrapper.vm as unknown) as { columns: IDescriptionsColumns }

    expect(getLabelList(wrapper)).toContain('Date')
    expect(getPropList(wrapper)).toContain('2016-05-03')
    expect(getLabelList(wrapper)).toContain('Name')
    expect(getPropList(wrapper)).toContain('Tom')
    expect(getLabelList(wrapper)).not.toContain('Address')
    expect(getPropList(wrapper)).not.toContain('No. 189, Grove St, Los Angeles')

    await vm.columns.push({ label: 'Address', prop: 'address' })
    expect(getLabelList(wrapper)).toContain('Address')
    expect(getPropList(wrapper)).toContain('No. 189, Grove St, Los Angeles')

    await (vm.columns[0].label = 'Test')
    expect(getLabelList(wrapper)).not.toContain('Date')
    expect(getLabelList(wrapper)).toContain('Test')
  })

  test('detail', async () => {
    const wrapper = _mount({
      template: '<pro-descriptions :columns="columns" :detail="detail" />',
      setup() {
        const columns = [{ label: 'Date', prop: 'date' }]
        const detail = ref({})

        return { columns, detail }
      },
    })
    const vm = (wrapper.vm as unknown) as { detail: { date: string } }

    expect(getLabelList(wrapper)).toContain('Date')
    expect(getPropList(wrapper)).toContain('')

    await (vm.detail = { date: '2016-05-03' })
    expect(getPropList(wrapper)).not.toContain('')
    expect(getPropList(wrapper)).toContain('2016-05-03')
  })

  test('slots', () => {
    const wrapper = _mount({
      template: `
        <pro-descriptions
          :columns="columns"
          :detail="detail"
        >
          <template #title>
            <span>slot-title</span>
          </template>
          <template #extra>
            <span>slot-extra</span>
          </template>
          <template #date="{ detail }">
            <span>slot-{{ detail.date }}</span>
          </template>
          <template #date-label="{ item }">
            <span>slot-{{ item.label }}</span>
          </template>
        </pro-descriptions>
      `,
      setup() {
        const columns = [{ label: 'Date', prop: 'date' }]
        const detail = {
          date: '2016-05-03',
        }

        return { columns, detail }
      },
    })

    expect(getLabelList(wrapper)).toContain('slot-Date')
    expect(getPropList(wrapper)).toContain('slot-2016-05-03')
    expect(wrapper.find(headerClass + ' .el-descriptions__title').text()).toBe(
      'slot-title'
    )
    expect(wrapper.find(headerClass + ' .el-descriptions__extra').text()).toBe(
      'slot-extra'
    )
  })
})
