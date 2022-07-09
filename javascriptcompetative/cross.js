// let n = 5;
// let str = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {

//         if (i == j || i + j == n + 1) {
//             console.log("*");
//         } else {
//             console.log("");
//         }
//         str = str + "\n";


//     }

// }
// str = str + "\n";

let n = 5;

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {

        if (i == j) {
            console.log("*");
        } else {
            console.log("");
        }
        console.log("\n");
    }
}