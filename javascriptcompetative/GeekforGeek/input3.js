// const name = window.prompt("enter the your name: ");
// alert("your name is " + name);




const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});
r1.question("what is your name ?", function(answer) {
    console.log(`oh, so your is ${answer}`);
    console.log("closing the interface");
    r1.close();
});