// Given a number N.You need to print all the binary strings having size N and no consecutive 1’ s are
// allowed.For example -




// Steps -
//     1) Generate all string starts with 0 - > genStr(K, str, n ^
//         (Initialize n = 2(If n == K(where K = input) - print stN(If previous character is 1, current character = l(Call - genStr(K, str, n + 1 ^
//                             (If previous character is 0, current character = 0 - Call - genStr(K, str, n + 1 ^
//                                     (If previous character is 0, current character = 1 - Call - genStr(K, str, n + 1)


//                                         2) Generate all string starts with 1 - follow same as step 1