import { defineComponent, computed, h, toRefs } from 'vue'
import { ElDropdown, ElDropdownMenu, ElButton, ElTree } from 'element-plus'
import { Setting } from '@element-plus/icons-vue'
import { filterFlat } from '../utils/index'
import props, { treeProps } from './props'
import type {
  IDefineProps,
  ICrudColumns,
  CrudColumn,
  ITableColumns,
  TableColumn,
} from '../types/index'

type Columns = ICrudColumns | ITableColumns
type Column = CrudColumn | TableColumn

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createTreeProps(props: IDefineProps<typeof treeProps>) {
  return {
    emptyText: props.emptyText,
    renderAfterExpand: props.renderAfterExpand,
    expandOnClickNode: props.expandOnClickNode,
    defaultExpandAll: props.defaultExpandAll,
    checkOnClickNode: props.checkOnClickNode,
    autoExpandParent: props.autoExpandParent,
    allowDrag: props.allowDrag,
    allowDrop: props.allowDrop,
    accordion: props.accordion,
    indent: props.indent,
    iconClass: props.iconClass,
  }
}

export default defineComponent({
  name: 'ProColumnSetting',
  props,
  emits: ['updata:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const checkedKeys = computed(() => {
      return filterFlat<Columns, string[]>(
        props.modelValue,
        'hide',
        false,
        (item) => item.prop as string
      )
    })

    function handleDropStart({ data }: { data: Column }) {
      data.hide = !data.hide
      emit('updata:modelValue', modelValue)
    }

    function handleDropEnd({ data }: { data: Column }) {
      data.hide = !data.hide
      emit('updata:modelValue', modelValue)
    }

    function handleCheckChange(data: Column) {
      data.hide = !data.hide
      emit('updata:modelValue', modelValue)
    }

    function createMenu() {
      return h(ElDropdownMenu, null, () => {
        const config = createTreeProps(props)
        return h(
          ElTree,
          Object.assign(
            {
              data: modelValue.value,
              defaultCheckedKeys: checkedKeys.value,
              highlightCurrent: props.highlightCurrent,
              filterNodeMethod: props.filterNodeMethod,
              showCheckbox: true,
              checkStrictly: true,
              draggable: true,
              nodeKey: 'prop',
              class: 'pro-column-setting-tree',
              onNodeDragStart: handleDropStart,
              onNodeDragEnd: handleDropEnd,
              onCheck: handleCheckChange,
            },
            config
          )
        )
      })
    }

    return () =>
      h(
        ElDropdown,
        {
          placement: props.placement,
          trigger: props.trigger,
          class: 'pro-column-setting',
        },
        {
          default: () =>
            h(ElButton, {
              size: props.size,
              circle: true,
              icon: Setting,
            }),
          dropdown: () => createMenu(),
        }
      )
  },
})
