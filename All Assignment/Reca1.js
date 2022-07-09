// const nullify = (N) => {
//     let table = new Array(N + 1).fill(1e9);
//     table[0] = 0;
//     for (let i = 0; i <= N; i++) {
//         let str = i.toString();
//         for (let c = 0; c < str.length; c++) {
//             let xo = i - parseInt(str[c]);
//             table[i] = Math.min(table[i], table[xo] + 1);
//         }
//     }
//     return table[N];
// }
// let N = 27;
// console.log(nullify(N));
var a = 5;

function first() {
    a = 6;


}

function second() {
    alert(a);
}