const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null ];
function interpo( arr ){
    // console.log(arr[arr.findIndex(item => item !== null)]);
    arr=arr.reduce((prev, cur, index) => (cur === null) ? arr[index] = prev : arr[index] = cur,
    arr[arr.findIndex(item => item !== null)]);
}
console.log(arr);
interpo(arr);
console.log(arr);
