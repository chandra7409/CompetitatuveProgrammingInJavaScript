function multiply(num1, num2) {

    num1 = BigInt(num1);
    num2 = BigInt(num2)
    return eval(num1 * num2).toString()
}


let num1 = "10";
let num2 = "20";
console.log(multiply(num1, num2));