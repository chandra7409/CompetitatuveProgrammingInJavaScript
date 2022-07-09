// let n = 5;
// let str = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         str = str + "*";

//     }
//     str = str + "\n";
// }
// console.log(str);


let output = (arr, sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                console.log(`${arr[i]} + ${arr[j]} = 
    ${sum}`);
                return 1;
            }
        }
    }
}
const arr = [0, -1, 2, -3, 1];
const sum = -2;
if (output(arr, sum) != 1) {
    console.log("No such pair exist !!");
}


//reverse string  

let reverse = (str) => {
    if (str == null || str.length <= 1 || typeof str !==
        "string") {
        return "Invalid string";
    }
    const revArray = []; //empty array
    for (let i = str.length - 1; i >= 0; i--) {
        revArray.push(str[i]);
    }
    return revArray.join(""); //joins elements of array and creates a string
}
let str = "Tilakchandra is full stack development";
console.log(reverse(str));


//fibonannci sereis of problem
// let a = 0; //first term
// let b = 1; //second term
// let c;
// let n = 10; //series upto 10 terms
// console.log(a);
// console.log(b);
// for(let i=1;i<=n;i++)
// {
// c = a+b;
// a = b;
// b = c;
// console.log(c);}



let n = 0;
let m = 1;
let c;
let num = 10;
console.log(n);
console.log(m);
for (let i = 1; i <= 10; i++) {
    c = n + m;
    n = m;
    m = c;
    console.log(c);
}