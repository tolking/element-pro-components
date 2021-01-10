import { checkUrl } from '../src/utils/index'

describe('all utils', () => {
  describe('checkUrl', () => {
    test('checkUrl https://ououe.com', () => {
      expect(checkUrl('https://ououe.com')).toBeTruthy()
    })
    test('checkUrl http://ououe.com', () => {
      expect(checkUrl('https://ououe.com')).toBeTruthy()
    })
    test('checkUrl /children', () => {
      expect(checkUrl('/children')).toBeFalsy()
    })
  })
})
