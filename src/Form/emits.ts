import { modelValueEmit } from '../utils/index'
import type { InvalidFields } from '../types/index'

export default {
  ...modelValueEmit,
  submit: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    true,
  reset: () => true,
}
