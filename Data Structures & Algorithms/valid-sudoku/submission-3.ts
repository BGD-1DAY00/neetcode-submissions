class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for(let i = 0; i < board.length; i ++){
            for(let j = 0; j < board[i][j].length; j++){
                if(board[i][j] == '.') continue
                else{
                    const isRowValid = this.validateRow(board, i, j)
                    const isColValid = this.validateCol(board, i, j)
                    const isBoxValid = this.validateBox(board, i, j)
                    console.log(isRowValid, isColValid, isBoxValid)
                    if(!isRowValid || !isColValid || !isBoxValid) return false
                }
            }
        }

        return true
    }

    validateRow(board, rowIdx, colIdx): boolean{
        /**
         * board[i] cannot contain the same value 
         */
        const targetVal = board[rowIdx][colIdx]
        for(let i = 0; i < board[rowIdx].length; i++){
            if(i != colIdx && board[rowIdx][i] == targetVal) return false
        }
        return true
    }

    validateCol(board, rowIdx, colIdx): boolean{
        const targetVal = board[rowIdx][colIdx]

        for(let i = 0; i < board[rowIdx].length; i++){
            if(i != rowIdx && board[i][colIdx] == targetVal) return false
        }
        
        return true
    }



    validateBox(board, rowIdx, colIdx): boolean {
        const boxRowStart = Math.floor(rowIdx / 3) * 3
        const boxColStart = Math.floor(colIdx / 3) * 3
        const targetVal = board[rowIdx][colIdx]

        for (let r = boxRowStart; r < boxRowStart + 3; r++) {
            for (let c = boxColStart; c < boxColStart + 3; c++) {
                if (r === rowIdx && c === colIdx) continue
                if (board[r][c] === targetVal) return false
            }
        }
        return true
    }
}
