let currArr = [2, 5, 3];
let arr = [];
let maxIdx;
let sMaxIdx;
for (let i = 0; i < currArr.length - 1; i++) {
    for (let j = i + 1; j < currArr.length; j++) {
        arr.push(currArr[i] & currArr[j]);
    }
}

function findMax(arr) {
    let max = arr[0];
    maxIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIdx = i;
        }
    }
    return max;
}

function findSMax(arr) {
    let max = findMax(arr);
    let sMax = arr[0];
    sMaxIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= sMax && arr[i] < max) {
            sMax = arr[i];
            sMaxIdx = i;
        }
    }
    return sMax;
}

function solve(arr) {
    while (arr.length > 1) {
        let max = findMax(arr);
        arr.splice(maxIdx, 1);
        let secMax = findSMax(arr);
        arr.splice(sMaxIdx, 1);
        let xorElement = max ^ secMax;
        arr.push(xorElement);
    }
    return arr[0];
}
console.log(solve(arr));