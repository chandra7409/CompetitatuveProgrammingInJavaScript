function subsequence(Output, input) {
    if (input == "") {
        console.log(Output);
        return;
    }
    // self work

    //let firstChar = input + input.charAt();
    let firstChar = input.charAt(0);
    let ros = input.substring(1); //rest of input string
    // recursion call
    subsequence(Output + firstChar, ros); //include
    subsequence(Output, ros); //exclude
}
subsequence("", "abc");



//====Another method of   longest subseuqence of