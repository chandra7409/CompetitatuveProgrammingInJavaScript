function isSubsetSum(set, n, sum) {

    let subset = new Array(sum + 1);

    for (let i = 0; i < sum + 1; i++) {
        subset[i] = new Array(sum + 1);
        for (let j = 0; j < n + 1; j++) {
            subset[i][j] = 0;
        }
    }

    for (let i = 0; i <= n; i++)
        subset[0][i] = true;

    for (let i = 1; i <= sum; i++)
        subset[i][0] = false;

    for (let i = 1; i <= sum; i++) {
        for (let j = 1; j <= n; j++) {
            subset[i][j] = subset[i][j - 1];
            if (i >= set[j - 1])
                subset[i][j] = subset[i][j] ||
                subset[i - set[j - 1]][j - 1];
        }
    }

    return subset[sum][n];
}

// let set = [3, 34, 4, 12, 5, 2];
// let sum = 9;
// let n = set.length;
// if (isSubsetSum(set, n, sum) == true)
//     console.log("Found a subset" + " with given sum");
// else
//     console.log("No subset with" + " given sum");
// }

let set = [3, 34, 4, 12, 5, 2];
let sum = 9;
let n = set.length;
// if (isSubsetSum(set, n, sum) == true)
//     console.log("Found a subset" + " with given sum");
// else
//     console.log("No subset with" + " given sum")


console.log(isSubsetSum(set, n, sum))