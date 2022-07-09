// Given a binary search tree A and a number B, look
// for the pair of node in A whose sum is equal to B.If it exists
// return true
// else false.


// Input Format
// First arg is node of tree.
// Second arg is integer B.


// Output Format
// Return true
// if such a pair can be found, 0 otherwise






class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


function t2Sum(A, B) {
    arr = [];

    function inorder(A, arr) {
        if (!A)
            return
        A.left = inorder(A.left, arr)
        arr.push(A.left, arr)
        A.right = inorder(A.right, arr)

    }
    inorder(A, arr)
    l = 0
    r = arr.length - 1
    while (l < r)
        if (arr[l] + arr[r] == B)
            return true;
        else if (arr[l] + arr[r] > B)
        r -= 1
    else
        l += 1
    return false;
}
let root = new Node(10);
root.left = new Node(9);
root.right = new Node(20);
console.log(t2Sum(root, 20));