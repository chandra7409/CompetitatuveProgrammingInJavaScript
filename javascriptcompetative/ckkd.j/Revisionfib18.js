// function ArraySorted(arr, i) {
//     if (i == arr.length - 1) return true;
//     let value = ArraySorted(arr, i + 1);
//     return value && (arr[i] <= arr[i + 1]);


// }
// //let arr = [5, 6, 4, 3, 2];

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(ArraySorted(arr, 0));




//============friends pairing ====


// function friends(n) {
//     if (n == 1 && n == 2);
//     return n;
//     return friends(n - 1) + (n - 1) * friends(n - 2);

// }
// console.log(friends(6));



//====================Tiling by using the recursion  function =================

// function numberOfWays(c) {
//     if (c === 0) return 1;
//     if (c === 1) return 1;
//     return numberOfWays(c - 1) + numberOfWays(c - 2);
// }
// var b = prompt("Enter the size of the tile board: 2 x ?");
// console.log("The total number of ways in which the tiles of size 2x1 can be used to fill a tile board of size 2x" + b + " is " + numberOfWays(b));





//============print the subsequence Array bu using the recursion function============

// function printSubsequence(array, index, output) {
//     if (index === array.length) {
//         if (output.length > 0) {
//             console.log(output);
//         }

//     } else {
//         printSubsequence(array, index + 1, output);
//         output.push(array[index]);
//         printSubsequence(array, index + 1, output);
//         output.pop();
//     }
//     return;
// }
// let array = [1, 2, 3];
// let output = new Array();
// printSubsequence(array, 0, output);




//============Generate the parenthesis by using the recursion  function ============

// function generateParenthesis(n) {
//     let close = 0; //to store the result of the recursion function
//     let open = 0; //to store our string which is empty

//     let res = []; //to store count of open brackets '('
//     let str = ""; //to store count of close brackets ')'
//     bracktrack(res, open, close, str, n);
//     console.log(result, res);
//     return res;


// }

// function bracktrack(res, open, str, close, n) {
//     if (str.length === n * 2) {
//         res.push(str);
//         return;
//     }
//     if (open < n) {
//         bracktrack(res, str + "(", open + 1, close, n);

//     }
//     if (close < open) {
//         bracktrack(res, str + "(", open + 1, close, n);
//     }
// }

// console.log(generateParenthesis(3));




//============Program to find whether a given number is power of 2  by using the recursion  function ============




// function isPowerOfTwo(n) {
//     if (n == 0)
//         return false;

//     return parseInt((Math.ceil((Math.log(n) / Math.log(2))))) == parseInt((Math.floor(((Math.log(n) / Math.log(2))))));
// }

// // Driver Code

// if (isPowerOfTwo(31))
//     console.log("Yes<br/>");
// else
//     console.log("No<br/>");

// if (isPowerOfTwo(64))
//     console.log("Yes<br/>");
// else
//     console.log("No<br/>");



//============linear search============

// function linearSearch(arr, x)

// {
//     let n = arr.length;
//     let x = 5;
//     for (i = 0; i < n; i++)
//         if (arr[i] == x)
//             return i;
//     return -1;
// }
// let arr = [1, 2, 3, 6, 5, 3, 2];
// console.log(linearSearch(arr, 5));