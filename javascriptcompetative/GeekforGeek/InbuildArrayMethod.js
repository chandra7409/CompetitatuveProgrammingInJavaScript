//Program to clone the object and change the property and then iterate the array of objects using inbuilt functions and to console the object property and frame a meaning full sentence.

let car = [{
    color: "Black",
    speed: "120Kmph",
    brand: "Audi",
    start: function() {
        console.log('Car started');
    },
    stop: function() {
        console.log('Car stopped');
    }
}, {
    color: 'Red',
    speed: '100Kmph',
    brand: 'BMW',
    start: function() {
        console.log('Car started');
    },
    stop: function() {
        console.log('Car stopped');
    },
}, ];

const clonecar = Object.assign({}, car);
for ([key, value] of Object.entries(clonecar)) {
    console.log(`MY CAR IS  ${value.brand} AND COLOR IS ${value.color} AND SPEED IS ${value.speed} `)
}