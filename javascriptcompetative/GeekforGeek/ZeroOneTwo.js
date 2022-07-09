let array = [1, 2, 0, 0, 2, 1, 2, 0, 2, 0, 1, 2, 2, 0, 0, 2, 1];
let size = array.length;
let s = 0; //s for start
let m = 0; //m for mid
let e = size - 1; //e for end
while (m <= e) {
    if (array[m] == 0) {
        m++;
        e++;
    }
}