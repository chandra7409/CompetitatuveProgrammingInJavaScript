// class QueueUsingStack {
//     constructor() {
//         this.s1 = [];
//         this.s2 = [];
//     }

//     enQueue(ele) {
//         while (this.s1.length != 0) {
//             this.s2.push(this.s1.pop());
//         }

//         this.s1.push(ele);

//         while (this.s2.length != 0) {
//             this.s1.push(this.s2.pop());
//         }
//     }

//     deQueue() {
//         if (this.s1.length == 0) {
//             console.log("Queue is Empty");
//         }

//         let val = this.s1[this.s1.length - 1];
//         this.s1.pop();
//         return val;
//     }
// }




// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
class Deque {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    addBack(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    addFront(element) {
        if (this.isEmpty()) { //1
            this.addBack(element);
        } else if (this.front > 0) { //2
            this.front--;
            this.items[this.front] = element;
        } else { //3
            for (let index = this.rear; index > 0; index--) {
                this.items[index] = this.items[index - 1];
            }
            this.rear++;
            this.items[0] = element;
        }
        return true;
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.front];
        this.items[this.front] = 0;
        this.front++;
        return result;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.rear - 1];
        this.items[this.rear - 1] = 0;
        this.rear--;
        return result;
    }

    length() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.rear === 0;
    }

    print() {
        for (let i = this.front; i < this.rear; i++) {
            console.log(this.items[i]);
        }
    }
}

let q = new Deque();
q.addBack(1);
q.addBack(2);
q.addFront(3);
q.addFront(4);
q.removeBack();
q.removeFront();
q.print();



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


// class Queue {
//     constructor() {
//         this.data = [];
//         this.rear = 0;
//         this.front = 0;
//     }
//     length() {
//         return this.rear - this.front;
//     }

//     isEmpty() {
//             return this.rear === 0;
//         }
//         //Insertion of elements
//     enqueue(ele) {
//         this.data[this.rear] = ele;
//         this.rear = this.rear + 1;
//     }

//     getFront() {
//         if (this.isEmpty() === false) {
//             return this.data[this.front];
//         }
//     }

//     dequeue() {
//         if (this.isEmpty() === false) {
//             let value = this.data[this.front];
//             this.front = this.front + 1;
//             return value;
//         }
//     }

//     print() {
//         for (let i = this.front; i < this.rear; i++) {
//             console.log(this.data[i]);
//         }
//     }
// }

// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// //queue.print();

// //queue.dequeue();
// //queue.dequeue();
// //queue.print();
// reverse(q);

// function reverse(queue) {

//     let stack = [];

//     while (queue.length() > 0) {
//         stack.push(queue.dequeue());
//     }

//     while (stack.length > 0) {
//         queue.enqueue(stack.pop());
//     }
//     queue.print();
// }



// let q = new QueueUsingStack();
// q.enQueue(1);
// q.enQueue(2);
// q.enQueue(3);
// q.enQueue(4);

// console.log(q.deQueue());
// console.log(q.deQueue());
// console.log(q.deQueue());