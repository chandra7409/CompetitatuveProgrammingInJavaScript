function Cycle(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false;
}


let head = [3, 2, 0, 4];

//let pos = 1;
console.log(Cycle(head));