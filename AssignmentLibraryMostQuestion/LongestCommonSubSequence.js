// // // // Given an arrazO You need to find the;
// // // // ength of the;
// // // // ongest consecutive se_uence such that e;
// // // // ements
// // // // are consecutive integersO For examp;
// // // // e -


// // // //     Input

// // // // { 35, 3, 4, 88, 9, 1), 21, 5, 6
// // // // }


// // // // Output

// // // // 4


// // // // Se_uence is 3, 4, 5, 6


// // // // Naive Approach g We can sort the arraz and then find the;
// // // // ongest consecutive subarrazO


// // // // Steps f
// // // //     ^
// // // //     N Sort the array
// // // // N Set variab;
// // // // es count and max to(N Iterate through the array: N If the current e; ement is not e_ua; to(previous e; ement + 1), set count to 1 e; se increment the counT N Update max to a maximum of count and max


















// // // Efficient ATTroach J
// // // SteTs - I
// // // 8!Cr1a / 1 a S1 / and ins1r / aBB 1 B1m1n / s in /o i.
// // // $!I / 1 ra / 1 / "roug" / "1 S1.
// // // S!V1rify
// // // if arr[i]– 1 is pr1s1n / in /"1 s1/.If no / found / "1n /"
// // // is is / "1 firs/ 1B1m1n/ of /"
// // // 1 s1qu1n 0
// // // A!If / "1 urr1n/ 1B1m1n/ is /"
// // // 1 firs / 1 B1m1n / of / "1 s1qu1n1, i/1ra/1 from arr[i] + 1 /iBB /"
// // // 1 Bas / 1 B1m1n /
// // //     and oun / /"1 numb1r of 1B1m1n/s!!If oun / > pr1 ious oun / –upda / 1 oun.!Add urr1n / sum and ind1x / o s1t






// // function LongestcommonSubsequence(arr, num) {
// //     let hashSet = new Set();
// //     let output = 0;
// //     for (let i = 0; i < num; i++)
// //         hashSet.add(arr[i]);
// //     for (let i = 0; i < num; i++) {
// //         if (!hashSet.has(arr[i] - 1)) {

// //             let j = arr[i];
// //             while (hashSet.has(j))
// //                 j++;
// //             output = Math.max(output, j - arr[i]);
// //         }
// //     }
// //     return output;
// // }


// // let arr = [35, 3, 4, 88, , 9, 10, 21, 5, 6, 7];
// // let num = arr.length;
// // console.log(LongestcommonSubsequence(arr, num));














// function longestConsecutiveSequence(arr, num) {
//     let hashSet = new Set();
//     let output = 0;

//     for (let i = 0; i < num; i++)
//         hashSet.add(arr[i]);


//     for (let i = 0; i < num; i++) {

//         if (!hashSet.has(arr[i] - 1)) {


//             let j = arr[i];
//             while (hashSet.has(j))
//                 j++;


//             output = Math.max(output, j - arr[i]);
//         }
//     }
//     return output;
// }

// // Driver code
// let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
// let num = arr.length;
// console.log("Length of the Longest consecutive sequence is " +
//     longestConsecutiveSequence(arr, num));


// let a = [];

// console.log(a = []);
// const x = 6 % 2;

// const y = x ? 'One' : 'Two';


// console.log(y);

let n = 5;
for (let i = 0; i < n; i++) {
    console.log(i);
}
var x;

var y = (x = 3) ? true : false
console.log(y);




let answer = true;

if (answer === false) {

    return 0;

} else {

    return 10;

}