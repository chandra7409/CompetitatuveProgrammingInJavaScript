// function nextBiggest(arr) {
//     let max = -Infinity,
//         result = -Infinity;


//     for (const value of arr) {
//         const nr = Number(value)

//         if (nr > max) {
//             [result, max] = [max, nr]



//             // save previous max
//         } else if (nr < max && nr > result) {
//             result = nr; // new second biggest
//         }

//     }

//     return result;
// }

// const arr = ['20', '120', '111', '215', '54', '78'];
// console.log(nextBiggest(arr));


//

// var arr = ['20', '120', '111', '215', '54', '78'];

// arr.sort(function(a, b) {
//     return b - a;
//     // return a - b;
// });

// console.log(arr[1]);
// console.log(arr[4]);


// function f(arr){
//     let max=Number.MIN_VALUE;
//     let 
// }
 function f(arr){
//     let max=Number.MIN_VALUE;
//     let 
// }

let max = Number.MIN_VALUE;
    let max2nd = Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]<max && arr[i]>max2nd){
            max2nd=arr[i];
        }
    }
}



//star poer

function f(row,column,n){
    if(row>n+1){
        return;
    }
    if(column>=row){
        process.stdin.write("\n");
        f(row+1,1,n);
        return;
    }
    else{
        process.stdin.write("* ");
        f(row,column+1,n);
    }
}
f(0,0,5);function f(row,column,n){
    if(row>n+1){
        return;
    }
    if(column>=row){
        process.stdin.write("\n");
        f(row+1,1,n);
        return;
    }
    else{
        process.stdin.write("* ");
        f(row,column+1,n);
    }
}