class TreeNode {
    constructor() {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    rightViewUntil(node, level) {
        if (node == null) {
            return;
        }
        if (max_level < level) {
            console.log(node.data + "");
            max_level = level;

        }
        this.rightViewUntil(node.right, level + 1);
        this.rightViewUntil(node.left, level + 1);
    }
}
var root = new TreeNode(10);
root.left = new TreeNode(3);
root.right = new TreeNode(11);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(12);
let max_level = 0;
root.rightViewUntil(root);