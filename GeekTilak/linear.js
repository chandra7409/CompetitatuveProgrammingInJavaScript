// Linear Search: Given an integer array and an element x, find if element is present in array or not. If element is present, then print index of its first occurrence. Else print -1.



// function search(arr, x) {
//     let count = 0;


//     for (let i = 0; i <= arr.lenthh; i++) {
//         if (arr[i] == x) {
//             count++;

//         }


//     }
//     if (count > 0) {
//         return yes;


//     } else {
//         return no;
//     }
// }

// const arr = search([1, 2, 3, 4, 53, 5, 6], 4);
// console.log(arr);


// //twonumber of sum
// function tosum(arr, target) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 result.push(i);
//                 result.push(j);
//                 return result;

//             }
//         }
//     }
// }
// const tosume = tosum([2, 6, 5, 8, 11], 14);
// console.log(tosume);


// function twoSum(array, target) {
//     let result = [];
//     for (let i = 0; i < array.lenght; i++) {
//         for (let j = i + 1; j < array.lenthh; j++) {
//             if (array[i] + array[j] == target) {
//                 result.push(i);
//                 result.push(j);
//                 return result;
//             }
//         }
//     }

// };
// const tosum = twoSum([2, 7, 11, 15], 9);
// console.log(tosum);










// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:

// Input: root = [1,null,2]
// Output: 2
// class Node {
//     constructor(items) {
//         this.data = items;
//         this.left = this.right = null;
//     }
// }
// let root;

// function maxDepth(root) {
//     if (root == null)
//         return -1;
//     else {
//         leftLDepth = maxDepth(node.left);
//         rightDepth = maxDepth(node.right);
//         if (leftLDepth > rightDepth) {
//             return (leftLDepth + 1);

//             return (rightDepth + 1);

//         }

//     }
// }
// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// console.log("Hieght  of tree is:" + maxDepth(root));




// Given two numbers represented by twconsole.log a function that returns the sum list. The sum list is a list representation of the addition of two input numbers.

// Example:

//     Input: 
//     List1: 5->6->3 // represents number 563 
//     List2: 8->4->2 // represents number 842 
//     Output: 
//     Resultant list: 1->4->0->5 // represents number 1405 
//     Explanation: 563 + 842 = 1405

// let head1, head2;
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;

//     }
// }

// function addTwoList(first, second) {
//     let pre = null;
//     let res = null;
//     let temp = null
//     let carry = 0,
//         sum;
//     while (first != null || second != null) {
//         sum = carry + (first != null ? first.data : 0) + (second != null ? second.dat : 0);
//         carry = (sum >= 10) ? 1 : 0;
//         sum = sum % 10;
//         temp = new Node(sum);
//         if (res == null) {
//             res = temp;
//         } else {
//             pre = temp;
//             if (first != null) {
//                 first = first.next;
//             }
//             if (second != null) {
//                 second = second.next;
//             }
//         }
//         if (carry > 0) {
//             temp.next = new Node(carry);
//         }
//         return res;

//     }


//     function printList(head) {
//         while (head != null) {
//             console.log(head.data + " ");
//             head = head.next;
//         }
//         console.log("<br/>");
//     }

//     // Driver Code



//     // creating first list
//     head1 = new Node(7);
//     head1.next = new Node(5);
//     head1.next.next = new Node(9);
//     head1.next.next.next = new Node(4);
//     head1.next.next.next.next = new Node(6);
//     console.log("First List is ");
//     printList(head1);
//     head2 = new Node(8);
//     head2.next = new Node(4);
//     console.log("Second List is ");
//     printList(head2);

//     // add the two lists and see the result
//     rs = addTwoLists(head1, head2);
//     console.log("Resultant List is ");
//     printList(rs);
// }



//your task is to find the first of an array that is not consecutive array
//for example array [1,2,3,4,5,6,7,8] then 1 then 2 then 3 then 4 thenconsecutive  but 6 is not 

function FirstCount(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let cur = arr[i];
        let next = arr[i + 1];
        if (cur + 1 != next) {
            return next;
        }
    }
}
const first = FirstCount([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(first);