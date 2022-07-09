

//question 2==Write a function that takes a string and returns a string palindrome.


function checkPalindromeString(str) {
    let n = str.length - 1;
    for (let i = 0; i < n / 2; i++) {
        let a = str[i];
        let b = str[n - i];
        if (a != b) {
            return false;
        }
    }
    return true;

}

function Is_palindrome(str) {
    let ans = checkPalindromeString(str);
    if (ans == true) {
        console.log("passed string is palindrome");
    } else {
        console.log("passe string is not paloidrome");
    }
}

let value = "racecar";
Is_palindrome(value);