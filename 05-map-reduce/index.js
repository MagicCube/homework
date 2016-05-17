const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null ];
function interpos(arr)
{
    arr.forEach((item, idx) => {item === null ? (idx === 0 ? arr[idx] = arr.find(item => item !== null) : arr[idx] = arr[idx - 1]) : null;});
}
console.log(arr);
interpos(arr);
console.log(arr);
