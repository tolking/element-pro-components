import {
  checkUrl,
  findRouterItemListByPath,
  getScreenSize,
  objectDeepMerge,
  objectPick,
  objectOmit,
  filterDeep,
  filterFlat,
} from '../src/utils/index'
import { routes, slotList, SlotItem } from './mock'
import type { IRouteRecordRaw } from '../src/types/index'

function getRouterTitle(list: IRouteRecordRaw[]) {
  return list.map((item) => item.meta?.title || '')
}

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

  describe('findRouterItemListByPath', () => {
    const indexPath = findRouterItemListByPath(routes, '/index')
    const twoPath = findRouterItemListByPath(routes, '/two/info')

    expect(getRouterTitle(indexPath)).toContain('home')
    expect(getRouterTitle(indexPath)).toContain('Home')
    expect(getRouterTitle(twoPath)).toContain('two')
    expect(getRouterTitle(twoPath)).toContain('twoInfo')
  })

  describe('getScreenSize', () => {
    expect(getScreenSize(1920)).toBe('xl')
    expect(getScreenSize(1500)).toBe('lg')
    expect(getScreenSize(1100)).toBe('md')
    expect(getScreenSize(920)).toBe('sm')
    expect(getScreenSize(375)).toBe('xs')
  })

  describe('objectDeepMerge', () => {
    expect(objectDeepMerge({}, {})).toEqual({})
    expect(objectDeepMerge({ a: 'a' }, {})).toEqual({ a: 'a' })
    expect(objectDeepMerge({}, { b: 'b' })).toEqual({ b: 'b' })
    expect(objectDeepMerge({ a: 'a' }, { b: 'b' })).toEqual({ a: 'a', b: 'b' })
    expect(objectDeepMerge({ a: undefined }, { a: { b: 'b' } })).toEqual({
      a: { b: 'b' },
    })
    expect(
      objectDeepMerge({ a: { b: 'b' } }, { a: { b: 'b1', c: 'c' } })
    ).toEqual({ a: { b: 'b1', c: 'c' } })
    expect(
      objectDeepMerge({ a: { b: 'b', c: 'c' } }, { a: { b: 'b1' } })
    ).toEqual({ a: { b: 'b1', c: 'c' } })
  })

  describe('objectPick', () => {
    const obj = { a: 'a', b: 'b', c: 'c', d: 'd' }
    expect(objectPick(obj, ['a'])).toEqual({ a: 'a' })
    expect(objectPick(obj, ['a', 'b'])).toEqual({ a: 'a', b: 'b' })
    expect(objectPick(obj, ['a', 'b', 'd'])).toEqual({ a: 'a', b: 'b', d: 'd' })
    expect(objectPick(obj, ['a', 'b', 'c', 'd'])).toEqual(obj)
    expect(obj).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd' })
  })

  describe('objectOmit', () => {
    const obj = { a: 'a', b: 'b', c: 'c', d: 'd' }
    expect(objectOmit(obj, ['a'])).toEqual({ b: 'b', c: 'c', d: 'd' })
    expect(objectOmit(obj, ['a', 'b'])).toEqual({ c: 'c', d: 'd' })
    expect(objectOmit(obj, ['a', 'b', 'd'])).toEqual({ c: 'c' })
    expect(objectOmit(obj, ['a', 'b', 'c', 'd'])).toEqual({})
    expect(obj).toEqual({ a: 'a', b: 'b', c: 'c', d: 'd' })
  })

  describe('filterDeep', () => {
    test('true', () => {
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
    test('false', () => {
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

  describe('filterFlat', () => {
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
      (item) => item.label
    )
    expect(list2).toHaveLength(4)
    expect(list2[0]).toBe('label1')
    expect(list2[1]).toBe('label3')
    expect(list2[2]).toBe('label4')
    expect(list2[3]).toBe('label7')
  })
})
