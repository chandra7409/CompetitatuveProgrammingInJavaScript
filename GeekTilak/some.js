//let myName = "Tialkchandra";
//const BioData = {
//    myName: "how are you web developper",
//  28: "is my Age"
//}
//console.log(BioData);
// let myName = "Tialkchandra";
// const BioData = {
//     myName = "how are you web developper",
// };
// console.log(BioData);

//check the nnumber 

// let num = -3;
// switch (true) {
//     case (num > 0):
//         console.log("number is positive");
//         break;
//     case (num < 0):
//         console.log("nukmber is negative");
//         break;
//     case (num = 0):
//         console.log("number is zero");
//         break;
//     default:
//         console.log("Invalid number");
// }


// //found the HCF of the number
// let num1 = 8;
// let num2 = 12;
// for (let i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//         hcf = i;
//     }
// }
// //console.log(hcf);
// console.log("hcf of " + num1 + " and " + num2 + " is " + hcf);

// console.log('hcf odf ${num1} and ${num2} is ${hcf}');



// check the number gestest in three number 

// let num1 = 30;
// let num2 = 59;
// let num3 = 95;
// if (num1 >= num2 && num1 >= num3) {
//     console.log("greatest is  number  ${num1}");
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log("numberb is greatest ${num2} ");
// } else {
//     console.log("number is greatest   ${num3}");
// }


// let number = 123;
// let result = 0;
// let temp = number;
// let rem;
// while (temp > 0) {
//     rem = temp % 10;
//     temp = parseInt(temp / 10);
//     result = result + rem * rem * rem;

// }
// if (result == number) {
//     console.log("number is Armstrong ")
// } else {
//     console.log("number is not Armstrong");
// }


//check the number is palindrome  or not palindrome



// let number = 121;
// let result = 0;
// let temp = number;
// let rem;
// while (temp > 0) {
//     rem = temp % 10;
//     temp = parseInt(temp / 10);
//     result = result * 10 + rem;

// }
// if (result == number) {
//     console.log("number is palindrome ")
// } else {
//     console.log("number is not palindrome");
// }

// three Digit Sum of numeber

// let str = "";
// for (let i = 0; i < 5; i++) //row
// {
//     for (let j = 0; j <= i; j++) //col
//     {
//         str = str + "*  ";
//     }
//     str += "<br>";
// }
// console.log("", str);


// do the number oaf array square 

// function SquareArray(number) {
//     for (let i = 0; i <= number.length; i++) {
//         number[i] = number[i] * number[i];

//     }
//     return number;

// }
// const number = [2, 3, 4, 5, 6, 7];
// console.log(number);
// const modify = SquareArray(number);
// console.log(modify);

// updated value  through the function


// function UpdatedValue(num) {
//     return num + 100;

// }
// let num = 20;
// let value = UpdatedValue;
// console.log(value(num));

// Regular Approche through the function

// function Add(num1, num2) {
//     return num1 + num2;

// }

// function Sub(num1, num2) {
//     return num1 - num2;
// }

// function Mul(num1, num2) {
//     return num1 * num2;

// }

// function Divide(num1, num2) {
//     return num1 / num2;

// }
// let num1 = 2,
//     num2 = 5,
//     num3 = 1;
// let sum = Add(num1, num2);
// //let result = Sub(sum, num3);
// let result = Sub(sum, num3) + Mul(sum, num3) + Divide(sum, num3);
// console.log(result);

// Regular Approch in volume 


// function Volume(l, b, h) {
//     return l * b * h;

// }
// let l = 5,
//     b = 10,
//     h = 15;
// console.log(Volume(l * b * h));
// // carring function through
// function vol(l) {
//     return function(b) {
//         return function(h) {
//             return l * b * h;
//         }

//     }

// }

// console.log(vol(l)(b)(h));


//Create a problem of the reverse string 


// let reverse = (str) => {
//     if (str == null || str.length <= 1 || typeof str !== "string") {
//         return "Invalid string";
//     }
//     const reArray = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         reArray.push(str[i]);
//     }
//     return reArray.join("");
// }
// let str = "Tilak chandra is web development "
// console.log(reverse(str));


// check the palindrome of the given string 

// let reverse = (str) => {
//     if (str == null || str.length <= 1 || typeof str == "strimng") {
//         return "Invalid  string ";
//     }
//     const reArray = [];
//     for (let i = str.length - 1; i >= 0; i--) {
//         reArray.push(str[i]);

