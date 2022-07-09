// Print frequency of element in the string
// Approach 1 – We can traverse string characters one by one and check if a given character is equal to that character. If it 
// is matching, we can increase our count.


// function count(s, c) {
//     let output = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s.charAt(i) == c)
//             index.charAt(0);
//         output++;
//     }
//     return output;
// }

// // Driver method
// let str = "unacademy";
// let c = 'a';
// console.log("Frequency of Character " + c + " is " + count(str, c));

// let str = "unacademy";
// let c = 'a';

// function FindFreq(s, c) {
//     let output = 0;
//     for (let i = 0; i, s.length; i++) {
//         if (s.chaAt(i) == c) {
//             output++;
//         }
//         return output;
//     }

// }
// console.log("Frequency of character" + c + "is" + FindFreq(str, c));



// function countOccurce(ch, s) {
//     if (s.length == 0)
//         return 0;
//     let count = 0;
//     if (s[0] == ch)
//         count++;
//     count += countOccurce(ch, s.substring(1));
//     return count;
// }
// let str = "unacademy";
// let c = 'a';
// console.log("frequency of character" + c + "is " + countOccurce(c, str));





// First non-repeating character
// Approach – We can use HashMap and frequency concept. We can insert characters as keys in the map and their 
// respective frequencies as values. 
// Steps – 
// 1) Create a map having a character as key and frequency as value
// 2) Iterate the given string and check whether a given character has a unit frequency.
// 3) If yes, print given character as output


// function charCountArray(str, count) {

//     for (var i = 0; i < str.length; i++) {
//         count[str.charAt(i).charCodeAt(0)]++;
//     }
//     return count;
// }


// function firstNonRepeating(str, count) {
//     count = charCountArray(str, count);
//     var output = -1;
//     var i = 0;
//     for (i = 0; i < str.length; i++) {
//         if (count[str.charAt(i).charCodeAt(0)] == 1) {
//             output = i;
//             break;
//         }
//     }
//     return output;
// }


// TOTAL_CHARS = 256;
// count = Array(TOTAL_CHARS).fill(' ');
// var str = "unacademy";
// var index = firstNonRepeating(str, count);
// console.log(index == -1 ? "Either all characters are repeating or string is empty" : "First non-repeating character is " + str.charAt(index));


// function charCountArray(str, count) {

//     for (var i = 0; i < str.length; i++) {
//         count[str.charAt(i).charCodeAt(0)]++;
//     }
//     return count;
// }

// function FirstnonRepeating(str, count) {
//     count = charCountArray(str, count);
//     var output = -1;
//     var i = 0;
//     for (i = 0; i < str.length; i++) {
//         if (count[str.charAt(i).charCodeAt(0)] == 1) {
//             output = i;
//             break;
//         }
//     }
//     return output;
// }
// Total_char = 256;
// count = Array(Total_char).fill(' ');
// let str = "unacademy";
// let index = FirstnonRepeating(str, count);
// console.log(index == -1 ? "Either all charater are repeating or string is empty " : "Fisrt non repeating charater is" + str.charAt(index)


// let a = "abc";
// let b = "cao";


// function anagram(str1, str2) {

//     if (str1.length > str2.length || str2.length > str1.length) {
//         return "This is not Anagram"

//     } else {

//         if (str1.charCode === str2.charCode) {
//             console.log(str1.charCode);
//             console.log(str2.charCode);
//             return "This is Anagram"

//         } else {
//             return "This is not Anagram"
//         }

//     }

// }

// console.log(anagram(a, b));



// //========

function subsequence(output, input) {
    if (input == "") {
        console.log(output);
        return;
    }
    let firstcher = input.charAt(0);
    firstcher = firstcher + firstcher.charCodeAt(0);

    let ros = input.substring(1);
    subsequence(output + firstcher, ros);
    subsequence(output, ros);
}
subsequence("", "abc");









// // // // print string of index of problem

// // // let str = "abcd";
// // // for (idx in str) {
// // //     console.log(idx);
// // }


// // ///====print the string of problem

// // for (x of str) {
// //     console.log(x);
// // }