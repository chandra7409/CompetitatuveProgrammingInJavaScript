const users = [
    { firstname: "Tialk", lastname: "chandra", age: 20 },
    { firstname: "Ram", lastname: "chhaya", age: 26 },
    { firstname: "Shyam", lastname: "kumar", age: 28 },
    { firstname: "Tialkiiw", lastname: "chandradjjw", age: 20 },

];

//list of full name


// const output = users.map(x => x.firstname + x.lastname);
// console.log(output);


//{20:2,26:1,28:1}

// const output = users.reduce(function(acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc;

// }, {})
// console.log(output);

// const output = users.filter((x) => x.age < 30).map((x) => x.firstname);
// console.log(output);


// for (idx in users);
// console.log(users[0][1])
users.unshift(2);