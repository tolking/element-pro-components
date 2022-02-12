import FormEmits from '../Form/emits'
import TableEmits from '..//Table/emits'
import type { ExternalParam } from '../types/index'
import type { InvalidFields } from '../Form/index'
import type { ICrudFormType } from './type'

export default {
  ...FormEmits,
  ...TableEmits,
  submit: (
    close: () => void,
    done: () => void,
    formType: ICrudFormType,
    isValid: boolean,
    invalidFields?: InvalidFields
  ) => true,
  search: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    true,
  searchReset: () => true,
  delete: (row: ExternalParam) => true,
  'update:search': (value?: ExternalParam) => true,
}
