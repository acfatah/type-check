import { getObjectType, isArray, isBuffer } from '../../index.js'

export function getType(value) {
  if (value === null)
    return 'null'

  if (isArray(value))
    return 'Array'

  if (isBuffer(value))
    return 'Buffer'

  // Common object wrapper for primitive type string (new String('abc')).
  if (value instanceof String)
    return 'string'

  // Common object wrapper for primitive type boolean (new Boolean(true))
  if (value instanceof Boolean)
    return 'boolean'

  // Common object wrapper for primitive type number (new Number(42))
  if (value instanceof Number)
    return 'number'

  switch (typeof value) {
    case 'undefined': {
      return 'undefined'
    }

    case 'string': {
      return 'string'
    }

    case 'number': {
      return 'number'
    }

    case 'boolean': {
      return 'boolean'
    }

    case 'function': {
      return getObjectType(value) || 'function'
    }

    case 'bigint': {
      return 'bigint'
    }

    case 'symbol': {
      return 'symbol'
    }

    default:
  }

  return getObjectType(value)
}
