class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if(board.length < 1) return false; 
        let directions = [[0,1],[0,-1],[1,0],[-1,0]]
        // let charSet = new Set();
        let result = false  
        if(word.length == 1){
            for(let i = 0; i< board.length; i++){
                for(let j = 0; j < board[0].length; j++){
                    if(word == board[i][j]){
                    result = true
                    return
                    }
                }
            }
        }


        //board=[
            // ["A","B","C","E"],
            // ["S","F","C","S"],
            // ["A","D","E","E"]
            // ]
        // word="ABCB"

        // [
        //     ["A","B","C","E"],
        //     ["S","F","E","S"],
        //     ["A","D","E","E"]
        //     ]
        // word="ABCESEEEFS"
        const dfs = (row, col, wordIdx, charSet)=>{
            let inRange = row >=0 && col >=0 && row < board.length && col < board[0].length;
            if(!inRange) return
            if(word[wordIdx] != board[row][col]) return;

            let key = `${row}, ${col}`;
            if(charSet.has(key)) return
            charSet.add(key)


            for(let dir of directions){
                let newRow = row + dir[0], newCol = col + dir[1]
                let inRange = newRow >=0 && newCol >=0 && newRow < board.length && newCol < board[0].length; 
                if(!inRange) continue;  
                
                let nextCharAvailable = board[newRow][newCol] == word[wordIdx + 1]  
                if(nextCharAvailable && wordIdx + 1 == word.length -1 && !charSet.has(`${newRow}, ${newCol}`)) {
                    result = true
                    return; 
                }
                if(nextCharAvailable){  
                    dfs(newRow, newCol, wordIdx + 1, charSet)
                }
            }
            charSet.delete(key)
        }

        for(let i = 0; i< board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] == word[0]) {
                    dfs(i, j, 0, new Set())
                }
            }
        }

    
        return result; 

    }
}
