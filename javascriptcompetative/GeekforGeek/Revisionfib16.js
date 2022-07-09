///====***********************List of Problems Involved
// • Anagram
// • Print frequency of element in the string
// • First non-repeating character
// • Subarray with sum 0
// • Subarray with sum x
// • Longest consecutive sequence
// • Shift Negative elements to the end of an array
// • Cyclically Rotate Array by 1




//**Print frequency of element in the string
// Frequency – The frequency of an element in the string is defined as the number of times that element is present in the 
// string.
// Problem – Given a string and a character as input. You need to print the frequency of the character in a given string. 
// For example – 
// Input – str = “unacademy”, c = ‘a’


// function FindFirstFre(str, givenchar) {
//     let freq = 0;
//     for (idx in str) {
//         let currchar = str.charAt(idx);
//         if (currchar == givenchar) {
//             console.log(currchar, "is equal to", givenchar)
//             freq++;

//         }


//     }
//     return freq;
// }
// //let str = "RELEVEL";
// let str = "unacdaemy";
// letnfrequency = FindFirstFre(str, "a");





///+++++++++++++ ifnd then sum of through of xOR operator an array++++++++


// let input = [3, 4, 5, 5, 4, 2, 2, 56, 1, -1, -1];

// function FindSingleOfOccurence(input) {
//     let ans = 0;
//     for (let i = 0; i < input.length; i++) {
//         ans = ans ^ input[i];
//     }
//     return ans;
// }
// console.log(FindSingleOfOccurence(input));



//+++************===find the given an array of SUM 



// let arr = [2, 3, 4, 5, 6, 4, 59, 6, 54];

// function SumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];

//     }
//     return sum;


// }

// console.log(SumOfArray(arr));



//===== another type of Sum of Array by the reduce function


// let arr = [2, 3, 4, 5, 6, 4, 59, 6, 54];
// let input = arr.reduce(function(acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(input);



//=======find the maximum value in the Array 


// let arr = [2, 3, 4, 5, 6, 4, 59, 6, 54];
// let Max = 0;

// function FindMax(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > Max) {
//             Max = arr[i];

//         }
//     }
//     return Max;
// }
// console.log(FindMax(arr));


///============given An Array Find the Minimum value 

// let arr = [2, 3, 4, 5, 6, 4, 59, 6, 54];
// let Mini=0;

// function FindMini(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < Mini) {
//             Mini = arr[i];

//         }
//     }
//     return Mini;
// }
// console.log(FindMini(arr));







function charCountArray(str, count) {

    for (var i = 0; i < str.length; i++) {
        count[str.charAt(i).charCodeAt(0)]++;
    }
    return count;
}


function firstNonRepeating(str, count) {
    count = charCountArray(str, count);
    var output = -1;
    var i = 0;
    for (i = 0; i < str.length; i++) {
        if (count[str.charAt(i).charCodeAt(0)] == 1) {
            output = i;
            break;
        }
    }
    return output;
}


TOTAL_CHARS = 256;
//count = Array(TOTAL_CHARS).fill(' ');
var str = "unacademy";
var index = firstNonRepeating(str, count);
console.log(index == -1 ? "Either all characters are repeating or string is empty" : "First non-repeating character is " + str.charAt(index));



//=============longest common sequence problem===

// function LongestCommom(arr, n) {
//     let output = 0;
//     let count = 0;
//     arr.sort(function(a, b) {
//         return a - b;
//     })
//     let tempArray = [];
//     tempArray.push(arr[0]);

//     for (let i = 1; i < n; i++) {
//         if (arr[i] != arr[i - 1])
//             tempArray.push(arr[i]);
//     }

//     for (let i = 0; i < tempArray.length; i++) {


//         if (i > 0 && tempArray[i] == tempArray[i - 1] + 1)
//             count++;

//         else
//             count = 1;

//         output = Math.max(output, count);
//     }
//     return output;
// }



// let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
// let n = arr.length;
// console.log(
//     "Length of the Longest consecutive sequence is " +
//     LongestCommom(arr, n)
// );





// function rearrange(arr, n) {
//     let j = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] < 0) {
//             if (i != j) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//             j++;
//         }
//     }
// }

// // A utility function to print an array
// function printArray(arr, n) {
//     for (let i = 0; i < n; i++)
//         console.log(arr[i] + " ");
// }

// // Driver code
// let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
// let n = arr.length;
// rearrange(arr, n);
// printArray(arr, n);




// //=====================



// function printReport(x, y) {
//     console.log("Some report related data", x, y);
// }

// function addHeader(func, sh) {
//     console.log("add header got called with header", sh);

//     function proxy(p, q) {
//         console.log(sh);
//         func(p, q);
//     }
//     return proxy;
// }
// let kkk = addHeader(printReport, "Gwalior report");
// let jjj = addHeader(printReport, "Delhi report");
// kkk(1000, 2000);
// jjj(3000, 4000);

//==========Array height of maximum

// function ArrayHeigjt(arr, k, n) {
//     arr.sort((a, b) => (a - b))
//     let ans = arr[n - 1] - arr[0];
//     let tempmin, tempmax;
//     tempmin = arr[0];
//     tempmax = arr[n - 1];
//     for (let i = 0; i < n; i++) {
//         tempmin = Math.min(arr[0] + k, arr[i] - k);
//         tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);
//         ans = Math.min(ans, tempmax - tempmin);

//     }
//     return ans;
// }
// let k = 2;
// let n = 4;
// let arr = [1, 5, 8, 10];
// let ans = ArrayHeigjt(arr, n, k);
// console.log(ans, "<br>");