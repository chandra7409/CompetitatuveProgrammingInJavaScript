// // // var a = ['dog', 'cat', 'hen'];

// // // a[100] = 'fox';

// // // console.log(a.length);



// // const foo = [1, 2, 3];

// // const [n] = foo;

// // console.log(n);


// // let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];

// // rainForests.splice(0, 2);

// // console.log(rainForests);



// const arr1 = [2, 4, 6];

// const arr2 = [3, 5, 7];


// console.log([...arr1, ...arr2]);


var flagsJSON =

    '{ "countries" : [' +

    '{ "country":"Ireland" , "flag":"orange and green" },' +

    '{ "country":"Serbia" , "flag":"red and blue" },' +

    '{ "country":"Peru" , "flag":"red and white" } ]}';

var flagDatabase = JSON.parse(flagsJSON);
console.log(flagDatabase);