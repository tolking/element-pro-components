import { isObject, objectOmit } from '../utils/index'
import type { FormColumn, GroupFormColumn } from './type'

type FormItemBind = Omit<
  FormColumn,
  | 'component'
  | 'max'
  | 'props'
  | 'prop'
  | 'span'
  | 'offset'
  | 'pull'
  | 'push'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'children'
>

export function getFormItemBind(item: FormColumn): FormItemBind {
  const omitKeys: Array<keyof FormColumn> = [
    'component',
    'max',
    'props',
    'prop',
    'children',
    'span',
    'offset',
    'pull',
    'push',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]

  return isObject(item)
    ? objectOmit<FormColumn>(item, omitKeys)
    : ({} as FormColumn)
}

type GroupFormItemBind = Omit<GroupFormColumn, 'prop' | 'type' | 'children'>

export function getGroupFormItemBind(item: GroupFormColumn): GroupFormItemBind {
  const omitKeys: Array<keyof GroupFormColumn> = ['prop', 'type', 'children']

  return isObject(item)
    ? objectOmit<GroupFormColumn>(item, omitKeys)
    : ({} as GroupFormColumn)
}
