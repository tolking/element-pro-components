import { defineComponent, h } from 'vue'
import { ElSelect, ElOption, ElTree, useAttrs } from 'element-plus'
import { useSelectData, useTreeSelect } from '../composables/index'
import props from './props'

interface TreeScope {
  node: {
    disabled: boolean
    label: string
  }
}

export default defineComponent({
  name: 'ProTreeSelect',
  props,
  emits: [
    'update:modelValue',
    'clear',
    'remove-tag',
    'visible-change',
    'node-click',
    'check-change',
  ],
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
        () =>
          h(
            ElTree,
            {
              ...attrs.value,
              ref: tree,
              data: data.value,
              showCheckbox: multiple?.value,
              checkStrictly: checkStrictly?.value,
              defaultExpandedKeys: expandedKeys?.value,
              filterNodeMethod: filter,
              highlightCurrent: true,
              emptyText: props.emptyText,
              renderAfterExpand: props.renderAfterExpand,
              defaultExpandAll: props.defaultExpandAll,
              expandOnClickNode: props.expandOnClickNode,
              checkOnClickNode: props.checkOnClickNode,
              checkDescendants: props.checkDescendants,
              autoExpandParent: props.autoExpandParent,
              currentNodeKey: props.currentNodeKey,
              renderContent: props.renderContent,
              draggable: props.draggable,
              allowDrag: props.allowDrag,
              allowDrop: props.allowDrop,
              lazy: props.lazy,
              load: props.load,
              accordion: props.accordion,
              indent: props.indent,
              iconClass: props.iconClass,
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
          modelValue: modelValue?.value,
          multiple: multiple?.value,
          filterable: filterable?.value,
          filterMethod: tree.value.filter,
          clearable: props.clearable,
          name: props.name,
          id: props.id,
          autocomplete: props.autocomplete,
          automaticDropdown: props.automaticDropdown,
          size: props.size,
          disabled: props.disabled,
          allowCreate: props.allowCreate,
          loading: props.loading,
          remote: props.remote,
          loadingText: props.loadingText,
          noMatchText: props.noMatchText,
          noDataText: props.noDataText,
          remoteMethod: props.remoteMethod,
          multipleLimit: props.multipleLimit,
          placeholder: props.placeholder,
          defaultFirstOption: props.defaultFirstOption,
          reserveKeyword: props.reserveKeyword,
          valueKey: props.valueKey,
          collapseTags: props.collapseTags,
          popperAppendToBody: props.popperAppendToBody,
          clearIcon: props.clearIcon,
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
