import { defineComponent, h } from 'vue'
import { ElSelect, ElOption, ElTree, useAttrs } from 'element-plus'
import { useSelectData, useTreeSelect } from '../composables/index'
import { createSelectProps } from '../Select/Select'
import { createTreeProps } from '../ColumnSetting/ColumnSetting'
import props from './props'
import emits from './emits'

interface TreeScope {
  node: {
    disabled: boolean
    label: string
  }
}

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

    function createTree() {
      return h(
        ElOption,
        {
          value: value.value || '',
          label: label.value,
          class: 'pro-tree-select-options',
        },
        () => {
          const config = createTreeProps(props)
          return h(
            ElTree,
            Object.assign(
              {
                ref: tree,
                data: data.value,
                showCheckbox: multiple?.value,
                checkStrictly: checkStrictly?.value,
                defaultExpandedKeys: expandedKeys?.value,
                filterNodeMethod: filter,
                highlightCurrent: true,
                currentNodeKey: props.currentNodeKey,
                renderContent: props.renderContent,
                draggable: props.draggable,
                lazy: props.lazy,
                load: props.load,
                nodeKey: 'value',
                class: 'pro-tree-select-tree',
                onNodeClick: upData,
                onCheckChange: upData,
              },
              config,
              attrs.value
            ),
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
        }
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

    return () => {
      const config = createSelectProps(props)
      return h(
        ElSelect,
        Object.assign(
          {
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
          config
        ),
        () => [createTree(), createList()]
      )
    }
  },
})
