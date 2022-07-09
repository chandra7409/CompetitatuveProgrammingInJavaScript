function DatabaseConnection() {

    let databaseInstance = null;

    // tracks the number of instances created at a certain time
    let count = 0;

    function init() {
        console.log(`Opening database #${count + 1}`);
        //now perform operation
    }

    function createIntance() {
        if (databaseInstance == null) {
            databaseInstance = init();
        }
        return databaseInstance;
    }

    function closeIntance() {
        console.log('closing database');
        databaseInstance = null;
    }
    return {
        open: createIntance,
        close: closeIntance
    }
}

const database = DatabseConnection();
database.open(); //Open database #1
database.open(); //Open database #1
database.open(); //Open database #1
database.close(); //close database
///

n = 5
for i in range(n)
for j in range(i + 1):
    print(chr(65 + j), end = "")
print()# lower triangle
for i in range(n):
    for j in range(n - i - 1):
    print(chr(65 + j), end = "")
print()


//
let n = 5;
let str = "";
for (let i = 1; i <= 5; i++) {
    for (let j = i + 1; j <= 5) {
        str = str + ""

    }
    str = str + "\n";
}
console.log(str);