let prompt = require("prompt-sync")({ sigint: true })
let n = (prompt("Enter the number"));
//let n = 8
if (n % 2 == 0) {
    console.log("divided by 2");

} else {
    console.log("divided by is not 2");
}

// let n = Number(prompt("Enter the number"));
// console.log(n);