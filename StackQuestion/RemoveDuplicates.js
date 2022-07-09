function removeDuplicates(str) {
    let st = new Stack();

    for (let idx = 0; idx < str.length; idx++) {
        let ch = str[idx];
        if (!st.isEmpty()) {
            let topEle = st.peek();
            if (topEle == ch) {
                st.pop();
            } else if (topEle != ch && ch == str[idx - 1]) {
                //don't do anything
                continue;
            } else {
                st.push(ch);
            }
        } else {
            st.push(ch);
        }
    }

    let res = '';
    while (!st.isEmpty()) {
        res += st.peek();
        st.pop();
    }
    return res;
}

console.log(removeDuplicates("aabbacca"));