const arr = [3,1,4,2,4,5]
var quickSort = function(arr) {
    if (arr.length <= 1) {
      return arr
    }
    //must cut pivot off
    var pivot = arr.splice(0, 1)[0]
    var left = []
    var right = []
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat([pivot], quickSort(right))
  };
console.log(quickSort(arr))
