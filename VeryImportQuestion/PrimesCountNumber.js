// Given an integer n,
// return the number of prime numbers that are strictly less than n.
// Example 1:
//     Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.



function primeNumberCount(num) {
    let count = 0;
    const isPrime = Array(num).fill(true);
    for (let i = 2; i < num; i++) {

    }
    if (isPrime[i]) {
        count++;
        for (let j = i; j < num; j += i) isPrime[j] = false;
    }
}
return count;
let num = 244;
console.log(primeNumberCount(num));