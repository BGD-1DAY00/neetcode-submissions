class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // every value check if the value exists within the row 
        // check if it exists within the column 
        // lastly check the square 
        // if false anywhere return false 
        // if true anywhere return true; 


        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board.length; j++){
                if(board[i][j] === ".") continue; 
                const isWithinCol = this.checkCol(board[i][j], i, j, board); 
                const isWithinRow = this.checkRow(board[i][j], i, j, board); 
                const isWithinBox = this.checkBox(board[i][j], i, j, board); 
                if(!isWithinCol || !isWithinRow || !isWithinBox) return false; 
            }
        }

        return true; 
    }

    checkRow(val, row, col, board){
        let k = board[row];
        for(let i = 0; i < k.length; i++){
            if(i === col) continue; 
            if(val === k[i]) return false; 
        }
        return true; 
    }

    checkCol(val, row, col, board){
        for(let i = 0; i < board[0].length; i++){
            if(i === row) continue; 
            if(board[i][col] === val) return false; 
        }
        return true; 
    }

    checkBox(val, row, col, board){
        // 0,0 --> row = 0/3 -> 0 ; col 0/3 --> 0
        //3,0. --> row (3/3) * 3 -- > 3; col 0/3 --> 0
        // 6,0 -- > row (6/3) * 3 -- > 6; col 0/6 * 3 -- >0; 
        // 3,3 -- > row 3 col 3
        // 1,3 -- > row 0 col 3
        let startRow = Math.floor(row/3) * 3; 
        let startCol = Math.floor(col/ 3) * 3; 
        for(let i = startRow; i < 3; i++){
            for(let j = startCol; j < 3; j++){
                if(row === i && col === j) continue; 
                if(board[i][j] === val) return false; 
            }
        }

        return true; 
    }
}
