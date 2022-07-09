class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
}
push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;

}
const stack = new Stack();
console.log(stack.data.length);