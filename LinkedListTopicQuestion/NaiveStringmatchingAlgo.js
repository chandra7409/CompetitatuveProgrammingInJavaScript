function NaiveString(pattern, text) {
    let M = pattern.length;
    let N = text.length;
    for (let i = 0; i <= N - M; i++) {
        for (let j = 0; j < M; j++) {
            if (text[i + j] != pattern[j]) {
                break;
            }

        }
        if (j == M) {
            console.log("pattern found at index" + i + "<br>");
        }
    }
}
let text = "AABAACAADAABAAABAA";
let pattern = "AABA";
var letter = NaiveString(text, pattern);
console.log(letter);