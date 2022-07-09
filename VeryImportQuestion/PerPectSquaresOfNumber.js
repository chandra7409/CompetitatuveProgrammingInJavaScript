// Given an integer n,
// return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.For example, 1, 4, 9, and 16 are perfect squares
// while 3 and 11 are not.

// Example 1:
//     Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4


function perfect(n) {

    let mem = [0];
    let i, j;

    // Outer loop, where we build up till we reach n
    for (i = 1; i <= n; i++) {

        // Initially, we have no idea how many steps it will take
        mem[i] = Infinity;

        // Now loop over all squares that are smaller or equal to the current i.
        for (j = 1; j * j <= i; j++) {

            // The smalles amount of squares is either what we already have, or what we can build with a new square and remainder
            mem[i] = Math.min(mem[i], mem[i - j * j] + 1)
        }


    }
    return mem[n];
}
let n = 233;
console.log(perfect(n));