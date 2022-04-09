import { modelValueEmit } from '../utils/index'

export default {
  ...modelValueEmit,
  input: (value: string) => true,
  'tag-add': (value: string) => true,
  'tag-remove': (value: string) => true,
}
