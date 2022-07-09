class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // inorderTraversal(root) {
    //     if (root == null) {
    //         return root;
    //     }
    //     this.inorderTraversal(root.left);
    //     console.log(root.data);
    //     this.inorderTraversal(root.right);
    // }
    // printInOrder() {
    //     this.inorderTraversal(root);
    // }


    // postOrderTraversal(root) {
    //     if (root == null) {
    //         return root;
    //     }


    //     this.postOrderTraversal(root.left);
    //     this.postOrderTraversal(root.right);
    //     console.log(root.data);
    // }
    // printpostOrder() {
    //     this.postOrderTraversal(root);
    // }
    // preOrderTraversal(root) {
    //     if (root == null) {
    //         return root;
    //     }

    //     console.log(root.data);
    //     this.preOrderTraversal(root.left);
    //     this.preOrderTraversal(root.right);
    // }
    // printpreOrder() {
    //     this.preOrderTraversal(root);
    // }

    levelOrder(root) {
        let queue = []; //queue=10
        queue.push(root);
        while (queue.length != 0) {
            let temp = queue.shift();
            console.log(temp.left);
            if (temp.left !== null) {
                queue.push(temp.left);
            }
            if (temp.right !== null) {
                queue.push(temp.right);
            }
        }
    }
    printLevelOrder() {

    }


}



var root = new TreeNode(10);
root.left = new TreeNode(3);
root.right = new TreeNode(11);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(12);
// root.printInOrder(root);
// console.log("======================inorder=======");
// root.printpostOrder(root);
// console.log("==========postorder===========");
// root.printpreOrder(root);
// console.log("============preorder===============");
root.levelOrder(root);


//Inorder traversal==left-root-right
//postorder traversal==left-right-root
//preorder traversal==root-left-right
//console.log(root);