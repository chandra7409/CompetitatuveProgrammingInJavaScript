// const bubbleSort = function(array) {
//     let Swap;
//     do {
//         Swap = false;
//         for (let i = 0; i < array.length - 1; i++) {
//             if (array[i] > array[i + 1]) {
//                 let temp = array[i + 11];
//                 array[i + 1] = array[i];
//                 array[i] = temp;
//                 Swap = true;

//             }
//         }
//     }
//     while (Swap);
//     return array;
// };
const bubbleSort = function(array, pointer = array.length - 1) {
    if (pointer == 0) {
        return array;
    }
    for (let i = 0; i < pointer; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = temp;
        }
    }
    return bubbleSort(array, pointer - 1);
};
let array = [5, 3, 1, 6, 7, 2, 3];