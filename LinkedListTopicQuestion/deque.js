class Dequeue {
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
    enqueueAtFront(value) {
        //if queue is full
        //1st way using the currLength

        if (this.currLength == this.maxLength) {
            throw new Error("queue overflow");
        }
        //2nd way using yeh front and rear
        if ((this.front - 1 + this.maxLength) % this.maxLength == this.rear) {
            throw new Error("queue overflow");
        }
        //if this is the first elelment
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front = (this.front - 1 + this.maxLength) % this.maxLength;
        }

        this.front = (this.front - 1 + this.maxLength) % this.maxLength;
        this.data[this.front] = value;
        this.currLength++;

    }
    AddAtRear(value) {
        //if queue is full
        //1st way using the currLength

        if (this.currLength == this.maxLength) {
            throw new Error("queue overflow");
        }
        //2nd way using yeh front and rear
        if ((this.rear + 1 + this.maxLength) % this.maxLength == this.rear) {
            throw new Error("queue overflow");
        }
        if (this.isEmpty()) {
            this.front = (this.front + 1) % this.maxLength;
        }

    }

    function print(N, mat) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++)
                document.write(
                    " " + mat[i][j]);

            document.write("<br>");
        }
        document.write("<br>");
    }

    let N = 4;
    let input = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    rotateMatrix(N, input);


    print(N, input);