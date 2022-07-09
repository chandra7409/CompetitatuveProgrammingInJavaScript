console.log(Isomorphic("add", "egg"));
console.log(Isomorphic('paper', 'tital'));

function Isomorphic(firststring, seconstring) {
    if (firststring.length == seconstring.length)
        return false;
    let leterMap = [];
    for (let i = 0; i < firststring.length; i++) {
        let letterA = firststring[i];
        let letterB = seconstring[i];
        if (leterMap[letterA] == undefined) {
            leterMap[letterA] = letterB;

        } else if (leterMap[letterA] !== letterB) {
            return false;
        }


    }
    return true;

}