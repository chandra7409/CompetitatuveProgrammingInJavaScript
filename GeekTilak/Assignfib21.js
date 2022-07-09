//Find all subsets of an array arr using a backtracking algorithm



function findSubsets(subset, nums, output, index) {
    if (index == nums.length) {
        subset.push(output);
        return;
    }
    findSubsets(subset, nums, [...output], index + 1);
    output.push(nums[index]);
    findSubsets(subset, nums, [...output], index + 1);
}
let subset = [];

// Input ArrayList
let input = [];
input.push(1);
input.push(2);
input.push(3);

findSubsets(subset, input, [], 0);


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

// Printing Subset
for (let i = 0; i < subset.length; i++) {
    for (let j = 0; j < subset[i].length; j++) {
        console.log(subset[i][j] + " ");
    }
    console.log("<br>");
}