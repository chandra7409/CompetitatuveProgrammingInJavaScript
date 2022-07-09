let N = 4;

function print(chessboard) {
    arrText = '';
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            arrText += chessboard[i][j] + ' ';
        }
        console.log(arrText);
        arrText = '';
    }

}

function isSafe(chessboard, row, col) {
    var i = 0;
    var j = 0;

    for (i = 0; i < col; i++) {
        if (chessboard[row][i] == 1) {
            return false;
        }
    }

    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (chessboard[i][j] == 1) {
            return false;
        }
    }

    for (i = row, j = col; j >= 0 && i < this.N; i++, j--) {
        if (chessboard[i][j] == 1) {
            return false;
        }
    }
    return true;
}

function solveNQueenUtil(chessboard, col) {

    if (col >= this.N) {
        return true;
    }

    for (var i = 0; i < this.N; i++) {

        if (this.isSafe(chessboard, i, col)) {

            chessboard[i][col] = 1;

            if (this.solveNQueenUtil(chessboard, col + 1) == true) {
                return true;
            }

            chessboard[i][col] = 0;
        }
    }
    return false;
}

function solveNQueen() {
    var chessboard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    if (this.solveNQueenUtil(chessboard, 0) == false) {
        console.log("Solution does not exist");
        return false;
    }
    this.print(chessboard);
    return true;
}

solveNQueen();