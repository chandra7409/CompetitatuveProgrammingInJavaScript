//=============check the string given by input by user  as a string is palindrome or not palindrome



function checkPalinrdome(str) {
    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'it is not a palindrome';
        }
    }
    return 'it is a palindrome';
}
const string = prompt('Enter a string :');
const value = checkPalinrdome(string);
console.log(value);


let prompt = 0;
let n = prompt("Enter the numebr");
if (n % 2 == 0) {
    console.log("divided by 2");

} else {
    console.log("divided by is not 2");
}