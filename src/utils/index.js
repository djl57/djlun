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

export {
  dateFormat
}

// Date.prototype.format = function(format)
// {
//  var o = {
//  "M+" : this.getMonth()+1, //month
//  "d+" : this.getDate(),    //day
//  "h+" : this.getHours(),   //hour
//  "m+" : this.getMinutes(), //minute
//  "s+" : this.getSeconds(), //second
//  "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
//  "S" : this.getMilliseconds() //millisecond
//  }
//  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
//  (this.getFullYear()+"").substr(4 - RegExp.$1.length));
//  for(var k in o)if(new RegExp("("+ k +")").test(format))
//  format = format.replace(RegExp.$1,
//  RegExp.$1.length==1 ? o[k] :
//  ("00"+ o[k]).substr((""+ o[k]).length));
//  return format;
// }