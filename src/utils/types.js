let class2type = {};

// 生成class2type映射
['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Null', 'Undefined'].map(item => {
  class2type["[object " + item + "]"] = item.toLowerCase();
})

const getType = obj => {
  // console.log(typeof obj)
  // console.log(class2type[Object.prototype.toString.call(obj)])
  return typeof obj === 'object' ? 
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj
}

const isEmptyObject = obj => { // 此方法简单用来判断区分{}、{name: 'djlun'}，所以即使obj为null时也会返回true，也没有影响。
  for(let prop in obj) { // 只要循环执行，就说明obj中含有元素，即它不是空对象
    return false
  }
  return true
}

export {
  getType,
  isEmptyObject
}