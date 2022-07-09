   function printParenthesis(n, open, close, Output) {
       if (open == n && close == n) {
           //base case
           console.log(Output);

           return;

       }
       // self work and recursion call
       if (open < n) { //'('
           printParenthesis(n, open + 1, Output + '(');
       }
       if (close < open) { // add ')'
           printParenthesis(n, open, close + 1, Output + ')');
       }
   }
   printParenthesis(1, 0, 0, "");


   // function LuckySevenArray(arr) {
   //     if (arr.length < 3) {
   //         return 'it is not possible';

   //     }
   //     for (let i = 0; arr.length; i++) {
   //         if (arr[i] + arr[i - 1] + arr[i + 2] === 7) {
   //             return true;
   //         }
   //     }
   //     return false;
   // }
   // let arr = [2, 1, 5, 1, 0];
   // console.log(LuckySevenArray(arr));