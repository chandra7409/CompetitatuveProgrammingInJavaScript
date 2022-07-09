//Question.1 // Sort the elements of stack recursively.You should use stack methods like pop, push and peek.You should not create a new array but modify the existing array

function sortedInsert(s, x) {
    if (s.length == 0 || x > s[s.length - 1]) {
        s.push(x);
        return;
    }
    let temp = s.pop();
    sortedInsert(s, x);
    s.push(temp);
}

function sortStack(s) {
    if (s.length != 0) {
        let x = s.pop();
        sortStack(s);
        sortedInsert(s, x);
    }

}


function printStack(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(s[i]);
    }
}
let s = [];
s.push(30);
s.push(-5);
s.push(18);
s.push(14);
s.push(-3);
sortStack(s);
sortedInsert(s);



// Question 2. Write a
// function that returns the maximum and minimum element present in the stack




const maxMin = (s) => {
    let k = s;
    let max = k[k.length - 1];
    let min = k[k.length - 1];
    while (k.length > 0) {
        max = Math.max(k[k.length - 1], max);
        min = Math.min(k[k.length - 1], min);
        k.pop();
    }
    return { "max": max, "min": min }
}

let s = [1, 2, 4];
console.log(maxMin(s));