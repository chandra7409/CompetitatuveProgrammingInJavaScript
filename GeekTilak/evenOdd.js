//function throgh even odd number
function EvenOdd(num) {
    // let num = 20;
    if (num % 2 == 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}

EvenOdd(21);


//check  the number is perpect square
let num = 3;
let isPerfectSquare = num => {
    let rem = 1;
    while (rem * rem <= num) {
        if (rem * rem !== num) {
            rem++;
            continue;
        };
        return true;
    };
    return false;
};
console.log(isPerfectSquare(num));