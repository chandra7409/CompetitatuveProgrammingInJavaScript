//let NO_OF_CHARS = 256;

function maxDis(str, n) {


    let count = new Array(NO_OF_CHARS);
    for (let i = 0; i < count.length; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < n; i++) {
        count[str[i].charCodeAt(0)]++;
    }

    let max_distinct = 0;
    for (let i = 0; i < NO_OF_CHARS; i++) {
        if (count[i] != 0) {
            max_distinct++;
        }
    }
    return max_distinct;
}

function smallesteSubstr_maxDistictChar(str) {

    // Size of given string
    let n = str.length;

    // Find maximum distinct characters
    // in any string
    let max_distinct = maxDis(str, n);

    // Result
    let minl = n;

    // Brute force approach to find all
    // substrings
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let subs = null;

            if (i < j)
                subs = str.substring(i, j);
            else
                subs = str.substring(j, i);

            let subs_lenght = subs.length;
            let sub_distinct_char = maxDis(
                subs, subs_lenght);
            if (subs_lenght < minl &&
                max_distinct == sub_distinct_char) {
                minl = subs_lenght;
            }
        }
    }
    return minl;
}

// Driver Code
let str = "AABBBCBB";
let len = smallesteSubstr_maxDistictChar(str);

console.log("The length of the smallest substring" +
    " consisting of maximum distinct " +
    "characters : " + len);