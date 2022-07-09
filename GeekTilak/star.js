//  let n = 5;
//  let str = "";
//  for (let i = 1; i <= n; i++) {
//      for (let j = 1; j <= i; j++) {

//          str = str + "*";
//      }
//      str = str + '\n'
//  }
//  console.log(str);


// // if (permanentEmployee) {
// //     if (doesGoodWork) {
// //         getAppreciated = true;
// //         else
// //             getAppreciated = false;

// //     }
// // } else if (!permanentEmployee)
// //     getAppreciated = false;




// let temp = 22;
// let raining = true;

// if ((temp >= 20 && temp <= 25) && raining == false) {
//     console.log("students can play outside");

// } else if ((temp >= 18 && temp <= 20) && raining == true) {

//     console.log("students can stay at play school");

// } else {
//     console.log("students can stay at home");

// }


// let temp = 25;
// let raining = true;
// if ((temp >= 20 && temp <= 30) && (raining == false) {
//         console.log("students can pley outsite ");

//     } else if ((temp >= 18 && temp <= 20) && raining == true) {
//         console.log("student can stay at play the school");
//     } else {
//         console.log("student can stay the at the home");
//     }



// let raining = true;
// let goOutside = raining == true ? "don't go out" : "go out";
// console.log(goOutside);

// let marks = 50;
// let result = (marks >= 40) ? "pass" : "fail";
// console.log(result);



//some tenary operators problems revision




// let marks = 50;
// let result = (marks >= 40) ? console.log("pass the students") : console.log("fail the students");



//35.	let hcf = 1;
// 36.	let num1 = 16;
// 37.	let num2 = 8;
// 38.	 
// 39.	for(let i = 2; (i<= num1 && i<=num2) ;i++){
// 40.	  //if i is common factor of num1 and num2
// 41.	  if((num1%i ==0) && (num2%i ==0)){
// 42.	    hcf = i;
// 43.	  }
// 44.	}
// 45.	 
// 46.	console.log("hcf : ", hcf);



//some problem of HCF and GCF

// let hcf = 1;
// let num1 = 16;
// let num2 = 32;
// for (let i = 2;
//     (i <= num1 && i <= num2); i++) {
//     if ((num1 % i == 0) && (num2 % i == 0)) {
//         hcf = i;

//     }
// }
// console.log("hcf : ", hcf);







//Switch case of based problems 

// let weekDayNum = 1;

// let weekDay;


// switch (weekDayNum > 0) {

//     case (weekDayNum == 1):
//         weekDay = "Monday";
//         break;
//     case (weekDayNum == 2):
//         weekDay = "Tuesday";

//         break;

//     case (weekDayNum == 3):
//         weekDay = "Wednesday";

//         break;

//     case (weekDayNum == 4):
//         weekDay = "Thursday";

//         break;

//     case (weekDayNum == 5):
//         weekDay = "Friday";

//         break;

//     case (weekDayNum == 6):
//         weekDay = "Saturday";

//         break;

//     case (weekDayNum == 7):
//         weekDay = "Sunday";

//         break;

//     default:
//         weekDay = "any day";

// }

// console.log(weekDay);



///other type
// let weekDayNum = 1;
// witch(weekDayNum > 0) {

//     case (weekDayNum == 1)
//     console.log("manday");


//     break;

//     case (weekDayNum == 2)
//     console.log("tuesday");



//     break;

//     case (weekDayNum == 3)
//     console.log("wednessday");


//     break;

//     case (weekDayNum == 4)
//     console.log("thursday");

//     break;

//     case (weekDayNum == 5)
//     console.log("friday");


//     break;

//     case (weekDayNum == 6)
//     console.log("saturday");


//     break;

//     case (weekDayNum == 7)
//     console.log("sunday");



//     break;

//     default;
//     weekDay = "any day";

// }

// console.log(weekDay);





// 81. //===========================================================================
// 82. //Create a program to find if the number is positive, negative or zero.
// let num = -2;
// 85.
// switch (true) {
//     86.
//     case (num > 0):
//         87. console.log("positive");
//       
//         break;
//      
//     case (num < 0):
//     console.log("negative");
//     
//         break;
//     default:
//         94. console.log("zero")


// switch case area and traingle and ractangle


/*var area = circle;
var PI = 3.142,
    l = 5,
    b = 4,
    r = 5;
if (area == "circle") {
    console.log("the area of circle is :" + PI * r ** 2);
} else if (area == "triangle") {
    console.log("the area of triangle is : " + (l * b) / 2);


} else if (area == "ractangle") {
    console.log("the area of ractangle is " + (l * b));
} else {
    console.log("please enter then valid data");
}*/




//Positive and Negative and Equal to Zero

// let num = 4;
// switch (true) {
//     case (num > 0):
//         console.log("Number is Positive");
//         break;
//     case (num < 0):
//         console.log("Number is Negative");
//         break;

//     default:
//         console.log("Number is Zero");
// }


//
// let a = 10;
// let b = 20;
// a > b ? console.log(10) : (a < b ? console.log(a + 10) :
//     console.log(b + 15));


// //
// let num = 153;
// let result = 0;
// let temp = num; //temporary variable
// let rem;
// while (temp > 0) {
//     rem = temp % 10;
//     temp = parseInt(temp / 10);
//     result = result + rem * rem * rem;
// }
// result === num ? console.log("armstrong number") :
//     console.log("not an armstrong number");


// function of problem 

//  function sum() {
//      var a = 10;
//      var b = 15;
//      var total = a + b;
//      console.log(total);
//  }
//  sum();

// table of the any number of problem


//  for (i = 1; i <= 10; i++) {
//      var table = 8;
//      console.log(table + " * " + i + "=" + table * i);
//  }

// Leap Year question 

//  var year = 2020;
//  if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) {
//      console.log("the Year is Leap year");
//  } else {
//      console.log("the year is not leap year");
//  }

//
// 38.
// let arr = [1, 0, 1, 1, 0, 0, 0];
// 39.
// let count0 = 0;
// 40.
// let count1 = 0;
// 41.
// for (let idx = 0; idx < arr.length; idx++) {
//     42.
//     if (arr[idx] == 0) {
//         43. count0++;
//         44.
//     }
//     45.
//     else {
//         46. count1++;
//         47.
//     }
//     DD.
// }
// 49. console.log(count0, count1);
// 50.
// for (let idx = 0; idx < arr.length; idx++) {
//     51.
//     if (count0 > 0) {
//         52. arr[idx] = 0;
//         53. count0--;
//         54.
//     } else {
//         55. arr[idx] = 1;
//         56.
//     }
//     57.
// }
// 58. console.log(arr);
// 59.
//          *
//         ***
//        *****
//       *******
let num = 7;
let str = "";
for (let i = 1; i >= 2 * num - 1; i--) {
    for (let j = 1; j <= i; j++) {

        str = str + "*";
    }
    str = str + '\n'
}
console.log(str);