import { defineComponent, h } from 'vue'
import { reactiveOmit, reactivePick } from '@vueuse/core'
import { ElSelect, ElOption, ElTree, useAttrs } from 'element-plus'
import { useSelectData, useTreeSelect } from '../composables/index'
import { treeProps } from '../ColumnSetting/props'
import props from './props'
import emits from './emits'

type TreeKeys = Array<keyof typeof props>

interface TreeScope {
  node: {
    disabled: boolean
    label: string
  }
}
const treeKeys = Object.keys(treeProps).concat([
  'currentNodeKey',
  'renderContent',
  'draggable',
  'lazy',
  'load',
]) as TreeKeys

export default defineComponent({
  name: 'ProTreeSelect',
  props,
  emits,
  setup(props, { emit, slots }) {
    const attrs = useAttrs()
    const data = useSelectData(props)
    const {
      modelValue,
      multiple,
      checkStrictly,
      expandedKeys,
      filterable,
      tree,
      value,
      label,
      list,
      filter,
      togglePopper,
      remove,
      upData,
      clear,
    } = useTreeSelect(props, emit)
    const treeProps = reactivePick(props, ...treeKeys)
    const selectProps = reactiveOmit(
      props,
      'data',
      'config',
      'onlySelectLeaf',
      'checkStrictly',
      'checkDescendants',
      ...treeKeys
    )

    function createTree() {
      return h(
        ElOption,
        {
          value: value.value || '',
          label: label.value,
          class: 'pro-tree-select-options',
        },
        () =>
          h(
            ElTree,
            {
              ...treeProps,
              ...attrs.value,
              ref: tree,
              data: data.value,
              showCheckbox: multiple?.value,
              checkStrictly: checkStrictly?.value,
              defaultExpandedKeys: expandedKeys?.value,
              filterNodeMethod: filter,
              highlightCurrent: true,
              nodeKey: 'value',
              class: 'pro-tree-select-tree',
              onNodeClick: upData,
              onCheckChange: upData,
            },
            {
              default: (scope: TreeScope) => {
                if (slots.default) {
                  return slots.default({ ...scope, multiple: multiple?.value })
                } else {
                  return h(
                    'span',
                    {
                      class:
                        scope.node.disabled && !multiple?.value
                          ? 'is-disabled'
                          : '',
                    },
                    scope.node.label
                  )
                }
              },
            }
          )
      )
    }

    function createList() {
      return list.value.map((item) => {
        return h(ElOption, {
          value: item.value,
          label: item.label,
          disabled: item.disabled,
          class: 'is-hidden',
        })
      })
    }

    return () =>
      h(
        ElSelect,
        {
          ...selectProps,
          modelValue: modelValue?.value,
          multiple: multiple?.value,
          filterable: filterable?.value,
          filterMethod: tree.value.filter,
          popperClass: 'pro-tree-select-popper',
          class: 'pro-tree-select',
          onVisibleChange: togglePopper,
          onRemoveTag: remove,
          onClear: clear,
        },
        () => [createTree(), createList()]
      )
  },
})
