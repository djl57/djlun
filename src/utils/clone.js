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
  shallowClone, deepClone
}