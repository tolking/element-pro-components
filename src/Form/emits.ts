import { modelValueEmit } from '../utils/index'
import type { InvalidFields } from './type'

export default {
  ...modelValueEmit,
  submit: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    true,
  reset: () => true,
}
