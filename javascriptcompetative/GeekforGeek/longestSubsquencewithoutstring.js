function LongestString(str, i, j) {
    let visited = [26];
    for (let k = i; k <= j; k++) {
        if (visited[str.charAt(k) - 'a'] == true)
            return false;
        visited[str.charAt(k) - 'a'] = true;
    }
    return true;
}

function LongestStringofArray(str) {
    let n = str.length;
    let ros = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++)
            if (LongestString(ros, j, i))
                ros = Math.max(ros, j - i + 1);
        return ros;
    }
}
let str = "tilak";
console.log(LongestStringofArray(str));
let len = LongestStringofArray(str);
console.log("the length of longest " + "non-repeating character" + "substring is" + len);