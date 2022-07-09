function StringRotation(str1, str2) {
    return (str1.length == str2.length) && ((str1 + str2).indexOf(str2) != -1);
}



var str1 = "ABC";
var str2 = "BCA";
if (StringRotation(str1, str2)) {
    console.log("string are rotation to each other");

} else {
    console.log("string are not rotation");
}