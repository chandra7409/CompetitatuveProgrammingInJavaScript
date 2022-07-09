// Consider an N * N chessboard.Knight’ s Tour problem is to print order when Knight visits that block of the
// chessboard.Initially, the knight will be placed at the first block of the chessboard.The rule is that the
// knight visits each block exactly once.





let N = 8;


function isSafe(x, y, output) {
    return (x >= 0 && x < N && y >= 0 &&
        y < N && output[x][y] == -1);
}


function print(output) {
    arrText = '';
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            arrText += output[i][j] + ' ';

        }
        console.log(arrText);
        arrText = '';
    }
}


function solveKnightTour() {
    let output = new Array(8);
    for (var i = 0; i < output.length; i++) {
        output[i] = new Array(2);
    }

    for (let x = 0; x < N; x++)
        for (let y = 0; y < N; y++)
            output[x][y] = -1;

    let xMove = [2, 1, -1, -2, -2, -1, 1, 2];
    let yMove = [1, 2, 2, 1, -1, -2, -2, -1];


    output[0][0] = 0;


    if (!solveKnightTourUtil(0, 0, 1, output, xMove, yMove)) {
        console.log("Solution does not exist");
        return false;
    } else
        print(output);

    return true;
}

function solveKnightTourUtil(x, y, movei, output, xMove, yMove) {
    let k, x_next, y_next;
    if (movei == N * N)
        return true;

    for (k = 0; k < 8; k++) {
        x_next = x + xMove[k];
        y_next = y + yMove[k];

        if (isSafe(x_next, y_next, output)) {
            output[x_next][y_next] = movei;
            if (solveKnightTourUtil(x_next, y_next, movei + 1,
                    output, xMove, yMove))
                return true;
            else
                output[x_next][y_next] = -1;
        }
    }
    return false;
}


solveKnightTour();