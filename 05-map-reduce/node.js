const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null ];

function interpo(arr)
{
    arr.reduce((pre, cur, index) => {cur === null ? arr[index] = pre : 0;return arr[index];},arr.find(item => item != null));
}

console.log(arr);
interpo(arr);
console.log(arr);
