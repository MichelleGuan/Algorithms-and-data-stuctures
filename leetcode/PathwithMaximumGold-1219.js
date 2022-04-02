//Version One
 const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
 var getMaximumGold = function(grid) {
     let max_gold = 0
     let rows = grid.length, cols = grid[0].length
     for(let i = 0; i< rows; i++){
         for(let j=0; j< cols; j++){
             max_gold = Math.max(max_gold, coreGetGold( grid,rows, cols, i, j))
         }
     }
     return max_gold
 };
 var coreGetGold = function( grid, rows, cols, row, col) {
     let gold = 0
     if(col < 0 || row < 0 || col == cols || row == rows || grid[row][col] == 0) {
        return 0
     }
     const cur = grid[row][col]
     grid[row][col] = 0
     for(const dir of DIRS){
         gold = Math.max(gold, coreGetGold(grid, rows, cols, row+dir[0], col+dir[1]))
     }
     grid[row][col] = cur
     return  gold + cur
 }

 