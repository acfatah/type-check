import { OBJECT_TYPE_NAMES } from '../../index.js'

export function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1)

  return (OBJECT_TYPE_NAMES.includes(objectTypeName)) ? objectTypeName : undefined
}
