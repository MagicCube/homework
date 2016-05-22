const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null ];

const interpo = arr => arr.reduce((pre, bef, i, array) => array[i] = bef || pre, 1);

console.log(arr);
interpo(arr);
console.log(arr);