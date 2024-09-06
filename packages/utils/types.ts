import { isArray, isObject, isString } from '@vue/shared'
import { isNil } from 'lodash-unified'

export {
  isArray,
  isDate,
  isFunction,
  isObject,
  isPromise,
  isString,
  isSymbol,
} from '@vue/shared'
export { isVNode } from 'vue'

export const isUndefined = (val: any): val is undefined => val === undefined
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'

export function isEmpty(val: unknown) {
  return (!val && val !== 0)
    || (isArray(val) && val.length === 0)
    || (isObject(val) && !Object.keys(val).length)
}

export function isElement(e: unknown): e is Element {
  if (typeof Element === 'undefined')
    return false
  return e instanceof Element
}

export function isPropAbsent(prop: unknown): prop is null | undefined {
  return isNil(prop)
}

export function isStringNumber(val: string): boolean {
  if (!isString(val)) {
    return false
  }
  return !Number.isNaN(Number(val))
}

export function isWindow(val: unknown): val is Window {
  return val === window
}
