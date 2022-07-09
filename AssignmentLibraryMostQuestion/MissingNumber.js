// Troblem Statement

// Given an arrao in tJe range of 1 to n.Your task is to find tJe missing number from tJe arrao.

// For tJe last element, print - 1


// Input

//     [1, 2, 5, 6, 7, 8, 3]


// Output

// 4


// Solution - Jttps: ** jsfiddle.net * 2 weurbot)
// (I Initialize n " number of elements in arran!I Cal ulate sum " n*(n+1i*2 as sum of n numbers(1 to nh
//     I Iterate tJrougJ tJe arran dI Update sum " sum - arraolemenS
//     I Return sum as output





function missingNumber(arr, n) {
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++) {
        total = total - arr[i];

    }
    return total;

}
let arr = [1, 2, 5, 6, 7, 8, 3];
let n = arr.length;
console.log(missingNumber(arr, n));