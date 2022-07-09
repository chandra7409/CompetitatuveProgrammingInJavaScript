// Given a 2 D array.Your task is to rotate it in place by 90 degrees in anti clockwise direction without
// using any extra space.For example -
//     Input: [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// Output: [
//     [3, 6, 9],
//     [2, 5, 8],
//     [1, 4, 7]
// ]



// Steps h
// ) > We have N / 2 cycles in a matrix of size N * N.We need to process those cycles one by one >
//     "> Iterate through i=0 to N/2 - 1 > Rotate 4 elements in a cycle at a timZ
// S > Print final matrix



function RotateArray(N, arr) {
    for (let i = 0; i < N; i++) {
        for (let j = x; j < N - x - 1; j++) {
            let temp = arr[x][j];
            arr[x][j] = arr[j][N - 1 - x];
            arr[j][N - 1 - x] = arr[N - 1 - x][N - 1 - j];
            arr[N - 1 - x][N - 1 - j] = arr[N - 1 - j][x];

            arr[N - 1 - j][x] = temp;
        }
    }
}



function print(N, mat) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++)
            document.write(
                " " + mat[i][j]);

        document.write("<br>");
    }
    document.write("<br>");
}

let N = 4;
let input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

rotateMatrix(N, input);


print(N, input);