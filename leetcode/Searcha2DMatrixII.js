/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let result = false
    let x = matrix[0].length, y = matrix.length
    for(i=0;i<y;i++){
       if(matrix[i][0]>target || matrix[i][x-1]<target) continue
        for(j=0;j<x;j++){
            if(matrix[0][j]>target || matrix[y-1][j]<target) continue
            if(matrix[i][j] === target) result = true
        }
    }
    return result
};