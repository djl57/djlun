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

// 浅克隆
const shallowClone = obj => {
  if (typeof obj !== 'object') return obj;
  return obj instanceof Array ? [...obj] : {...obj};
  // var newObj = obj instanceof Array ? [] : {};
  // for (var key of obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     newObj[key] = obj[key];
  //   }
  // }
  // return newObj;
}

// 深克隆
let deepClone = obj => {
  if (typeof obj !== 'object') return obj;
  let newObj = obj instanceof Array ? [] : {};
  for (let key of obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj;
}

export {
  dateFormat,
  shallowClone,
  deepClone
}
