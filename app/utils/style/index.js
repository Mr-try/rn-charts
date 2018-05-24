import { isFunction, isArray, isObject, transform, keys } from 'lodash'
import { PixelRatio } from 'react-native'
import toRem from './rem'
import converterMapping from './style-converter'

export const rem = toRem

const formatStyle = (key, value) => {
  const converters = converterMapping[key]
  if (isFunction(converters)) {
    return converters(value)
  }
  if (isArray(converters)) {
    let tmpValue = value
    converters.forEach((converter) => {
      tmpValue = converter(tmpValue)
    })
    return tmpValue
  }
  return value
}
export const createStyle = (styles) => {
  return transform(styles, (result, value, key) => {
    (isObject(value) && keys(value).length > 0)
      ? result[key] = createStyle(value)
      : result[key] = formatStyle(key, value)
  }, {})
}
// 当前屏幕最细线
export const minLine = 1 / PixelRatio.get()

// 根据时间戳获取年月日
export const formatDate = (timestamp) => {
  const newDate = new Date(timestamp) 
  const day = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()
  const hour = newDate.getHours()
  let minute = newDate.getMinutes()
  const second = newDate.getSeconds()
  minute = minute.length === 1 ? `0+${minute}` : minute
  const fmtDate = `${year}-${month}-${day}   ${hour}:${minute}`
  return {day, month, year, hour, minute, second, fmtDate}
}