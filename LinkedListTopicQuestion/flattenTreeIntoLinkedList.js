// Given a binary tree, flatten the tree into a linked list.The linked list should use the same nodes where the right child is pointing towards the next node in the list and the left child pointer is null.




class Node {

    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}
var flatten = function(root) {
    let head = null;
    const revPreOrder = node => {
        if (node.right) revPreOrder(node.right)
        if (node.left) revPreOrder(node.left)
        node.left = null, node.right = head, head = node
    }
    if (root) revPreOrder(root)
};



let root = new Node(10);
root.left = new Node(8);
root.right = new Node(12);
root.left.left = new Node(5);
console.log(flatten(root.data));