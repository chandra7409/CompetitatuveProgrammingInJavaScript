let repeatedSubString = (word) => {
    // Longest Proper Prefix that is suffix array
    let lps = new Array(word.length).fill(0);
    top = 0
    for (let bottom = 1; bottom < word.length; bottom++) {
        // Phase 3: roll the prefix pointer back until match or
        // beginning of pattern is reached
        while (top != 0 && word.charAt(bottom) != word.charAt(top)) {
            top = lps[top - 1]
        }
        //Phase 2: if match, record the LSP
        //for the current `i`
        // and move prefix pointer
        if (word.charAt(top) == word.charAt(bottom)) {
            top++;
            lps[bottom] = top
        } // Phase 1: is implicit here because of the for loop and
        // conditions considered above
    }
    return lps[word.length - 1] > 0 && word.length % (word.length - lps[word.length - 1]) == 0;
}
var str = "abcdab";
console.log(repeatedSubString(str));