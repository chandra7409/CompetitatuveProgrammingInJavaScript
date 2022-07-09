// you are given a binary tree containing only digits from 0 to 9.
// Each root - to - leaf path in the tree represents a number.For example, 1 - > 2 - > 3 represents the
// number 123. You need to find and
// return the total sum of all root - to - leaf numbers.







class Node {
    constructor(_data) {
        this.data = _data;
        this.left = null;
        this.right = null;
    }
}

let rootToLeafSum = function(root) {
    let sumGlobal = 0;
    let rootToLeafSumHelper = function(root, arr) {
        if (root === null) {
            return;
        }
        arr.push(root.data);
        if (root.left === null && root.right === null) {
            // this is a leaf
            // for the leaf node
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += (arr[i] * Math.pow(10, arr.length - i - 1));
            }
            sumGlobal += sum;
            arr.pop();
            return;
        }
        rootToLeafSumHelper(root.left, arr);
        rootToLeafSumHelper(root.right, arr);
        arr.pop();
    }
    rootToLeafSumHelper(root, []);
    console.log(sumGlobal);
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);

rootToLeafSum(root);