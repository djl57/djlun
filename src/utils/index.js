// 日期格式化
const dateFormat = date => {
  let year, month, day, hour, minute, second
  year = date.getFullYear()
  month = setZero(date.getMonth() + 1)
  day = setZero(date.getDate())
  hour = setZero(date.getHours())
  minute = setZero(date.getMinutes())
  second = setZero(date.getSeconds())
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

const setZero = item => {
  if (+item < 10) {
    return `0${item}`
  } else {
    return item
  }
}

import {shallowClone, deepClone} from './clone'
import {originalUnique, indexOfUnique, sortUnique, filterUnique, filterSortUnique, es6FromUnique, objectUnique} from './unique'

export {
  dateFormat,
  shallowClone,
  deepClone,
  originalUnique,
  indexOfUnique,
  sortUnique,
  filterUnique,
  filterSortUnique,
  es6FromUnique,
  objectUnique
}
