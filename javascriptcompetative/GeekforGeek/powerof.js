// function power(x, y) {
//     if (y == 0)
//         return 1;
//     else if (y % 2 == 0)
//         return power(x, parseInt(y / 2, 10)) * power(x, parseInt(y / 2, 10));
//     else
//         return x * power(x, parseInt(y / 2, 10)) * power(x, parseInt(y / 2, 10));
// }

// // Driver code
// let x = 2;
// let y = 3;

// console.log(power(x, y));



// try this question 


// let ArrayOfOddnumber = [1, 3, 5, ];
// ArrayOfOddnumber[100] = 199;
// console.log(ArrayOfOddnumber.length);

// var arr = [1, 2, 3, 4, 5, 6, 7];

// function multiply() {

//     let mul = 1;

//     for (let i = 0; i < arr.length; i++)
//         mul = mul * arr[i];
//     return mul;


// }

// console.log(multiply());


//result = window.prompt(message,default);

let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
    alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
sign = window.prompt('Are you feeling lucky', 'sure');