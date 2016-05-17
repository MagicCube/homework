const arr = [ null, null, 1, 2, null, 2, null, 3, null, null ];

function repo(arr) {
    arr[-1] = arr.find((val) => { return val !== null});
    arr.map((val, ind, array) => { val === null ? array[ind] = array[ind - 1] : null });
}
