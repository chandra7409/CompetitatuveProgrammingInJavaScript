let num1 = 36;
let num2 = 60;
let hcf;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}
console.log("hcf of " + num1 + " and " + num2 + " is " + hcf);
console.log(`hcf of ${num1} and ${num2} is ${hcf}`);