//Write a program to get an input (‘How are you’) and by default it should be good in the prompt text box.


// let person = prompt("Please enter your name", "Harry Potter");

// console.log(person);


let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
    alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
let sign = window.prompt(); // open the blank prompt window
let sign = prompt(); //  open the blank prompt window
let sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
let sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"