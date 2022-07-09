// function countOccurence(ch, s) {
//     if (s.length == 0)
//         return 0;
//     var count = 0;

//     if (s[0] == ch)
//         count++;

//     count += countOccurence(ch, s.substring(1));

//     return count;
// }

// var str = "Tilak chandra";
// var c = 'a';
// console.log("Frequency of Character " + c + " is " + countOccurence(c, str));



function FrequencyOf(ch, s) {
    if (s.length == 0)
        return 0;
    let count = 0;
    if (s[0] == ch)
        count++;
    count += FrequencyOf(ch, s.substring(1));
    return count;
}
let str = "Tilak chandra";
let c = 'a';
console.log("frequency of character" + c + " is " + FrequencyOf(c, str))