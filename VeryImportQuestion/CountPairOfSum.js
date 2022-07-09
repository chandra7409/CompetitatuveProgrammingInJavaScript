// Given an array and number k.Your task is to find the number of pairs which are having sum k.
// Input

//     [1, 2, 5, 6, 7, 8, 3], k = 3
// Output: 1
// Solution - https: //jsfiddle.net/45pgLy3u/   Steps U
//     #8 Create a map which can store frequency of all element
// 8 Traverse the array and check if there is any pair giving sum = k,
//     if yes, increment the counteQ 8 Divide the count by + 8 Print the 







var arr = [1, 2, 5, 6, 7, 8, 3];

function pairsCount(n, sum) {
    var hm = new Map();

    for (var i = 0; i < n; i++) {

        if (!hm.has(arr[i]))
            hm.set(arr[i], 0);

        hm.set(arr[i], hm.get(arr[i]) + 1);
    }
    var count = 0;

    for (i = 0; i < n; i++) {
        if (hm.get(sum - arr[i]) != null)
            count += hm.get(sum - arr[i]);

        if (sum - arr[i] == arr[i])
            count--;
    }

    return count / 2;
}

var sum = 3;
console.log("Count of pairs is " + pairsCount(arr.length, sum));