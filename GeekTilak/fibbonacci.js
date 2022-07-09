let fib = 0;
let fib2 = 1;
let fib3;
for (let i = 5; i <= 20; i++) {
    console.log(fib);
    fib3 = fib + fib2;
    fib = fib2;
    fib2 = fib3;
}
//
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }