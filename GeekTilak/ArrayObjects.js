// Requirements: "Write a JavaScript program to sort by id an array of JavaScript objects.
array = [{
    Id: 45,
    Name: "ram"
}, {
    Id: 4,
    Name: "raju"
}, {
    Id: 90,
    Name: "kumar"
}]

array.sort((a, b) => a.Id - b.Id);
console.log(array);