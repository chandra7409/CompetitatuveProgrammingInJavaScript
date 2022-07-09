// // find a & b with fiven A -problem.
let num = 148;
let aFound = 0;
let bFound = 0;
let maxB = parseInt(Math.sqrt(num));
let flag = false;

if (num < 0 || num > 100000) {
    console.log('invalid input');
} else {
    for (let b = maxB; b >= 0 && flag === false; b--) {
        for (let a = 1; a <= b; a++) {
            let squareA = a * a;
            let squareB = b * b;
            if (squareA + squareB === num) {
                aFound = a;
                bFound = b;
                flag = true;
                break;
            }
        }
    }
    if (flag) {
        console.log(`Square of ${aFound}(a) + ${bFound}(b) = ${num}(A)`);
    } else {
        console.log('No pair found!');
    }
}

// Output: Square of 2(a) + 12(b) = 148(A)



//


// function Solve(sum) {
//     let a = 0;
//     let b = 0;

//     //a*a <= or a=Math.sqrt(sum)
//     for (a = 0; a * a <= sum; a++) {
//         let result = Math.sqrt(sum - (a * a));
//         if (result % 1 == 0) {
//             b = result;
//             break;
//         }

//     }
//     console.log(a, b);
// }
// Solve(13);