// Given the roots of two binary trees p and q, write a
// function to check
// if they are the same or not.

// Two binary trees are considered the same
// if they are structurally identical, and the nodes have the same value.



// Example 1:


//     Input: p = [1, 2, 3], q = [1, 2, 3]
// Output: true



class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
let p = new Node(1);
let q = new Node(2);
let t = new Node(3);
p.left = q;
p.right = t;
console.log(isSameTree(p));