function checkParentheses(str) {
    const st = new Stack();

    for (const ch of str) {
        if (ch == '(' || ch == '{' || ch == '[') {
            st.push(ch);
        } else if (ch == ')') {
            if (st.peek() == '(') {
                st.pop();
            } else {
                return false;
            }
        } else if (ch == ']') {
            if (st.peek() == '[') {
                st.pop();
            } else {
                return false;
            }

        } else if (ch == '}') {
            if (st.peek() == '{') {
                st.pop();
            } else {
                return false;
            }
        }
    }

    return st.isEmpty();
}

console.log(checkParentheses("[{()}{}]"));
// console.log(checkParentheses("[{(}}{}]"));