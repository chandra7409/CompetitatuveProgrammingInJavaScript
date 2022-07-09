function findSubsets(subset, nums, output, index) {

    // Base Condition
    if (index == nums.length) {
        subset.push(output);
        return;
    }

    // Not Including Value which is at Index
    findSubsets(subset, nums, [...output], index + 1);

    // Including Value which is at Index
    output.push(nums[index]);
    findSubsets(subset, nums, [...output], index + 1);
}

// Main List for storing all subsets
let subset = [];

// Input ArrayList
let input = [1, 3, 5];

findSubsets(subset, input, [], 0);

// Comparator is used so that all subset get
// sorted in ascending order of values
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