//     }
//     return reArray.join("");
// }
// let str = "TiTit";
// let rev = reverse(str);
// if (str = rev) {
//     console.log("palindrome");
// } else {
//     console.log("is not palindrome");
// }




// found out the fibonnaci series
// let a = 0;
// let b = 1;
// let c;
// let n = 100;
// console.log(a);
// console.log(b);
// for (let i = 1; i < n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c);
// }




// do to any given number on the power


// let power = (num1, pow) => {
//     let p = 1;
//     for (let i = 0; i < pow; i++) {
//         p *= num1;

//     }
//     return p;

// };
// console.log(power(2, 4));


// check the any given prime number


// let isPrime = num => {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }

//     }
//     return true;
// }
// let n = 50;
// for (let i = 2; i < n; i++) {
//     if (isPrime(i) == true) {
//         console.log(i);
//     }
// }


// make the any given number ka Anagram


// let str1 = "ten";
// let splittedString = str1.split("");
// let sortedString = splittedString.sort();
// let joinedString = sortedString.join("");
// let string1 = str1.split("").sort().join("");
// console.log(joinedString);
// console.log(string1);
// let isAnagram = (str1, str2) => {
//     let length1 = str1.length;
//     let length2 = str2.length;
//     if (length1 !== length2) {
//         console.log("Invalid strings");
//         return false;
//     }
//     let modifiedString1 =
//         str1.split("").sort().join("");
//     let modifiedString2 =
//         str2.split("").sort().join("");
//     if (modifiedString1 == modifiedString2) {
//         return true;
//     }
//     return false;
// }
// if (isAnagram("ten", "met") == true) {
//     console.log("Anagram");
// } else {
//     console.log("Not an Anagram");
// }


// print the frequency of element in the string


// let str = "inthenameofthorganisation";

// //let str = "MubarkAnsari";
// let obj = {};
// for (let i = 0; i < str.length - 1; i++) {
//     if (obj[str[i]] == undefined) {
//         obj[str[i]] = 1;

//     } else {
//         obj[str[i]] += 1;
//     }
// }
// console.log(obj);


// another method


// let str1 = "Tialk chhhgnadra";
// let latter = {};
// for (idx in str1) {
//     let str2 = str1[idx];
//     console.log(latter);
//     if (latter[str2]) {
//         latter[str2]++;
//     } else {
//         latter[str2] = 1;
//     }
// }
// console.log(latter);



// check the number is positive or negative


// const array = [1, 9, -3, 5, 0, -2, -5, 7, -9];
// const positive = [];
// const negative = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//         positive.push(array[i]);
//     } else {
//         negative.push(array[i]);


//     }
// }
// console.log(positive.concat(negative));


//

// const course = {
//     name: 'taiiw',
//     id: 1

// }
// const newCourse = {...course };
// newCourse.id = 2;
// console.log(course.id);

// for (let i = 0; i < 6; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
//


// let welcome = function() {
//     return function() {
//         console.log("Tialk chandra");

//     }
// }
// welcome();
// console.log(welcome());
// welcome()();




///nested function

// let welcome = function() {
//     return function() {
//         console.log("Tialk chandra");

//     }
// }
// let result = welcome();


//console.log(result);
//result();
//welcome()();


//======================Nested function=======

// let printName = function() {
//     return function() {
//         return function() {
//             console.log("Tilakarda");
//         }
//     }
// }
// printName()()();



///====================================Explanation:
// 60 is a composite number and any number which is divisible by composite numbers is supposed to be
// divisible by the prime number raised to the highest pow


// function isDivisibleBy60(num) {
//     if (num % 10 == 0)
//         return 1;
//     sum = 0;
//     last = false;
//     secondLast = false;
//     while (num != 0) {
//         i = num % 10;
//         num = parseInt(num / 10);
//         if (i % 2 == 0 && (i > 0 || last))
//             secondLast = true;
//         if (i == 0)
//             last = true;
//         if (sum % 3 == 0 && last && secondLast)
//             return 1;
//         return 0;
//     }
//     let number = 2340;
//     console.log(isDivisibleBy60(number));
// }


//=============================same experssion===


//a+b+c

// let add = (a, b) => a + b;
// let mul = (a, b) => a * b;
// let [x, y, z] = [1, 10, 2];
// //let result = add(x, mul(y, z));
// console.log(add(x, mul(y, z)));




//======================Array 0 and 1 and 2 problem

let stat = 0;
let