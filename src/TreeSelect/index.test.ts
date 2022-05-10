import { describe, test, expect, afterEach } from 'vitest'
import { ComponentPublicInstance, ref } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import ProTreeSelect from './TreeSelect'
import { treeList } from '../__mocks__/index'

const _mount = (options: Record<string, unknown>) =>
  mount({
    components: { ProTreeSelect },
    ...options,
  })
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
    const wrapper = await _mount({
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

    expect(
      wrapper.find('.pro-tree-select-tree .el-tree-node').exists()
    ).toBeTruthy()
    expect(getList(wrapper)).toContain('1')
    expect(getList(wrapper)).toContain('1-1')
    expect(getList(wrapper)).toContain('2')
    expect(getList(wrapper)).toContain('2-1')
    expect(getList(wrapper)).toContain('2-2')
    expect(getList(wrapper)).toContain('2-2-1')
    expect(getDisableList(wrapper)).toContain('1')
    expect(getDisableList(wrapper)).toContain('1-1')
  })

  test.concurrent('test multiple', async () => {
    const wrapper = await _mount({
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

    expect(
      wrapper.find('.pro-tree-select-tree .el-tree-node').exists()
    ).toBeTruthy()
    expect(
      wrapper.find('.pro-tree-select-tree .el-tree-node .el-checkbox').exists()
    ).toBeTruthy()
    expect(getMultipleDisableList(wrapper)).toContain('1')
    expect(getMultipleDisableList(wrapper)).toContain('1-1')
  })

  //TODO: add more test, error when trigger component `ElTree`
})
