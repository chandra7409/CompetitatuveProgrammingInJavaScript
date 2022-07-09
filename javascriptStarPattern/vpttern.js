// let n = 5;
// let str = "";
// for (i = 1; i <= 5; i++) {
//     console.log(i);


//     for (j = 1; j <= 5 - i; j++) {
//         str = str + "";

//     }
//     for (k = 1; k <= i; k++) {
//         str = str + "*";

//     }



//     str = str + "\n";
// }
// console.log(str);


let n = 4;
let pattern = "";
for (let row = 1; row <= n; row++) {
    console.log(row);
    //print spaces
    for (let space = 1; space <= n - row; space++) {
        pattern = pattern + " ";
    }
    //print starts
    for (let star = 1; star <= row; star++) {
        pattern = pattern + "* ";
    }
    pattern = pattern + '\n';
}
console.log(pattern);
for (let row = 1; row <= n; row++) {
    console.log(row);
    //print spaces
    for (let space = 1; space <= n - row; space++) {
        pattern = pattern + " ";
    }
    //print starts
    for (let star = row; star >= 1; star++) {
        pattern = pattern + "* ";
    }
    pattern = pattern + '\n';
}
console.log(pattern);