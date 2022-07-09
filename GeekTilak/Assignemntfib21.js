//Given an array arr and sum s. Find all unique combinations from an array whose sum is equal to s.



function uniqueCombination(l, sum, K, local, A) {
    if (sum == K) {
        console.log("{");
        for (let i = 0; i < local.length; i++) {
            if (i != 0)
                console.log(" ");
            console.log(local[i]);
            if (i != local.length - 1)
                console.log(", ");
        }
        console.log("}" + "<br>");
        return;
    }

    // For all other combinations
    for (let i = l; i < A.length; i++) {

        // Check if the sum exceeds K
        if (sum + A[i] > K)
            continue;


        if (i > l && A[i] == A[i - 1])
            continue;


        local.push(A[i]);


        uniqueCombination(i + 1, sum + A[i], K, local, A);


        local.pop();
    }
}


function Combination(A, K) {

    A.sort((a, b) => a - b);


    let local = [];

    uniqueCombination(0, 0, K, local, A);
}
let A = [7, 6, 1, 5];

let K = 8;
Combination(A, K);