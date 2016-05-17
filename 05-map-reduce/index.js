const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null];
function interpos(arr)
{
    arr.reduce((prev, cur, idx) => cur === null ? arr[idx] = arr[idx - 1] : null, arr[0] = arr.find(item => item !== null));
}
console.log(arr);
interpos(arr);
console.log(arr);
