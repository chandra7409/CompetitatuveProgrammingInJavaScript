// 






//palindrome number
let n = 153;
let rev = 0;
let a = 111;
a = n;
while (a != 0) {
    rev = rev * 10;
    rev = rev + a % 10;
    a = a / 10;

}
if (n == rev) {
    console.log("palindrome number:" + n);
} else {
    console.log("palindrome number is not:" + n);
}