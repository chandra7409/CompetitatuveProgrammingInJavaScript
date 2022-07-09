function minNumDel(A) {
    let count = 0;
    let temp = new Array(A.length);
    for (let i = 0; i < A.length; i++)
        temp[i] = 1;
    for (let i = 1; i < A.length; i++)
        for (let idx_2 = 0; idx_2 < i; idx_2++)
            if (A[i] > A[idx_2] && temp[i] < temp[idx_2] + 1)
                temp[i] = temp[idx_2] + 1;
    for (let i = 0; i < A.length; i++)
        if (count < temp[i])
            count = temp[i];
    return A.length - count;
}
let arr = [45, 42, 46, 48, 47];
console.log(minNumDel(arr));