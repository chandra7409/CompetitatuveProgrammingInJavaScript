//Write a program to multiply the value the given array and return a result (use array functions)

function SquareArray(num) {
    for (let i = 0; i < num.length; i++) {
        num[i] = num[i] * num[i];
    }
    return num;
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);
let modifiedArray = SquareArray(num);
console.log(modifiedArray);