import { describe, expect, it } from 'vitest'
import { fixtures } from '../../test/fixtures.js'
import {
  isArray,
  isAsyncFunction,
  isBigInt64Array,
  isBigUint64Array,
  isBigint,
  isBlob,
  isBoolean,
  isBuffer,
  isClass,
  isDate,
  isDefined,
  isEmpty,
  isEmptyArray,
  isEmptyMap,
  isEmptyObject,
  isEmptySet,
  isEmptyString,
  isFalsy,
  isFloat,
  isFloat32Array,
  isFloat64Array,
  isFormData,
  isFunction,
  isInt16Array,
  isInt32Array,
  isInt8Array,
  isInteger,
  isMap,
  isNaNValue,
  isNegativeNumber,
  isNotEmptyArray,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isPositiveNumber,
  isRegExp,
  isString,
  isSymbol,
  isUint16Array,
  isUint32Array,
  isUint8Array,
  isUint8ClampedArray,
  isUndefined,
} from '../../index.js'

const invalidArrayIndexes = [
  { valueType: 'NaN ', value: Number.NaN },
  { valueType: 'infinity', value: Number.POSITIVE_INFINITY },
  { valueTyep: 'undefined', value: undefined },
  { valueType: 'null', value: null },
]

const testCases = [
  {
    description: 'isArray',
    truthyValues: [
      'array',
      'empty array',
      'nested array',
    ],
    method: isArray,
  },

  {
    description: 'isAsyncFunction',
    truthyValues: [
      'async function',
    ],
    method: isAsyncFunction,
  },

  {
    description: 'isBigint',
    truthyValues: [
      'bigint',
    ],
    method: isBigint,
  },

  {
    description: 'isBigInt64Array',
    truthyValues: [
      'BigInt64Array',
    ],
    method: isBigInt64Array,
  },

  {
    description: 'isBigUint64Array',
    truthyValues: [
      'BigUint64Array',
    ],
    method: isBigUint64Array,
  },

  {
    description: 'isBlob',
    truthyValues: [
      'blob',
    ],
    method: isBlob,
  },

  {
    description: 'isBoolean',
    truthyValues: [
      'boolean false',
      'boolean true',
    ],
    method: isBoolean,
  },

  {
    description: 'isBuffer',
    truthyValues: [
      'buffer',
      'empty buffer',
    ],
    method: isBuffer,
  },

  {
    description: 'isClass',
    truthyValues: [
      'class',
    ],
    method: isClass,
  },

  {
    description: 'isDate',
    truthyValues: [
      'date',
    ],
    method: isDate,
  },

  {
    description: 'isDefined',
    truthyValues: [
      'array buffer',
      'array',
      'async function',
      'bigint',
      'BigInt64Array',
      'BigUint64Array',
      'blob',
      'boolean false',
      'boolean true',
      'buffer',
      'class',
      'date',
      'empty array',
      'empty buffer',
      'empty map',
      'empty object',
      'empty set',
      'empty string',
      'float zero',
      'float',
      'Float32Array',
      'Float64Array',
      'form data',
      'function',
      'hexadecimal',
      'infinity',
      'Int16Array',
      'Int32Array',
      'Int8Array',
      'integer',
      'map',
      'NaN',
      'negative float zero',
      'negative float',
      'negative infinity',
      'negative integer',
      'negative zero',
      'nested array',
      'null', // null is defined as a value
      'numeric string',
      'object',
      'promise',
      'regexp',
      'set',
      'string',
      'string zero',
      'symbol',
      'Uint16Array',
      'Uint32Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'unix timestamp',
      'unsafe integer',
      'unsafe negative integer',
      'weakmap',
      'weakset',
      'whitespace',
      'zero',
    ],
    method: isDefined,
  },

  {
    description: 'isEmpty',
    truthyValues: [
      'boolean false',
      'empty array',
      'empty buffer',
      'empty map',
      'empty object',
      'empty set',
      'empty string',
      'null',
      'undefined',
    ],
    method: isEmpty,
  },

  {
    description: 'isEmptyArray',
    truthyValues: [
      'empty array',
    ],
    method: isEmptyArray,
  },

  {
    description: 'isEmptyMap',
    truthyValues: [
      'empty map',
    ],
    method: isEmptyMap,
  },

  {
    description: 'isEmptyObject',
    truthyValues: [
      'empty object',
    ],
    method: isEmptyObject,
  },

  {
    description: 'isEmptySet',
    truthyValues: [
      'empty set',
    ],
    method: isEmptySet,
  },

  {
    description: 'isEmptyString',
    truthyValues: [
      'empty string',
    ],
    method: isEmptyString,
  },

  {
    // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    description: 'isFalsy',
    truthyValues: [
      'bigint',
      'boolean false',
      'empty string',
      'float zero',
      'NaN',
      'negative float zero',
      'negative zero',
      'null',
      'undefined',
      'zero',
      // document.all // TODO: should returns false but the document object is undefined
    ],
    method: isFalsy,
  },

  {
    description: 'isFloat',
    truthyValues: [
      'float',
      'negative float',
    ],
    method: isFloat,
  },

  {
    description: 'isFloat32Array',
    truthyValues: [
      'Float32Array',
    ],
    method: isFloat32Array,
  },

  {
    description: 'isFloat64Array',
    truthyValues: [
      'Float64Array',
    ],
    method: isFloat64Array,
  },

  {
    description: 'isFormData',
    truthyValues: [
      'form data',
    ],
    method: isFormData,
  },

  {
    description: 'isFunction',
    truthyValues: [
      'class',
      'function',
      'async function',
    ],
    method: isFunction,
  },

  {
    description: 'isInt8Array',
    truthyValues: [
      'Int8Array',
    ],
    method: isInt8Array,
  },

  {
    description: 'isInt16Array',
    truthyValues: [
      'Int16Array',
    ],
    method: isInt16Array,
  },

  {
    description: 'isInt32Array',
    truthyValues: [
      'Int32Array',
    ],
    method: isInt32Array,
  },

  {
    description: 'isInteger',
    truthyValues: [
      'zero',
      'integer',
      'unsafe integer',
      'negative zero',
      'negative integer',
      'unsafe negative integer',
      'unix timestamp',
      'hexadecimal',

      // there is no float type in Javascript. It simply returns zero
      'float zero',
      'negative float zero',
    ],
    method: isInteger,
  },

  {
    description: 'isMap',
    truthyValues: [
      'empty map',
      'map',
    ],
    method: isMap,
  },

  {
    description: 'isNaNValue',
    truthyValues: [
      'NaN',
    ],
    method: isNaNValue,
  },

  {
    description: 'isNotEmptyArray',
    truthyValues: [
      'array',
      'nested array',
    ],
    method: isNotEmptyArray,
  },

  {
    description: 'isNull',
    truthyValues: [
      'null',
    ],
    method: isNull,
  },

  {
    description: 'isNumber',
    truthyValues: [
      'bigint',
      'integer',
      'unsafe integer',
      'float',
      'float zero',
      'hexadecimal',
      'zero',
      'infinity',
      'negative integer',
      'unsafe negative integer',
      'negative float',
      'negative float zero',
      'negative zero',
      'negative infinity',
      'unix timestamp',
    ],
    method: isNumber,
  },

  {
    description: 'isNegativeNumber',
    truthyValues: [
      'negative float',
      'negative infinity',
      'negative integer',
      'unsafe negative integer',
    ],
    method: isNegativeNumber,
  },

  // {
  //   description: 'isObject',
  //   truthyValues: [
  //     'blob',
  //     'map',
  //     'empty map',
  //     'object',
  //     'empty object',
  //     'promise',
  //     'regexp',
  //     'set',
  //     'empty set',
  //     'weakmap',
  //     'weakset',
  //   ],
  //   method: isObject,
  // },

  // {
  //   description: 'isPlainObject',
  //   truthyValues: [
  //     'empty object',
  //   ],
  //   method: isPlainObject,
  // },

  {
    description: 'isPositiveNumber',
    truthyValues: [
      'float',
      'infinity',
      'integer',
      'hexadecimal',
      'unix timestamp',
      'unsafe integer',
    ],
    method: isPositiveNumber,
  },

  // {
  //   description: 'isPromise',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isPromise,
  // },

  {
    description: 'isRegExp',
    truthyValues: [
      'regexp',
    ],
    method: isRegExp,
  },

  // {
  //   description: 'isSafeInteger',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isSafeInteger,
  // },

  {
    description: 'isUint8Array',
    truthyValues: [
      'Uint8Array',
      'buffer', // Using Buffer.from method returns an instance of Uint8Array
      'empty buffer',
    ],
    method: isUint8Array,
  },

  {
    description: 'isUint8ClampedArray',
    truthyValues: [
      'Uint8ClampedArray',
    ],
    method: isUint8ClampedArray,
  },

  {
    description: 'isUint16Array',
    truthyValues: [
      'Uint16Array',
    ],
    method: isUint16Array,
  },

  {
    description: 'isUint32Array',
    truthyValues: [
      'Uint32Array',
    ],
    method: isUint32Array,
  },

  {
    description: 'isString',
    truthyValues: [
      'string',
      'string zero',
      'numeric string',
      'empty string',
      'whitespace',
    ],
    method: isString,
  },

  {
    description: 'isSymbol',
    truthyValues: [
      'symbol',
    ],
    method: isSymbol,
  },

  // {
  //   description: 'isTimestamp',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isTimestamp,
  // },

  // {
  //   description: 'isTruty',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isTruty,
  // },

  {
    description: 'isUndefined',
    truthyValues: [
      'undefined',
    ],
    method: isUndefined,
  },

  // {
  //   description: 'isUnixTimestamp',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isUnixTimestamp,
  // },

  // {
  //   description: 'isValidArrayIndex',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isValidArrayIndex,
  // },

  // {
  //   description: 'isWeakMap',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isWeakMap,
  // },

  // {
  //   description: 'isWeakSet',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isWeakSet,
  // },

  // {
  //   description: 'isWhitespace',
  //   truthyValues: [
  //     // TODO
  //   ],
  //   method: isWhitespace,
  // },
]

testCases.forEach(({ description, truthyValues, method }) => {
  describe(description, () => {
    truthyValues.forEach((truthyValue) => {
      it(`should have "${truthyValue}" fixture`, () => {
        expect(fixtures.find(fixture => fixture.name === truthyValue)).toBeDefined()
      })
    })

    const truthyFixtures = fixtures.filter(fixture => truthyValues.includes(fixture.name))
    const falsyFixtures = fixtures.filter(fixture => !truthyValues.includes(fixture.name))

    truthyFixtures.forEach(({ name, value }) => {
      it(`should return true for "${name}"`, () => {
        expect(method(value)).toBeTruthy()
      })
    })

    falsyFixtures.forEach(({ name, value }) => {
      it(`should return false for "${name}"`, () => {
        expect(method(value)).toBeFalsy()
      })
    })
  })
})
