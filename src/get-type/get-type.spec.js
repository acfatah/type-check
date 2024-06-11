import { describe, expect, it } from 'vitest'
import { fixtures } from '../../test/fixtures.js'
import { getType } from '../../index.js'

describe('getType', () => {
  fixtures.forEach(({ name, valueType, value }) => {
    it(`${name} should return ${valueType}`, () => {
      expect(getType(value)).toBe(valueType)
    })
  })
})
