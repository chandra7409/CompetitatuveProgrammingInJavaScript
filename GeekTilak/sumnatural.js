// Question 1   =>  Inversion Count for an array indicates - how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in the reverse order, the inversion count is the maximum. 
// Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j 
// Example: 

// Input: arr[] = {8, 4, 2, 1}

// Output: 6



// Explanation: Given array has six inversions:

// (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1).






let arr = [1, 20, 6, 4, 5];

function Inversioned(arr) {
    let inv_count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                inv_count++;

        }
    }
    return inv_count;
}
console.log(" number the inversion " + Inversioned(arr));




//  Question 2 => Given a string and number of rows ‘n’. Print the string formed by concatenating n rows when input string is written in row-wise Zig-Zag fashion.

//Examples: 

// Input: str = "ABCDEFGH"
//        n = 2
// Output: "ACEGBDFH"
// Explanation: Let us write input string in Zig-Zag fashion
//              in 2 rows.
// A   C   E   G   
//   B   D   F   H
// Now concatenate the two rows and ignore spaces 
// in every row. We get "ACEGBDFH"

// Input: str = "GEEKSFORGEEKS"
//        n = 3
// Output: GSGSEKFREKEOE
// Explanation: Let us write input string in Zig-Zag fashion
//              in 3 rows.
// G       S       G       S
//   E   K   F   R   E   K
//     E       O       E
// Now concatenate the two rows and ignore spaces 
// in every row. We get "GSGSEKFREKEOE"

// We strongly recommend that you click here and practice it, before moving on to the solution.

// The idea is to traverse the input string. Every character has to go to one of the rows. One by one add all characters to different rows. Below is algorithm: 
//


//Algorithim of zig zag n row


// 1) Create an array of n strings, arr[n]
// 2) Initialize direction as "down" and row as 0. The 
//    direction indicates whether we need to move up or 
//    down in rows. 
// 3) Traverse the input string, do following for every
//    character.
//    a) Append current character to string of current row.
//    b) If row number is n-1, then change direction to 'up'
//    c) If row number is 0, then change direction to 'down'
//    d) If direction is 'down', do row++.  Else do row--.
// 4) One by one print all strings of arr[]. 



//coded  of zig zag n row

// function ZigzagConcate(str, n) {
//     if (n == 1) {
//         console.log(str);
//         return;
//     }
//     let str1 = str.length;
//     let arr = new Array(n);
//     for (let i = 0; i < n; i++) {
//         arr[i] = "";
//     }
//     let row = 0;
//     let down = true;
//     for (let i = 0; i < length; ++i) {
//         arr[row] += arr[row]



//         if (row == n - 1) {
//             down = false;
//         }
//     }


//     if (down) {
//         row++;
//     } else {
//         row--;
//     }
// }

// // Print concatenation
// // of all rows
// for (let i = 0; i < n; ++i) {
//     console.log(arr[i]);
// }


// // Driver Code
// let str = "GEEKSFORGEEKS";
// let n = 3;
// ZigzagConcate(str, n);