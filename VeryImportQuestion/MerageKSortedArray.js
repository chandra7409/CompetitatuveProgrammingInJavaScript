// // Given different K sorted arrays having size n.Your task is to merge them and print sorted array

// Input

// K = 3, n = 4


// inputArray = [
//     [2, 5, 6, 8],


//     [1, 4, 7, 9],


//     [0, 10, 11, 12]
// ]



// Output=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



function MerageKSorted(arr, n, output) {
    var c = 0;
    var k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            output[k++] = arr[i][j];

        }
    }
    output.sort((a, b) => a - b);
}

function PrintArray(arr, size) {
    for (let i = 0; i < size; i++)
        console.log(arr[i] + "");

}


var arr = [
    [2, 5, 6, 8],


    [1, 4, 7, 9],


    [0, 10, 11, 12]
];
var k = 4;
[
    [2, 5, 6, 8],


    [1, 4, 7, 9],


    [0, 10, 11, 12]
]
var n = 3;
var output = Array(n * k).fill(0);
MerageKSorted(arr, n, output);
console.log(PrintArray(output, n * k));