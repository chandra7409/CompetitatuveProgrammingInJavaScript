class WordArray {
    index = 0;
    constructor(str, index) {
        this.str = str;
        this.index = index;
    }
}
class IndexArray {
    array = [];
    size = 0;

    constructor(str, size) {
        this.size = size;
        this.array = Array(size).fill(null);
        var i = 0;
        for (i = 0; i < size; ++i) {
            this.array[i] = new WordArray(str[i], i);
        }
    }
}

function printAnagrams(inputArr, size) {
    var indexArray = new IndexArray(inputArr, size);
    const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');

    var i = 0;
    for (i = 0; i < size; ++i) {
        indexArray.array[i].str = sort(indexArray.array[i].str);
    }

    indexArray.array.sort((a, b) => a.str.localeCompare(b.str))

    for (i = 0; i < size; ++i) {
        console.log(inputArr[indexArray.array[i].index] + " ");
    }
}


var inputArr = ["data", "atad", "number", "tada", "adat", "bernum"];
var size = inputArr.length;
printAnagrams(inputArr, size);