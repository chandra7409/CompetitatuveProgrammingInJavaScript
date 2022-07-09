function Intersection(arr1, arr2) {
    arr1.filter(item => {
        if (arr2.includes(item))
            return arr2.splice(arr2.indexOf(item), 1) || true;
    })
};


let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8];
console.log(Intersection(arr1, arr2));