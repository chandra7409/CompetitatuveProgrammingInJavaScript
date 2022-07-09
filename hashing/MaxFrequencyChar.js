function MaxFrequencyChar(str) {
    let mp = new Map();
    let MaxFreq = 0;;
    let MaxFreqChar = "";
    for (let i = 0; i < str.length; i++) {
        if (mp.has(str[i])) {
            let CurrentFreq = mp.get(str[i]);
            mp.set(str[i], CurrentFreq + 1);


        } else {
            mp.set(str[i], 1);
        }
        if (mp.get(str[i]) > MaxFreq) {
            MaxFreq = mp.get(str[i]);
            MaxFreqChar = str[i];
        }
    }
    return MaxFreqChar;
}
let str = "Tilakchandra";
console.log(MaxFrequencyChar(str));