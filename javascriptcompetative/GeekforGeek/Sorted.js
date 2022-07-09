//Write code for creating a new sorted array from two sorted arrays in O(n+m) time complexity where n,m are the size of the unsorted arrays. 


const arr1 = [1, 2, 4, 5, 6, 2, 3, 4, 5];
const arr2 = [2, 3, 5, 7, 8, 9, 10, 11];
const m = arr1.length;
const n = arr2.length;

function compre(arr1, arr2, m, n) {
    var i = 0,
        j = 0;
    while (i < m && j < n) {
        if (arr1[i] < arr2[j])
            console.log(arr1[i++] + " ");
        else if (arr2[j] < arr1[i])
            console.log(arr2[j++] + " ");
        else {
            console.log(arr2[j++] + " ");
            i++;
        }
    }

    /* Print remaining elements of
    the larger array */
    while (i < m)
        console.log(arr1[i++] + " ");
    while (j < n)
        console.log(arr2[j++] + " ");

    return 0;
}


compre(arr1, arr2, m, n);