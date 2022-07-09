var N = 5;
var MATRIX = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
];

function knows(a, b) {
    return MATRIX[a][b];
}

function findCelebrity(n) {
    var indegree = Array(n).fill(0);
    var outdegree = Array(n).fill(0);

    // query for all edges
    for (var i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            var x = knows(i, j);

            // set the degrees
            outdegree[i] += x;
            indegree[j] += x;
        }
    }
    for (i = 0; i < n; i++)
        if (indegree[i] == n - 1 && outdegree[i] == 0)
            return i;

    return -1;
}
var n = 4;
var id = findCelebrity(n);
if (id == -1) {
    console.log("No celebrity");
} else {
    console.log("Celebrity ID " + id);
}