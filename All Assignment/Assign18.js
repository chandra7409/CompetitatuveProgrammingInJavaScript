//Take an array of size 10. Calculate sum of all array elements using tail recursion.


function arraySum(Arr, size, sum = 0) {
    if (size == 0) //base case
        return sum;

    return arraySum(Arr, size - 1, sum + Arr[size - 1]);
}
const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const size = Arr.length;
console.log(arraySum(Arr, size));