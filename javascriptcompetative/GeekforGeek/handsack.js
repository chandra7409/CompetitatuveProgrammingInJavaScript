// javascript program to count number of
// ways to connect n (where n is 
// even) points on a circle such 
// that no two connecting lines 
// cross each other and every 
// point is connected with one 
// other point.

// A dynamic programming based 
// function to find nth Catalan number
function catalanDP(n) {
    // Table to store results 
    // of subproblems Initialize 
    // first two values in table
    let catalan = []
    catalan[0] = catalan[1] = 1;

    // Fill entries in catalan[] 
    // using recursive formula
    for (let i = 2; i <= n; i++) {
        catalan[i] = 0;
        for (let j = 0; j < i; j++)
            catalan[i] += catalan[j] *
            catalan[i - j - 1];
    }

    // Return last entry
    return catalan[n];
}

// Returns count of ways to connect 
// n points on a circle such that 
// no two connecting lines cross 
// each other and every point is 
// connected with one other point.
function countWays(n) {
    // Throw error if n is odd
    if (n & 1) {
        console.log("Invalid");
        return 0;
    }

    // Else return n/2'th
    // Catalan number
    return catalanDP(n / 2);
}

// Driver Code
console.log(countWays(6) + " ");

// This code is contributed by _saurabh_ja