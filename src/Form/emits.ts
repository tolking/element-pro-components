import { modelValueEmit } from '../utils/index'
import { InvalidFields } from '../types/index'

export default {
  ...modelValueEmit,
  submit: (done: () => void, isValid: boolean, invalidFields?: InvalidFields) =>
    true,
  reset: null,
}
