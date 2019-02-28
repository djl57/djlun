const originalUnique = (array) => {
  // res用来存储结果
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++ ) {
      if (array[i] === res[j]) {
        break; // 只要想要插入的元素，res中已经存在，就跳出循环
      }
    }
    // 如果想要插入的元素没有与res中的元素重复，那么执行完循环后，j等于resLen，把元素插入到res中
    if (j === resLen) {
      res.push(array[i])
    }
  }
  return res;
}

const indexOfUnique = array => {
  let res = [];
  for (let i = 0, arrayLen = array.length;i < arrayLen; i++) {
    let cur = array[i]
    if (res.indexOf(cur) === -1) {
      res.push(cur)
    }
  }
  return res
}

const sortUnique = array => {
  let res = []
  let sortArr = array.concat().sort() // sort()方法会改变原数组，所以先把原数组复制一遍
  let seen
  for(let i = 0, len = array.length; i < len; i++) {
    if (!i || seen !== sortArr[i]) { // 第一个一定不重复，插入，array中后一个不等于前一个则插入
      res.push(sortArr[i])
    }
    seen = sortArr[i]
  }
  return res
}

const filterUnique = arr => {
  return arr.filter((el, index) => {
    return arr.indexOf(el) === index
  })
}

const objectUnique = arr => {
  let obj = {};
  return arr.filter(el => {
    return obj.hasOwnProperty(typeof el + el) ? false : (obj[typeof el + el] = true) // 先排除new String()出来的，有一项进来后就把
  })
}

const filterSortUnique = arr => {
  return arr.concat().sort().filter((el, index, array) => {
    return !index || el !== array[index-1]
  })
}

const es6FromUnique = array => Array.from(new Set(array))

export {
  originalUnique,
  indexOfUnique,
  sortUnique,
  filterUnique,
  filterSortUnique,
  es6FromUnique,
  objectUnique
}