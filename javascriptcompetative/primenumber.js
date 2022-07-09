// A javascript program for iterative postorder traversal using stack

// A binary tree node
class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root;
let list = [];

// An iterative function to do postorder traversal
// of a given binary tree
function postOrderIterative(node) {
    let S = [];
    // Check for empty tree
    if (node == null)
        return list;
    S.push(node);
    let prev = null;
    while (S.length != 0) {
        let current = S[S.length - 1];

        /* go down the tree in search of a leaf an if so process it
        and pop stack otherwise move down */
        if (prev == null || prev.left == current ||
            prev.right == current) {
            if (current.left != null)
                S.push(current.left);
            else if (current.right != null)
                S.push(current.right);
            else {
                S.pop();
                list.push(current.data);
            }

            /* go up the tree from left node, if the child is right
            push it onto stack otherwise process parent and pop
            stack */
        } else if (current.left == prev) {
            if (current.right != null)
                S.push(current.right);
            else {
                S.pop();
                list.push(current.data);
            }

            /* go up the tree from right node and after coming back
            from right node process parent and pop stack */
        } else if (current.right == prev) {
            S.pop();
            list.push(current.data);
        }

        prev = current;
    }

    return list;
}

// Driver program to test above functions

// Let us create trees shown in above diagram
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let mylist = postOrderIterative(root);
console.log("Post order traversal of binary tree is :<br>");
for (let i = 0; i < mylist.length; i++) {
    console.log(mylist[i] + " ");
}