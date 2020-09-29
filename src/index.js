
exports.min = function min (array=[]) {
  let number = 0 
  if (array.length > 0 ) {
    number = array.reduce ((acc, rec) => {
        if(rec < acc) {
          return rec
        }
        return acc
    }, 0 )
  }
  return number
}

exports.max = function max (array = []) {
  let number = 0 
  if (array.length > 0 ) {
    number = array.reduce ((acc, rec) => {
        if(rec > acc) {
          return rec
        }
        return acc
    }, 0 )
  }
  return number
}

exports.avg = function avg (array = []) {
  let result = 0
  let number = 0  
  if (array.length > 0 ) {
    number = array.reduce ((acc, rec) => {
        return acc+rec
    }, 0 )
    result = number/ (array.length )
  }
  return result 
}
