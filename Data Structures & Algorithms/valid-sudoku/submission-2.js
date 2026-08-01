class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    constructor() {
        this.hashMap = new Map([
            ["0,0", new Set()],
            ["0,1", new Set()],
            ["0,2", new Set()],
            ["1,0", new Set()],
            ["1,1", new Set()],
            ["1,2", new Set()],
            ["2,0", new Set()],
            ["2,1", new Set()],
            ["2,2", new Set()],
        ]);
    }

    isValidSudoku(board) {
        if(!this.buildWorkingSet(board)){
            return false
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] != ".") {
                    let row = Math.floor(i / 3);
                    let col = Math.floor(j / 3); // Corrected column calculation

                    // Check for duplicates in the 3x3 box
                    let isValidSquare = this.hashMap.get(`${row},${col}`).has(board[i][j]);

                    // Check for duplicates in row and column
                    let isValidRowVal = this.isValidRow(board, i, j);
                    let isValidColVal = this.isValidCol(board, i, j);

                    // If any check fails, return false
                    if (!isValidSquare || !isValidColVal || !isValidRowVal) return false;
                }
            }
        }
        return true; // Board is valid
    }

    isValidRow(board, i, j) {
        let row = board[i];
        for (let k = 0; k < row.length; k++) {
            if (k != j && row[k] == row[j]) return false;
        }
        return true;
    }

    isValidCol(board, i, j) {
        for (let k = 0; k < board[0].length; k++) {
            if (board[k][j] == board[i][j] && k != i) return false;
        }
        return true;
    }

    buildWorkingSet(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] != ".") {
                    let row = Math.floor(i / 3);
                    let col = Math.floor(j / 3);
                    if(this.hashMap.get(`${row},${col}`).has(board[i][j])){
                        return false
                    }
                    this.hashMap.get(`${row},${col}`).add(board[i][j]);
                }
            }
        }

        return true
    }
}