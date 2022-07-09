function topview(root) {
    if (root == null)
        return;
    let q = [];
    let m = new Map();
    let hd = 0;
    root.hd = hd;
    q.push(root);

    while (q.length != 0) {
        root = q[0];
        hd = root.hd;
        if (!m.has(hd))
            m.set(hd, root.data);
        if (root.left) {
            root.left.hd = hd - 1;
            q.push(root.left);
        }
        if (root.right) {
            root.right.hd = hd + 1;
            q.push(root.right);
        }
        q.shift()
    }

    let arr = Array.from(m);
    arr.sort(function(a, b) { return a[0] - b[0]; })

    for (let [key, value] of arr.values()) {
        console.log(values);
    }
}