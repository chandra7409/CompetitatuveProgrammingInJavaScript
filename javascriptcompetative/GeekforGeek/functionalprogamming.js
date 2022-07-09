//========functional progamming in Higher Order function===

// const radius = [3, 1, 2, 4];
// const calculateArea = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));

// const calculateAreacircemferece = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateAreacircemferece(radius));


//const radius = [3, 1, 2, 4];
// const calculateArea = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));

// const calculateAreaDiameter = function(radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// };



const area = function(radius) {
    return Math.PI * radius * radius;
};
const circumence = function(radius) {

    return 2 * Math.PI * radius;
}
const calculate = function(radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumence));