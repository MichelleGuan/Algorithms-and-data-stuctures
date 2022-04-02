// const arr = [3,1,4,2,4,5]
// var quickSort = function(arr) {
//     if (arr.length <= 1) {
//       return arr
//     }
//     //must cut pivot off
//     var pivot = arr.splice(0, 1)[0]
//     var left = []
//     var right = []
  
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i])
//       } else {
//         right.push(arr[i])
//       }
//     }
//     return quickSort(left).concat([pivot], quickSort(right))
//   };
// console.log(quickSort(arr))


// const arr = [1,4,7,2,3,9,0,6,3,5,7,2,1,8]
// const fastSort = (arr)=>{
//     //base condition
//     if( arr.length <=1 ){
//         return arr
//     }
//     let pivotNum = Math.floor(arr.length/2)
//     let pivot = arr.splice(pivotNum, 1)[0]
//     let lower = [], larger = []
//     for(let i = 0; i< arr.length;i++){
//         if(arr[i]<= pivot){
//             lower.push(arr[i])
//         }else{
//             larger.push(arr[i])
//         }
//     }
//     //loop condition
//     return fastSort(lower).concat([pivot],fastSort(larger))
// }
// console.log(fastSort(arr))

const arr = [1,4,7,2,3,9,0,6,3,5,7,2,1,8]
const selectionSort = (arr)=> {
    let newArr = []
    let len = arr.length
    for(let i = 0; i< len; i++){
        let lowest = Infinity
        let lowestIndex = -1
        for(let i = 0; i< arr.length; i++){
            if(arr[i]<lowest){
               lowest = arr[i]
               lowestIndex = i
            }
        }
        newArr.push(lowest)
        arr.splice(lowestIndex,1)
    }
    return newArr
}
console.log(selectionSort(arr))