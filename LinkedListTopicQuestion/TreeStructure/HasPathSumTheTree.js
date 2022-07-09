var hasPathSum = function(root, targetSum) {
    let hasVal = false;

    function recur(root, targetSum, sum) {
        console.log(sum);
        if (root === null) {
            return;
        }
        sum += root.val;
        if (root.left === null && root.right === null) {
            if (sum === targetSum) {
                hasVal = true;
            }
            return;
        }
        if (root.left !== null) {
            recur(root.left, targetSum, sum);
        }
        if (root.right !== null) {
            recur(root.right, targetSum, sum);
        }
    }

    recur(root, targetSum, 0);
    return hasVal;
};