// Problem Statement

// Given a linked list, and a number k.Your task is to reverse at every k node.

// Input - 1, 2, 3, 4, 5, 6, 7, 8, k = 2
// Output - 2, 1, 4, 3, 6, 5, 8, 7

// = Reverse sublist having size = k - reverse(head,
//ka = Keep track of prev and next pointer
//         while reversing the lisD = Call reverse(next, 
//ka P = Return prev(head of list)

var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function reverse(head, k) {
    if (head == null)
        return null;
    var current = head;
    var next = null;
    var prev = null;

    var count = 0;

    while (count < k && current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
    }


    if (next != null)
        head.next = reverse(next, k);

    return prev;
}


function push(new_data) {

    new_node = new Node(new_data);

    new_node.next = head;

    head = new_node;
}


function print() {
    temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
}

push(8);
push(7);
push(6);
push(5);
push(4);
push(3);
push(2);
push(1);

console.log("Given Linked List - ");
print();

head = reverse(head, 2);

console.log("Reversed list - ");
print();