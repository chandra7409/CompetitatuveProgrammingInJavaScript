let n = 2;
for (let i = 1; i <= n; i++) {
    console.log("Fizz");

}
if (n % 3 == 0) {
    console.log("Fizz");
} else if (n % 5 == 0) {
    console.log("Buzz");
} else if (n % 3 == 0 && n % 5 == 0) {

} else {
    console.log(" nothing output");
}