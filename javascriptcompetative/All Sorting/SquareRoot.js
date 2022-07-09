//===========Babylonian method for square root===========

// Algorithm: 
// This method can be derived from (but predates) Newton–Raphson method. 


// 1 Start with an arbitrary positive start value x (the closer to the 
//    root, the better).
// 2 Initialize y = 1.
// 3. Do following until desired approximation is achieved.
//   a) Get the next approximation for root using average of x and y
//   b) Set y = n/x

function SquareRoot(n) {
    let x = n;
    let y = 1;
    let e = 0.000001; //e decides the accuracy level

    while (x - y > e) {
        x = (x + y) / 2;
        y = n / x;

    }
    return x;
}   
let n = 678;
console.log(Math.round(SquareRoot(n)));