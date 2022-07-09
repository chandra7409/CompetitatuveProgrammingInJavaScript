class Queue {
    constructor(Length = 5) {
        this.data = [];
        this.front = -1;
        this.rear = -1;
        this.maxLength = Length;
        this.currLength = 0;
    }
    size() {
        return this.currLength;

    }
    isEmpty() {
        return this.currLength == 0;
        //return front==-1;
    }
    enqueue(value) {
        //1st way using currLength
        if (this.currLength == this.maxLength) {
            throw new Error("queue overflow");
        }
        // 2nd way the rear using 
        if ((this.rear + 1) % this.maxLength == this.front) {
            throw new Error("queue overflow");
        }

        //updated front on adding first element in queue
        if (this.front == -1) {
            this.front = (this.front + 1) % this.maxLength;
        }
        this.rear = (this.rear + 1) % this.maxLength;
        this.data[this.rear] = value;
        this.currLength++;
    }
    dequeue() {
        // 1st way usin g the currLength
        if (this.currLength == 0) {
            throw new Error("queue underflow");

        }
        // 2nd way using the front 
        if (this.front == -1) {
            throw new Error("queue underflow");
        }

        //update front and rear on deleting the last element
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {

            this.front = (this.front + 1) % this.maxLength;
        }
        this.currLength--;
    }
    getFront() {
        if (this.front == -1 || this.currLength == 0) {
            console.log("queue is Empty");
            return;
        }
        return this.data[this.front];
    }

}
let myQueue = new Queue();
//console.log(myQueue);



myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
//myQueue.enqueue(60);
// myQueue.enqueue(70);
// myQueue.enqueue(80);
// // myQueue.enqueue(90);
// myQueue.enqueue(100);



// console.log(myQueue.getFront());



myQueue.dequeue();
console.log(myQueue.getFront());
myQueue.dequeue();
console.log(myQueue.getFront());
myQueue.dequeue();
console.log(myQueue.getFront());
myQueue.dequeue();
console.log(myQueue.getFront());
// myQueue.dequeue();
// console.log(myQueue.getFront());