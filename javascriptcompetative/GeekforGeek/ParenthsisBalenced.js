function printParenthesis(open, close, n, output) {
    let
        open = 0,
        close = 0,
        n = 1;
    if (open == n && close == 0) {
        console.log(output);
        return;
    }
    if (open < n) {
        printParenthesis(n, close, open + 1, output + "(");

    }
    if (close < open) {
        printParenthesis(n, open, close + 1, output + ")");
    }
}
console.log(printParenthesis(1, 0, 0, " "));