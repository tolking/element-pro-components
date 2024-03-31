import { describe, test, expect } from 'vitest'
import { isURL, objectPick, objectOmit, filterDeep, filterFlat } from './index'
import { slotList, SlotItem } from '../__mocks__/index'

describe('all utils', () => {
  describe('isURL', () => {
    test.concurrent('isURL https://ououe.com', () => {
      expect(isURL('https://ououe.com')).toBeTruthy()
    })
    test.concurrent('isURL http://ououe.com', () => {
      expect(isURL('https://ououe.com')).toBeTruthy()
    })
    test.concurrent('isURL /children', () => {
      expect(isURL('/children')).toBeFalsy()
    })
  })

  test.concurrent('objectPick', () => {
    const obj = { a: 'a', b: 'b', c: 'c', d: 'd' }
    expect(objectPick(obj, ['a'])).toEqual({ a: 'a' })
    expect(objectPick(obj, 'a', 'b')).toEqual({ a: 'a', b: 'b' })
    expect(objectPick(obj, 'a', 'b', 'd')).toEqual({ a: 'a', b: 'b', d: 'd' })
    expect(objectPick(obj, ['a', 'b', 'c', 'd'])).toEqual(obj)
    expect(obj).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd' })
  })

  test.concurrent('objectOmit', () => {
    const obj = { a: 'a', b: 'b', c: 'c', d: 'd' }
    expect(objectOmit(obj, ['a'])).toEqual({ b: 'b', c: 'c', d: 'd' })
    expect(objectOmit(obj, 'a', 'b')).toEqual({ c: 'c', d: 'd' })
    expect(objectOmit(obj, 'a', 'b', 'd')).toEqual({ c: 'c' })
    expect(objectOmit(obj, ['a', 'b', 'c', 'd'])).toEqual({})
    expect(obj).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd' })
  })

  describe('filterDeep', () => {
    test.concurrent('true', () => {
      const _slotList = filterDeep(slotList, 'slot')
      expect(_slotList).toHaveLength(2)
      expect(_slotList[0]).toEqual({ slot: true, label: 'label1' })
      expect(_slotList[1]).toEqual({
        slot: true,
        label: 'label3',
        children: [{ slot: true, label: 'label4' }],
      })
      expect(slotList).toHaveLength(4)
      expect(slotList[2]).toEqual({
        slot: true,
        label: 'label3',
        children: [{ slot: true, label: 'label4' }, { label: 'label5' }],
      })
    })
    test.concurrent('false', () => {
      const list = filterDeep(slotList, 'slot', false)
      expect(list).toHaveLength(2)
      expect(list[0]).toEqual({ label: 'label2' })
      expect(list[1]).toEqual({
        label: 'label6',
        children: [{ label: 'label8' }],
      })
      expect(slotList).toHaveLength(4)
      expect(slotList[3]).toEqual({
        label: 'label6',
        children: [{ slot: true, label: 'label7' }, { label: 'label8' }],
      })
    })
  })

  test.concurrent('filterFlat', () => {
    const list = filterFlat(slotList, 'slot')
    expect(list).toHaveLength(4)
    expect(list[0]).toEqual({ slot: true, label: 'label1' })
    expect(list[1]).toEqual({
      slot: true,
      label: 'label3',
      children: undefined,
    })
    expect(list[2]).toEqual({ slot: true, label: 'label4' })
    expect(list[3]).toEqual({ slot: true, label: 'label7' })
    expect(slotList).toHaveLength(4)
    expect(slotList[2]).toEqual({
      slot: true,
      label: 'label3',
      children: [{ slot: true, label: 'label4' }, { label: 'label5' }],
    })

    const list2 = filterFlat<SlotItem[], string[]>(
      slotList,
      'slot',
      true,
      (item) => item.label,
    )
    expect(list2).toHaveLength(4)
    expect(list2[0]).toBe('label1')
    expect(list2[1]).toBe('label3')
    expect(list2[2]).toBe('label4')
    expect(list2[3]).toBe('label7')
  })
})
