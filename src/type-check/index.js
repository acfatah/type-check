import { getObjectType, getType } from '../../index.js'

export function isArray(value) {
  return !!value && Array.isArray(value)
}

export function isAsyncFunction(value) {
  return getObjectType(value) === 'AsyncFunction'
}

export function isBigint(value) {
  return getType(value) === 'bigint'
}

export function isBigInt64Array(value) {
  return getObjectType(value) === 'BigInt64Array'
}

export function isBigUint64Array(value) {
  return getObjectType(value) === 'BigUint64Array'
}

export function isBlob(value) {
  return getObjectType(value) === 'Blob'
}

export function isBoolean(value) {
  return [true, false].includes(value)
}

export function isBuffer(value) {
  return (value?.constructor?.isBuffer?.(value) ?? false)
}

export function isClass(value) {
  return isFunction(value) && value.toString().startsWith('class ')
}

export function isDate(value) {
  return getType(value) === 'Date'
}

// When `null` is defined, it means the variable is defined but has no assigned value.
export function isDefined(value) {
  return value !== undefined
}

export function isEmpty(value) {
  if (isUndefined(value))
    return true

  // We consider `null` as empty
  if (isNull(value))
    return true

  if (value === '')
    return true

  if (getType(value) === 'boolean' && !value)
    return true

  if (isEmptyArray(value))
    return true

  if (isEmptyObject(value))
    return true

  if (isEmptyMap(value))
    return true

  if (isEmptySet(value))
    return true

  if (isEmptyBuffer(value))
    return true

  return false
}

export function isEmptyArray(value) {
  return isArray(value) && value.length === 0
}

export function isEmptyBuffer(value) {
  return isBuffer(value) && value.length === 0
}

export function isEmptyMap(value) {
  return isMap(value) && value.size === 0
}

export function isEmptyObject(value) {
  if (!isObject(value))
    return false

  // The fastest way to check whether an object is empty
  // https://stackoverflow.com/a/34491966/1866528
  // TODO: what about Iterable and Proxy classes?
  let hasNoKeys = true
  for (const key in value) {
    if (key) {
      hasNoKeys = false

      break
    }
  }

  return hasNoKeys
}

export function isEmptySet(value) {
  return isSet(value) && value.size === 0
}

export function isEmptyString(value) {
  return isString(value) && value.length === 0
}

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
export function isFalsy(value) {
  return !value
}

// JavaScript does not have the distinction of "floating point numbers"
// and "integers" on the language level.
export function isFloat(value) {
  // return getType(value) === 'number' && !Number.isInteger(value) && !Number.isFinite(value)
  const type = getType(value)

  return type === 'number'
    && !Number.isInteger(value)
    && Number.isFinite(value)
}

export function isFloat32Array(value) {
  return getObjectType(value) === 'Float32Array'
}

export function isFloat64Array(value) {
  return getObjectType(value) === 'Float64Array'
}

export function isFormData(value) {
  return getType(value) === 'FormData'
}

export function isFunction(value) {
  return ['function', 'AsyncFunction'].includes(getType(value))
}

export function isInt8Array(value) {
  return getObjectType(value) === 'Int8Array'
}

export function isInt16Array(value) {
  return getObjectType(value) === 'Int16Array'
}

export function isInt32Array(value) {
  return getObjectType(value) === 'Int32Array'
}

export function isInteger(value) {
  return Number.isInteger(value)
}

export function isMap(value) {
  return getType(value) === 'Map'
}

export function isNaNValue(value) {
  return getType(value) === 'number' && Number.isNaN(value)
}

export function isNotEmptyArray(value) {
  return isArray(value) && value.length > 0
}

export function isNull(value) {
  return getType(value) === 'null'
}

export function isNumber(value) {
  return ['number', 'bigint'].includes(getType(value)) && !Number.isNaN(value)
}

export function isNegativeNumber(value) {
  return isNumber(value) && value < 0
}

export function isPositiveNumber(value) {
  return isNumber(value) && value > 0
}

// The `typeof` operator returns `'object'` when the operand is `null`. This is
// because `null` is a primitive value that is represented as a distinct
// entity in the language, but it is not a member of any object in the
// JavaScript type system.
export function isObject(value) {
  return getType(value) === 'Object'
}

export function isPlainObject(value) {
  if (getType(value) !== 'Object')
    return false

  const prototype = Object.getPrototypeOf(value)
  const isObjectConstructor = prototype.constructor === Object
  const isObjectPrototype = prototype === Object.prototype

  return !!prototype && isObjectConstructor && isObjectPrototype
}

export function isPromise(value) {
  return getObjectType(value) === 'Promise'
}

export function isRegExp(value) {
  return getObjectType(value) === 'RegExp'
}

export function isSafeInteger(value) {
  return isInteger(value) && Number.isSafeInteger(value)
}

export function isSet(value) {
  return getType(value) === 'Set'
}

export function isString(value) {
  return getType(value) === 'string'
}

export function isSymbol(value) {
  return getType(value) === 'symbol'
}

export function isTimestamp(value) {
  const A_64_BIT_FLOATING_POINT_NUMBER = 2 ** 53

  return (
    getType(value) === 'number'
    && isPositiveNumber(value)
    && isInteger(value)
    && value < A_64_BIT_FLOATING_POINT_NUMBER
  )
}

// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
export function isTruthy(value) {
  return !!value
}

export function isUint8Array(value) {
  return getObjectType(value) === 'Uint8Array'
}

export function isUint8ClampedArray(value) {
  return getObjectType(value) === 'Uint8ClampedArray'
}

export function isUint16Array(value) {
  return getObjectType(value) === 'Uint16Array'
}

export function isUint32Array(value) {
  return getObjectType(value) === 'Uint32Array'
}

export function isUndefined(value) {
  return getType(value) === 'undefined'
}

export function isUnixTimestamp(value) {
  return (
    getType(value) === 'number'
    && isInteger(value)
    && value >= 0
  )
}

export function isValidArrayIndex(value) {
  const index = Number.parseFloat(String(value))

  return index >= 0 && Math.floor(index) === index && Number.isFinite(value)
}

export function isWeakMap(value) {
  return getObjectType(value) === 'WeakMap'
}

export function isWeakSet(value) {
  return getObjectType(value) === 'WeakSet'
}

export function isWhitespace(value) {
  return isString(value) && /^\s+$/.test(value)
}
