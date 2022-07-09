class HashTable {
    constructor(size = 10) {
        this.hashTable = new Array(size);
        this.currentSize = 0;
        this.MAX_LOAD_FACTOR = 0.8;
    }

    hash(key) { //"abcd" => 97+98+99+100
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum % this.hashTable.length;
    }

    set(key, value) {
        const index = this.hash(key);
        if (this.hashTable[index] == undefined) {
            this.hashTable[index] = new Array();
        }
        this.hashTable[index].push([key, value]);
        this.currentSize++;

        let loadFactor = this.currentSize / this.hashTable.length;
        if (loadFactor > this.MAX_LOAD_FACTOR) {
            this.rehash();
            console.log("rehashing done");
        }
    }

    get(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.hashTable[index].length; i++) {
            if (this.hashTable[index][i][0] == key) {
                return this.hashTable[index][i][1];
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.hashTable[index].length; i++) {
            if (this.hashTable[index][i][0] == key) {
                this.hashTable[index].splice(i, 1); //splice(index, no. of items to be deleted)
                this.currentSize--;
            }
        }
    }

    print() {
        console.log(this.hashTable);
    }


}


const ht = new HashTable();
ht.set("one", 10);
ht.print();
console.log("----------------------");
ht.set("two", 15);
ht.print();
console.log("----------------------");
ht.set("three", 90);
ht.print();
console.log("----------------------");
ht.set("four", 87);
ht.print();