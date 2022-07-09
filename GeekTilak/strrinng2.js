function maxsp() {
    let n = 0;

    let ch = str[0];
    let ans = maxsp(str.substring(1));
    if (ch == 'x') {
        return ans + ch;
    }
    return ch + ans;
}
console.log(maxsp("axxbdxcefxhix"));