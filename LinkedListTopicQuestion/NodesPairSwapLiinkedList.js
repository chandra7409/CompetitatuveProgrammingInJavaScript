// Given a linked list, swap every two adjacent nodes and
// return its head.You must solve the problem without modifying the values in the list 's nodes (i.e., only nodes themselves may be changed.)
// Example 1:


//     Input: head = [1, 2, 3, 4]
// Output: [2, 1, 4, 3] 





//++++++++++++++++++first approach of the nodesPairSwap+++++++++++
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     //var swapPairs = function(head) {
//     if (!this.head || !this.head.next) {
//         return thid.head;
//     }

//     let A = this.head;
//     let B = this.head.next;
//     let prev = null;

//     while (A && B) {
//         let temp = B.next;
//         B.next = A;
//         A.next = temp;

//         if (prev != null) {
//             prev.next = B;
//         } else {
//             this.head = B;
//         }

//         prev = A;
//         A = temp;
//         B = A.next;


//     }

//     let myLinkedList = new SinglyLinkedList();
//     myLinkedList.head = new Node(1);
//     myLinkedList.head.next = new Node(2);
//     myLinkedList.head.next.next = new Node(3);
//     myLinkedList.head.next.next.next = new Node(4);
//     myLinkedList.head.next.next.next.next = new Node(5);
//     myLinkedList.head.next.next.next.next.next = new Node(6);
//     myLinkedList.head.next.next.next.next.next.next = new Node(7);
//     myLinkedList.printLinkedList();
//     console.log("------------------------");
//     myLinkedList.pairWiseSwap();
//     myLinkedList.printLinkedList();

//second approach of NodesPairSwap of the linked list


//
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    var v1 = head,
        v2 = head.next,
        v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};