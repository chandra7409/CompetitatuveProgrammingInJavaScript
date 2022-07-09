class Node {
    constructor() {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

function InsertInBST(root, data) {
    if (root == null) { //base condition
        root = new Node(data);
        return root;

    }
    if (data < root.data) {
        root.left = InsertInBST(root.left, data);
    } else {
        root.right = InsertInBST(root.right, data);

    }
    return root;
}

function deleteInBST(root, data) {
    if (root == null) {
        return;
    }
    if (data < root.data) {
        root.left = deleteInBST(root.left, data);
    } else if (data > root.data) {
        root.right = deleteInBST(root.right, data);
    }
    //found the node to delete
    else if (root.left != null && root.right != null) { //node have 2 child
        root.data = minValue(root.right); //inorder successor
        root.right = deleteInBST(root.right, root.data);
    } else if (root.left != null || root.right != null) { //node have 1 child
        root = root.left || root.right;
    } else { //node have 0 child => leaf node
        root = null;
    }

    return root;
}

let root = new Node(10);
InsertInBST(root, 5);
console.log("==============")
deleteInBST(root, 1);