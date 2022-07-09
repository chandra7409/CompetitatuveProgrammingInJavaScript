// Program to demonstrate use of rest parameters 
function rest(...n) {
    let sum = 0;
    for (let i in n) {
        sum = sum + i;

    }
    return sum
}
console.log(rest(1, 2));