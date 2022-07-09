function calculator(no1, no2, operation) {
    let operator;
    switch (operator) {
        case '+':
            return no1 + no2;
            break;
        case '-':
            return no1 - no2;
            break;
        case '*':
            return no1 * no2;
            break;
        case '/':
            return no1 / no2;
            break;
        default:
            return ('enter the invalid nyumber');
    }
}
let sol1 = calculator(4, 5, "+") // 9
let sol2 = calculator(3867, 9347, "+") // 13214
let sol3 = calculator(9, 3, "/") // 3
let sol4 = calculator(3, 9, "/") // 0.33  to roundOff fractional part use .toFixed(2) 
let sol5 = calculator(56, 89, "*") // 4984
let sol6 = calculator(-5, 5, "-") // -10
let sol7 = calculator(56, 89, "-") // -33 -->
console.log(sol1);
console.log(sol2);
console.log(sol3);
console.log(sol4);
console.log(sol5);
console.log(sol6);
console.log(sol7);

// calculator(4, 5, "+") // 9 calculator(3867, 9347, "+") // 13214
// calculator(9, 3, "/") // 3
// calculator(3, 9, "/") // 0.33  to roundOff fractional part use .toFixed(2) 
// calculator(56, 89, "*") // 4984
// calculator(-5, 5, "-") // -10
// calculator(56, 89, "-") // -33 -