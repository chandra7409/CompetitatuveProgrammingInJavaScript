// function lastPosition(n, m, k) {

//     if (m <= n - k + 1) {

//         return m + k - 1;
//     } else {

//         m = m - (n - k + 1);

//         return (m % n == 0) ? n : (m % n);

//     }
// }

// // size here is size of the circle ..
// let size = 5;
// //items hereis the no.of items to deliver...
// let items = 10;
// console.log(lastPosition(size, items, k));



//=================Distributing M items in a circle of size N starting from K-th position


//  itMems are to be delivered in a circle of size N. Find the position where the M-th item will be delivered if we start from a given position K. Note that items are distributed at adjacent positions starting from K.
// Examples : 


// Input : N = 5 // Size of circle
//     M = 2 // Number of items
//     K = 1 // Starting position
// Output : 2
// The first item will be given to 1st 



function lastPosition(n, m, k) {

    // n - k + 1 is number of
    // positions before we reach
    // beginning of circle.
    // If m is less than this value,
    // then we can simply return
    // (m-1)th position
    if (m <= n - k + 1)
        return m + k - 1;

    // Let us compute remaining items
    // before we reach beginning.
    m = m - (n - k + 1);

    // We compute m % n to skip
    // all complete rounds. If we
    // reach end, we return n
    // else we return m % n
    return (m % n == 0) ? n : (m % n);
}

// Driver code
let n = 5;
let m = 8;
let k = 2;
console.log(lastPosition(n, m, k));