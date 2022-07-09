// var date = new Date();
// var n = Date.toString();
// console.log(n);
//const d = new Date();


//const d = new Date(2018, 11, 24, 10, 33, 30, 0);

//const d = new Date(2018, 11, 24, 10, 33, 30);
//const d = new Date(2018, 11, 24, 10, 33, 30);
// const da = new Date(99, 11, 24);
// console.log(da);
// const d = new Date("October 13, 2014 11:13:00");
// console.log(d);



// const d = When you display a date object in HTML,
//     it is automatically converted to a string, with the toString() method.


// const d = new Date();
// d.toString();
// console.log(d);



//The toUTCString() method converts a date to a UTC string(a date display standard).


// const d = new Date();
// d.toUTCString();
// console.log(d);




//the toDateString() method converts a date to a more readable format:

// const d = new Date();
// d.toDateString();
// console.log(d);



//The toISOString() method converts a Date object to a string, using the ISO standard format:

// const d = new Date();
// d.toISOString();
// console.log(d);



// const d = new Date("2015-03-25");
// console.log(d);


// const d = new Date("03/25/2015");
// console.log(d);


// Date Input - Parsing Dates

// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

// Date.parse() returns the number of milliseconds between the date and January 1, 1970:




// let msec = Date.parse("March 21, 2012");
// const d = new Date(msec);
// console.log(d);


// The getTime() Method

// The getTime() method returns the number of milliseconds since January 1, 1970:




// const d = new Date();
// d.getTime();
// console.log(d);




const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
console.log(month);