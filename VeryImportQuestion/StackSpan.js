function stockSpan(stocks, n) {
    let resultArr = [];
    let st = new Stack();
    for (let idx = 0; idx < n; idx++) {
        if (st.isEmpty()) {
            resultArr.push(idx + 1);
            st.push(idx);
        } else {
            while (!st.isEmpty() && stocks[st.peek()] < stocks[idx]) {
                console.log(st.peek());
                st.pop();
            }
            if (st.isEmpty()) {
                resultArr.push(idx + 1);
                st.push(idx);
            } else {
                resultArr.push(idx - st.peek());
                st.push(idx);
            }
        }

    }
    return resultArr;
}

let stocks = [100, 80, 60, 70, 60, 75, 85];
console.log(stockSpan(stocks, 7));