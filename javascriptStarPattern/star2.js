let n = 5;
let str = "";
for (row = 1; row <= n; row++) {
    for (col = 1; col <= row; col++) {
        str = str + "*"

    }
    str = str + "\n";
}
console.log(str);
for (row = 1; row <= n; row++) {
    for (col = row; col <= row; col--) {
        str = str + "*"

    }
    str = str + "\n";
}
console.log(str);