/*var today = "hot";
if (today == "rain") {
    console.log("today are raining ");
} else {
    console.log("today are not raining");
}*/


//Example of if else condition
// first division  A ---> 80
// second division B --->70
// third Diviaion C -->60
// forth Division D --->50
// fith Division E -->35



/*var marks = 19;
if (marks >= 80) {
    console.log("find the first division A");
} else if (marks >= 70 && marks < 80) {
    console.log("find the second division B");
} else if (marks >= 60 && marks < 70) {
    console.log("find the third division C");

} else if (marks >= 50 && marks < 60) {
    console.log("find the forth division D");
} else if (marks >= 40 && marks < 50) {
    console.log("find the fithe division E");
} else if (marks => 35) {
    console.log("find the no division");
} else {
    console.log("the student is fail");
}*/



//different in variable in var and let and const
// let a = 10; {
// let a = 20;
// console.log(a);
// }
//
// var x = "Tialk ";
// var b = "chandra";
// console.log(x + "  " + b);

//
// var age = Number(prompt("enter the Age "));
// if (age >= 18 && age <= 65) {
//     console.log("elageble of voting");
// } else {
//     console.log("elageble is not voting");
// }

//the first condition
// var age = prompt("Enter tyhe Age..");
// if (age >= 18 && age <= 65) {
//     console.log("you can voye..")
// } else {
//     console.log("you can not vote..")
// }
// ///
// var num1 = prompt("Enter thne first number");
// var num2 = prompt("Enter thne second number");

// if (num1 == num2) {
//     document.write(num1, "is equal to then ", num2);
// } else if (num1 > num2) {
//     document.write(num1, "is grater then ", num2);

// } else {
//     document.write(num2, "is grater then ", num1);
// }
/////gratest number of  program
/*let num1 = 30;
let num2 = 50;
let num3 = 20;
if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is largest`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is largest`);
} else {
    console.log(`${num3} is largest`);
}*/
// let num1 = 30;
// let num2 = 50;
// let num3 = 30;
// if (num1 >= num2 && num1 >= num3) {
//     console.log(`${num1} is largest`);
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log(`${num2} is largest`);
// } else {
//     console.log(`${num3} is largest`);
// }
//10+938
//20 - 29
// min absoult value 

let num1 = -5;
let num2 = -3;
//find minimum for abs values num1 and num2
let minValue = Math.min(num1, num2);
console.log(minValue);
let minAbsValue = Math.min(Math.abs(num1),
    Math.abs(num2));
console.log(minAbsValue);