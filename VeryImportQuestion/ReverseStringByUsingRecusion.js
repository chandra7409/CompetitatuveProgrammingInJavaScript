// Given 2 binary strings.Your task is to add 2 numbers.For example -
//     Input - “unacademy”
// Output - “ymedacanu”
// Steps - Z +
//     P Create recursive

// function taking input as string str and integer R
//     'P Check if i == n/2 -> if yes return where n = length of strin` *
// P Swap characters present at i and n - i - 1 index in strin `
// "P Call recursive function - with string as str and integer as i+1


function reverse(str, i) {
    var n = str.length;
    if (i >= n / 2) {

        output = str.join("");
        console.log(output);
        return n;
    }
    str = swap(str, i, n - i - 1);
    reverse(str, i + 1);

}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

var str1 = "Tilakchandra";
str = Array.from(str1);
reverse(str, 0);