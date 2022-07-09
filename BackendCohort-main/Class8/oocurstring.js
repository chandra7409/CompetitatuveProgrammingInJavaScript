function count(s, c) {
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        // checking character in string
        if (s.charAt(i) == c)
            res++;
    }
    return res;
}

// Driver method  
let str = "geeksforgeeks";
let c = 'e';
console.log(count(str, c));