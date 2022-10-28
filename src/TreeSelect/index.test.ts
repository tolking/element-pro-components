import { describe, test, expect, afterEach, afterAll } from 'vitest'
import { ComponentPublicInstance, ref } from 'vue'
import { config, mount, VueWrapper } from '@vue/test-utils'
import ProTreeSelect from './TreeSelect'
import { treeList } from '../__mocks__/index'

config.global.components = { ProTreeSelect }

const selectItemClass =
  '.pro-tree-select-popper .pro-tree-select-options .pro-tree-select-tree .el-tree-node'
const getList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll(selectItemClass)
    .map((item) => item.find('.el-tree-node__content span:last-child').text())
const getDisableList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.el-tree-node__content span.is-disabled')
    .map((item) => item.text())
const getMultipleDisableList = (wrapper: VueWrapper<ComponentPublicInstance>) =>
  wrapper
    .findAll('.el-tree-node__content .el-checkbox.is-disabled+span')
    .map((item) => item.text())

describe('TreeSelect', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test.concurrent('test build', async () => {
    const wrapper = await mount({
      template: `
        <pro-tree-select
          v-model="value"
          :data="data"
          :teleported="false"
          :render-after-expand="false"
          default-expand-all
        />
      `,
      setup() {
        const value = ref('')
        const data = ref(treeList)
        return { value, data }
      },
    })

    const list = getList(wrapper)
    const disableList = getDisableList(wrapper)

    expect(
      wrapper.find('.pro-tree-select-tree .el-tree-node').exists()
    ).toBeTruthy()
    expect(list).toContain('1')
    expect(list).toContain('1-1')
    expect(list).toContain('2')
    expect(list).toContain('2-1')
    expect(list).toContain('2-2')
    expect(list).toContain('2-2-1')
    expect(disableList).toContain('1')
    expect(disableList).toContain('1-1')
  })

  test.concurrent('test multiple', async () => {
    const wrapper = await mount({
      template: `
        <pro-tree-select
          v-model="value"
          :data="data"
          :teleported="false"
          :render-after-expand="false"
          multiple
          default-expand-all
        />
      `,
      setup() {
        const value = ref([])
        const data = ref(treeList)
        return { value, data }
      },
    })

    const list = getMultipleDisableList(wrapper)
    expect(
      wrapper.find('.pro-tree-select-tree .el-tree-node').exists()
    ).toBeTruthy()
    expect(
      wrapper.find('.pro-tree-select-tree .el-tree-node .el-checkbox').exists()
    ).toBeTruthy()
    expect(list).toContain('1')
    expect(list).toContain('1-1')
  })

  test.concurrent('config', async () => {
    const wrapper = await mount({
      template: `
        <pro-tree-select
          v-model="value"
          :data="data"
          :config="config"
          :teleported="false"
          :render-after-expand="false"
          default-expand-all
        />
      `,
      setup() {
        const value = ref()
        const config = { value: 'label', label: 'value' }
        return { value, data: treeList, config }
      },
    })

    const list = getList(wrapper)
    ;['1', '11', '2', '21', '22', '221'].forEach((item) => {
      expect(list).toContain(item)
    })
  })

  //TODO: add more test, error when trigger component `ElTree`
})

afterAll(() => {
  config.global.components = {}
})
