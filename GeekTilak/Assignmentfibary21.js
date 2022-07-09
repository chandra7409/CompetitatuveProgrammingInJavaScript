function SubsetOfArray(subset, num, output, index) {
    if (index == num.length) {
        subset.push(output);
        return;
    }
    SubsetOfArray(subset, num, [...output], index + 1);
    output.push(num[index]);
    SubsetOfArray(subset, num, [...output], index + 1);
}
var subset = [];
const input = [];
input.push(1);
input.push(2);
input.push(3);
SubsetOfArray(subset, input, [], 0);
subset.sort((o1, o2) => {
    let n = Math.min(o1.length, o2.length);
    for (let i = 0; i < n; i++) {
        if (o1[i] == o2[i]) {
            continue;
        } else {
            return o1[i] - o2[i];
        }
    }
    return 1;

});
for (let i = 0; i < subset.length; i++) {
    for (let j = 0; j < subset[i].length; j++) {
        console.log(subset[i][j] + "");
    }
    console.log("<br>")
}