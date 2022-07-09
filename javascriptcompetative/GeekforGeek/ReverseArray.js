function ReverseArray(n) {
    n = n + "";
    return n.split("").reverse().join("");

}
console.log(ReverseArray(43445));