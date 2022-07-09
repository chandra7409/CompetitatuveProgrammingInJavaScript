// let num1 = 5412;
// let sum1 = 0;
// while (num1 > 0) {
//     let lastdigit = num1 % 10;
//     sum1 = sum1 + lastdigit;
//     num1 = parseInt(num1 / 10);
// }
// console.log(sum1);


// //check the Armstronger number




let num = 143;
let result = 0;
let temp = num; //temporary variable
let rem;
while (temp > 0) {
    rem = temp % 10;
    temp = parseInt(temp / 10);
    result = result + rem * rem * rem;
}
result === num ? console.log("armstrong number") :
    console.log("not an armstrong number");




// let num = 153;
// let temp = num;
// let rev = 0;
// let result = 0;
// while (temp > 0) {
//     temp = num % 10;
//     temp = parseInt(temp / 10);
//     result = result + rem * rem * rem;
// }
// if (num == result) {
//     console.log("number is Armstrong");

// } else {
//     console.log("the number is not Armstrong");
// }