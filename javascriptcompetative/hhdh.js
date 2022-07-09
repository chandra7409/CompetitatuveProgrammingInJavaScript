let num = 541255477527;
let sum = 0;
while (num > 0) {
    let lastdigit = num % 10;
    sum = sum + lastdigit;
    num = parseInt(num / 10);
}
console.log(sum);



//
const car = {
    color: 'red',
    speed: '1203km',
    brand: 'audi',
}
const newCar = car;
newCar.brand = "BMW";
console.log(car.brand);
//


var one;
Var two = ‘A’
switch (two) {
    case‘ A’:
        {
            one += ’10’;
            break;
        }
    case‘ B’:
        {
            one += ’9’;
            break;
        }
    case‘ C’:
        {
            one += ’8’;
            break;
        }
    default:
        one += ’0’;
}

console.log(one);