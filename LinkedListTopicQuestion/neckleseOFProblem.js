// Richie went to a market selling necklaces.He wanted to buy a beautiful necklace
// for his mother.He knew that his mom would become angry
// if he spent too much money on the necklace but he wanted to buy the best necklace
// for his mother.So he decided to buy 2 necklaces and merge them to make the necklace with maximum Beautiness.

// There are a total of N different necklaces in the market and each necklace has the same number of stones M.Each stone j in necklace i has a beautiness value Bi, j.The Beautiness of a single necklace i is the minimum value of min(Bi, 1, Bi, 1, ......, Bi, M).Richie wanted to give his mother a necklace with maximum Beautiness so he bought 2 necklaces with index i, j.The beautiness of the combined necklace is

// min(max(Bi, 1, Bj, 1), max(Bi, 2, Bj, 2), ......, max(Bi, M, Bj, M))

// Note that it is possible that i = j i.e.Richie bought 2 pieces of the same necklace.Find the maximum value of beautiness that he can achieve.

// INPUT FORMAT
// First line contains two integers N and M denoting the number of necklaces and the number of stones in each necklace.
// Next N lines contains M integers each where ith line denotes the ith Necklace

// OUTPUT FORMAT
// Print a single integer denoting the maximum value of beautiness

// CONSTRAINTS
// 1 <= N <= 2e5
// 1 <= M <= 8
// 1 <= Bi, j <= 1e9

function checkCombination(necklaceData, n, m, i, j) {
    let minTillNow = Number.MAX_VALUE;
    for (let k = 0; k < m; k++) {
        minTillNow = Math.min(minTillNow, Math.max(necklaceData[i][k], necklaceData[j][k]));
    }
    return minTillNow;
}

function findMaxValue(necklaceData, n, m) {
    let retVal = Number.MIN_VALUE;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            retVal = Math.max(retVal, checkCombination(necklaceData, n, m, i, j));
        }
    }
    return retVal;
}


var [n, m] = readline().split(" ");
var necklaceData = [];
for (let i = 0; i < n; i++) {
    necklaceData.push(readline().split(" "));
}
console.log(findMaxValue(necklaceData, n, m));