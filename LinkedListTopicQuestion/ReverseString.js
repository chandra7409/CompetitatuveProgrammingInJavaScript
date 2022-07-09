function reverseString(str) {
    let n = str.length;
    let newString = "";
    for (let i = n - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let x = reverseString("Tilakchandra");
console.log(x);