// Given an array of length N, where every element is present twice and only one element is present
// once.Find the unique element

// Sample input: N = 5, Array = [3, 2, 1, 2, 3]

// Sample output: 1


function findSingle(ar, N) {

    // Do XOR of all elements and return

    let res = ar[0];

    for (let i = 1; i < N; i++)

        res = res ^ ar[i];


    return res;

}


let Array = [3, 2, 1, 2, 3];

let N = 5;

console.log("Element occurring once is " +

    findSingle(Array, N));