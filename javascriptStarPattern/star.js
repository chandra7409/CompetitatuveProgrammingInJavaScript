let n = 5;
let str = "";
for (row = 1; row <= n; row++) {
    for (col = 1; col <= row; col++) {
        str = str + "*";

    }
    str = str + "<br>";
}
console.log("", str);

// let n = 5;
// let str = "";
// for (row = 1; row <= n; row++) {
//     for (col = 5; col > row; col--) {
//         str = str + "";

//     }
//     for (let k = 0; k < (i * 2 - 1); k++) {
//         str = str + "*";
//     }
//     str = str + "<br>";
// }
// console.log('<pre>${str}<pre>');