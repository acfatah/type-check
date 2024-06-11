const mapObject = new Map()
mapObject.set('key', 'value')

export const fixtures = [
  { name: 'undefined', valueType: 'undefined', value: undefined },
  { name: 'null', valueType: 'null', value: null },
  { name: 'boolean true', valueType: 'boolean', value: true },
  { name: 'boolean false', valueType: 'boolean', value: false },
  { name: 'symbol', valueType: 'symbol', value: Symbol('symbol') },
  { name: 'form data', valueType: 'FormData', value: new FormData() },
  { name: 'class', valueType: 'function', value: class AClass {} },

  // TODO: fixture for html element
  // { name: 'html element', valueType: 'HTMLElement', value: document.createElement('div'), },

  // array
  { name: 'array', valueType: 'Array', value: [1, 2, 3] },
  { name: 'nested array', valueType: 'Array', value: [[1, 2, 3], [4, 5, 6]] },
  { name: 'empty array', valueType: 'Array', value: [] },

  // buffers
  { name: 'buffer', valueType: 'Buffer', value: Buffer.from([1, 2, 3]) },
  { name: 'empty buffer', valueType: 'Buffer', value: Buffer.from([]) },
  { name: 'array buffer', valueType: 'ArrayBuffer', value: new ArrayBuffer(1) },
  { name: 'BigInt64Array', valueType: 'BigInt64Array', value: new BigInt64Array() },
  { name: 'BigUint64Array', valueType: 'BigUint64Array', value: new BigUint64Array() },
  { name: 'Float32Array', valueType: 'Float32Array', value: new Float32Array() },
  { name: 'Float64Array', valueType: 'Float64Array', value: new Float64Array() },
  { name: 'Int16Array', valueType: 'Int16Array', value: new Int16Array() },
  { name: 'Int32Array', valueType: 'Int32Array', value: new Int32Array() },
  { name: 'Int8Array', valueType: 'Int8Array', value: new Int8Array() },
  { name: 'Uint16Array', valueType: 'Uint16Array', value: new Uint16Array() },
  { name: 'Uint32Array', valueType: 'Uint32Array', value: new Uint32Array() },
  { name: 'Uint8Array', valueType: 'Uint8Array', value: new Uint8Array() },
  { name: 'Uint8ClampedArray', valueType: 'Uint8ClampedArray', value: new Uint8ClampedArray() },

  // functions
  { name: 'function', valueType: 'function', value: () => {} },

  // AsyncFunction is a made up type to describe a Promise returned function
  { name: 'async function', valueType: 'AsyncFunction', value: async () => {} },

  // numbers
  { name: 'zero', valueType: 'number', value: 0 },
  { name: 'float zero', valueType: 'number', value: 0.0 },
  { name: 'negative zero', valueType: 'number', value: -0 },
  { name: 'negative float zero', valueType: 'number', value: -0.0 },
  { name: 'integer', valueType: 'number', value: 123 },
  { name: 'negative integer', valueType: 'number', value: -123 },
  { name: 'float', valueType: 'number', value: 123.45 },
  { name: 'negative float', valueType: 'number', value: -123.45 },
  { name: 'bigint', valueType: 'bigint', value: 0n },
  { name: 'hexadecimal', valueType: 'number', value: 0x2A },
  { name: 'NaN', valueType: 'number', value: Number.NaN },
  { name: 'infinity', valueType: 'number', value: Number.POSITIVE_INFINITY },
  { name: 'negative infinity', valueType: 'number', value: Number.NEGATIVE_INFINITY },
  { name: 'unsafe integer', valueType: 'number', value: Number.MAX_SAFE_INTEGER + 1 },
  { name: 'unsafe negative integer', valueType: 'number', value: Number.MIN_SAFE_INTEGER - 1 },

  // strings
  { name: 'string', valueType: 'string', value: 'string' },
  { name: 'string zero', valueType: 'string', value: '0' },
  { name: 'numeric string', valueType: 'string', value: '1234' },
  { name: 'empty string', valueType: 'string', value: '' },
  { name: 'whitespace', valueType: 'string', value: '   ' },

  // objects
  { name: 'blob', valueType: 'Blob', value: new Blob() },
  { name: 'map', valueType: 'Map', value: mapObject },
  { name: 'empty map', valueType: 'Map', value: new Map() },
  { name: 'object', valueType: 'Object', value: { key: 'value' } },
  { name: 'empty object', valueType: 'Object', value: {} },
  { name: 'promise', valueType: 'Promise', value: new Promise(() => {}) },
  { name: 'regexp', valueType: 'RegExp', value: /regex/ },
  { name: 'set', valueType: 'Set', value: new Set([1, 2, 3]) },
  { name: 'empty set', valueType: 'Set', value: new Set() },
  { name: 'weakmap', valueType: 'WeakMap', value: new WeakMap() },
  { name: 'weakset', valueType: 'WeakSet', value: new WeakSet() },

  // datetime
  { name: 'date', valueType: 'Date', value: new Date() },
  { name: 'unix timestamp', valueType: 'number', value: 1234567890 },
]

const truthyValues = [
  true,
  {},
  [],
  42,
  '0',
  'false',
  new Date(),
  -42,
  12n,
  3.14,
  -3.14,
  Infinity,
  -Infinity,
]
