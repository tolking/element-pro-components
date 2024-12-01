import { describe, test, expect, afterEach, afterAll } from 'vitest'
import { config, mount } from '@vue/test-utils'
import { ref } from 'vue'
import { ElInput } from 'element-plus'
import { ProSearch } from './index'
import type { IFormColumns } from '../Form/type'

config.global.components = {
  ProSearch,
  ElInput,
}

const columns: IFormColumns = [
  {
    label: 'input',
    prop: 'input',
    component: 'el-input',
  },
]

describe('ProSearch', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('render', async () => {
    const wrapper = await mount({
      template: '<pro-search v-model="search" :columns="columns" />',
      setup() {
        const search = ref({})
        return { search, columns: ref([...columns]) }
      },
    })

    const item = wrapper.find('.el-form-item')
    expect(wrapper.html()).toMatchSnapshot()
    expect(item.classes()).toContain('el-col')
    expect(item.classes()).toContain('el-col-24')
    expect(item.classes()).toContain('el-col-xs-24')
    expect(item.classes()).toContain('el-col-md-12')
    expect(item.classes()).toContain('el-col-lg-8')
    expect(item.classes()).toContain('el-col-xl-6')

    wrapper.unmount()
  })

  test.concurrent('config', async () => {
    const wrapper = await mount({
      template:
        '<pro-search v-model="search" :columns="columns" :config="config" />',
      setup() {
        const search = ref({})
        const config = {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 12,
        }
        return { search, columns: ref([...columns]), config }
      },
    })

    const item = wrapper.find('.el-form-item')
    expect(item.classes()).toContain('el-col')
    expect(item.classes()).toContain('el-col-24')
    expect(item.classes()).toContain('el-col-xs-12')
    expect(item.classes()).toContain('el-col-sm-12')
    expect(item.classes()).toContain('el-col-md-12')
    expect(item.classes()).toContain('el-col-lg-12')
    expect(item.classes()).toContain('el-col-xl-12')

    wrapper.unmount()
  })

  test.concurrent('inline', async () => {
    const wrapper = await mount({
      template: '<pro-search v-model="search" :columns="columns" inline />',
      setup() {
        const search = ref({})
        return { search, columns: ref([...columns]) }
      },
    })

    const item = wrapper.find('.el-form-item')
    expect(item.classes()).not.toContain('el-col')
    expect(wrapper.find('.el-form').classes()).toContain('el-form--inline')

    wrapper.unmount()
  })

  test.concurrent('slots', async () => {
    const wrapper = await mount({
      template: `
        <pro-search v-model="search" :columns="columns">
          <template #default>
            <p class="default">default slot</p>
          </template>
          <template #menu-left="{ loading }">
            <button class="menu-left">menu-left-{{ loading }}</button>
          </template>
          <template #menu-right="{ loading }">
            <button class="menu-right">menu-right-{{ loading }}</button>
          </template>
          <template #search-slot-label>
            <span class="search-slot-label">slot-label</span>
          </template>
          <template #search-slot="{ value, setValue, indexes }">
            <span class="indexes">{{ !indexes && 'undefined' }}</span>
            <el-input
              :model-value="value"
              calss="slot"
              @input="e => setValue(e.taget.value)"
            />
          </template>
        </pro-search>
      `,
      setup() {
        const search = ref({})
        return { search, columns: [{ prop: 'slot' }] }
      },
    })

    expect(wrapper.find('.pro-search .default').text()).toBe('default slot')
    expect(wrapper.find('.pro-search .menu-left').text()).toBe(
      'menu-left-false',
    )
    expect(wrapper.find('.pro-search .menu-right').text()).toBe(
      'menu-right-false',
    )
    expect(wrapper.find('.pro-search .search-slot-label').text()).toBe(
      'slot-label',
    )
    expect(wrapper.find('.pro-search .indexes').text()).toBe('undefined')
    expect(wrapper.find('label[for]').text()).toBe('slot-label')
    expect(wrapper.find('.pro-search .slot')).toBeTruthy()

    wrapper.unmount()
  })
})

afterAll(() => {
  config.global.components = {}
})
