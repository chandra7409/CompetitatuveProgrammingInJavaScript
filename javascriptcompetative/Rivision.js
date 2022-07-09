// Height Of Prism (15 min):
// Problem Statement:
// Given the volume and perimeter of the triangular base of the prism, and the circumference of the 
// inner circle. Calculate the height of the prism.

let radius = 3;
let perimetr = 15;
let volume = 270;
let areaOfBase = 0.5 * radius * perimetr;
let height = volume / areaOfBase;
console.log(height);




// .2 Distance to Office (15 min):
// Problem Statement:
// A man reaches his office `y` min late when he travels at x km/hr. If he travels at x+2 km/hr then he 
// reaches the office `y-10` min early. Find the distance between his home and office given the value 
// of x and y



let x = 4;
let y = 20;
let time = y * (x + 1) - 5 * (x + 2);
let distance = ((y + time) / 60) * x;
console.log("distance between the house and office is:", distance, "km");



//3 Bob the Builder (15 min):
// Problem Statement:
// Bob has recently started his career as a builder. But he is always confused about the number of 
// bricks that will be needed at the site. To be on safer side he always orders more than the required 
// number of bricks. This inturn helps him in saving the transportation cost of bricks but adds an 
// unnecessary burden on the pockets of the client. Due to which most of the clients never call Bob 
// back for any new project.
// Bob needs your help in deciding how many bricks are needed for constructing a wall of length L 
// meter, height H meter and thickness T meter if 15% of the wall is filled with mortar and the 
// dimension of 1 brick is 24x12x8 cm. 


let brick_h = 24;
let brick_w = 12;
let brick_l = 8;
let wall_h = 8;
let wall_w = 0.6;
let wall_l = 24;
let volume_of_wall = wall_h * wall_w * wall_l; //meter
volume_of_wall = volume_of_wall * Math.pow(100, 3); //cm meter
let volume_of_brick = brick_h * brick_w * brick_l; //cm meter
let noOfBrick = (0.85 * volume_of_wall) / volume_of_brick;
noOfBrick = Math.ceil(noOfBrick);
console.log(noOfBrick);



// 4 LCM of number (15 min) :
// BED-Class #180DaysofPurpose
// Problem Statement:
// Given two numbers, find the least possible positive integer that is divided by them.



let a = 12;
let b = 16;
let multiple = a > b ? a : b;
while (true) {
    if (multiple % a == 0 && multiple % b == 0) {
        break;

    }
    multiple++;

}
console.log(multiple);




// LCM is function method
function LCM(num1, num2) {
    if (num1 > num2) {


        grater = num1;
    } else {
        grater = num2;
    }
    while (true) {
        if ((grater % num1 == 0 && grater % num2 == 0)) {
            lcm = grater;
            break;
        }
        grater += 1;
    }
    return lcm

}
num1 = 10;
num2 = 5;
console.log("L.C.M :", LCM(num1, num2));



//5 Sum of Digits (15 min) :
// BED-Class #180DaysofPurpose
// Problem Statement:
// Given a positive number you need to write a program in javascript to find the sum of the inner digits of 
// that number.

let noOriginal = 3715436;
let num = noOriginal;
let numDigit = 0;
while (num > 0) {
    let lastDigit = num % 10;
    numDigit++;
    num = parseInt(num / 10);
}
console.log(numDigit);
let sum = 0;
if (numDigit > 2) {

} else {
    sum = -1;

}
console.log(sum);


// another type of sum of number  problem of to function


function SumOfDigit(num) {
    var sum = 0;
    if (num.toString().length < 3) {
        return -1;
    }
    do {
        num = parseInt(num / 10);
        sum = sum + num % 10;
    }
    while (parseInt(num / 100) != 0)
    return sum;

}
var n = 2124;
console.log(SumOfDigit(n));




//6 Power of a Number (20 min) :
// BED-Class #180DaysofPurpose
// Problem Statement:
// Given two numbers A and B, You are supposed to find A to power B without using any built -in 
// function.


// let a = 2;
// let power = 4;
// let result = 1;
// while (b > 0) {
//     result = result * a;
//     b--;

// }
// while (power > 0) {
//     if (power % 2 != 0) {
//         result = result * a;
//     }
//     a = a * a;
//     power = parseInt(power / 2);
//     console.log(result);
// }
// console.log(result);


// the another type of problem in function 
function computePower(num, power) {
    let result = 1;
    while (power > 0) {
        result = result * num;
        power -= 1;
    }
    return result;
}
let number = 10;
let power = 2;
console.log(computePower(number, power));




//another type of this code

// function computePower(num, power) {
//     let result = 1;
//     while (power > 0) {
//         if (power & 1)
//             result = result * num;
//         power = power >> 1;
//         num = num * num;
//     }
//     return result;
// }
// let number = 10;
// let power = 2;
// console.log(computePower(number, power));


// 7 Summation Less Adding ( 15 min )
// BED-Class #180DaysofPurpose
// Problem Statement:
// Given two numbers A and B, You are supposed to find the sum of A and B without using the addition 
// operator i.e. `+`


function Add(num3, num4) {
    while (num3 != 0) {
        let carry = num3 & num4;
        num3 = num3 ^ num4;
        num4 = carry << 1;

    }
    return num3;
}
let num3 = 10;
let num4 = 5;
console.log(num3, "+", num4, "=", Add(num3, num4));


// 8  Nth Fibonacci (15 min)
// BED-Class #180DaysofPurpose
// Problem Statement:
// Given the value of n, find out the nth term of the fibonacci series.
// Fibonacci series is like 0,1,1,2,3,5,8,13… where the next element is always the sum of the previous two 
// elements and the first two elements are 0 and 1


// function nFibb(Nth) {
//     let pre = 0;
//     let cur = 1;
//     let temp;
//     if (Nth == 1)
//         return pre;
//     else if (Nth == 2)
//         return cur;
//     else
//         for (let idx = 3; idx <= Nth; idx++) {
//             temp = pre;
//             pre = cur;
//             cur += temp;
//         }
//     return cur;
// }
// let Nth = 8;
// console.log(Nth, "themfibonaci number is ", nFibb(Nth));



//anotyher type of problem 0's and 1's and 2's   as [0,1,1,0,2,2,0,1,0,2,]
// let code = (array) => {
//     let len = array.length;
//     let countzero = 0,
//         countone = 0,
//         counttwo = 0;
//     for (let i = 0; i <= len; i++) {
//         if (array[i] == 0) {
//             countzero++;
//         } else if (array[i] == 1) {
//             countone++;
//         } else if (array[i] == 2) {
//             counttwo++;
//         }
//     }
//     for (let i = 0; i < countzero; i++) {
//         array[i] = 0;
//     }
//     for (let i = countzero; i < len; i++) {
//         array[i] = 1;
//     }
//     for (let i = countone; i < len; i++) {
//         array[i] = 2
//     }
//     return array;
// }
// const array = [0, 1, 1, 0, 2, 2, 0, 1, 0, 2];
// console.log(code(array));


//arrange the array in a way that all negative 
// values come first and then positive values.
const array = [0, 5, 63, -2, -9, -9, 3, 4, -1];
const resultarray = [];
array.filter((i) => {
    if (i < 0) {
        resultarray.push(i);
    }
})
array.filter((i) => {
    if (i >= 0) {
        resultarray.push(i);
    }
})
console.log(resultarray);