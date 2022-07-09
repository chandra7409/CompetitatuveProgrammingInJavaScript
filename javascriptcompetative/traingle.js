// let n = 5;
// let str = "";
// for (let i = 1; i <= 5; i++) {
//     for (j = i; j > 1; j--) {
//         str = str + "";
//     }
//     for (k = 0; k < i * 2 - 1; k++) {
//         str = str + "*";
//     }
//     str = str + "\n";
// }
// console.log(str);
//
let n = 5;
let str = "";
for (let i = 1; i <= 5; i++) {
    for (let j = i; j <= 5 - i; j++) {
        str = str + "";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        str = str + "*";
    }
    str = str + "\n";
}
console.log(str);