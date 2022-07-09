// let n = 9;
// let str = "";
// for (let i = 1; i <= 9; i++) {
//     for (j = 1; j <= 9; j++) {
//         if ((i + j) / 4 == 0 || i == 2 && j / 4 == 0) {
//             str = str + "*";

//         }
//     }
//     str = str + "\n";
// }
// console.log(str);


//barge
// let row = 5;
// let col = 4;
// let str = "";
// for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= col; j++) {
//         if (i == 1 || i == row) {
//             str = str + "*";

//         } else if (j == 1 || j == col) {

//         } else {
//             str = str + "";
//         }
//     }
//     str = str + "\n";
// }
// console.log(str);




// let number = 5;
// let str = "";
// for (i = 1; i <= number; i++) {
//     for (j = 1; j <= number; j++) {
//         if (j < n - 1) {
//             console.log("");
//         } else {
//             console.log("*");
//         }
//         str = str + "\n"
//     }
//     return 0;
// }
// console.log(str);



// var i = 3;
// var j = 2;
// var k = 0;
// If(i == j)
// document.write(i);
// elseif(i == j)
// document.write(i);

// else
//     document.write(k);


// a = 5;
// b = 15;
// while (b > a) {
//     console.log(a * (b - a));
//     while (a > b) {
//         a += 1;
//         b -= 1;
//     }
// }


var i = 0,
    j = 0;
for (i = 0; i < 5; i++) {
    for (j = 0; j < 4; j++) {
        if (i > 1)
            break;
    }
    console.log(“Relevel”);
}