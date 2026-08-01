class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        def is_valid_row_and_col(board, i, j): 
            def is_valid_row(board, i, j):
                for idx in range(len(board)):
                    if idx != j and board[i][j] == board[i][idx]:
                        return False
                return True
            def is_valid_col(board, i, j):
                for idx in range(len(board)):
                    if idx != i and board[i][j] == board[idx][j]:
                        return False
                return True

            return is_valid_row(board, i,j) and is_valid_col(board, i, j)

        mapping = {
            (0,0):[],
            (0,1):[],
            (0,2):[],
            (1,0):[],
            (1,1):[],
            (1,2):[],
            (2,0):[],
            (2,1):[],
            (2,2):[]
        }

        for i in range(len(board)):
            for j in range(len(board)):
                val = board[i][j]
                if val == ".":
                    continue
                is_valid_row_and_col_value = is_valid_row_and_col(board, i, j)
                mapping_val = mapping[(i//3,j//3)]
                if not is_valid_row_and_col_value or val in mapping_val:
                    return False
                mapping_val.append(val)
        return True