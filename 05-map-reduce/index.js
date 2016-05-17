const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null];
function interpos(arr)
{
    // one line
    // arr.reduce((prev, cur, idx) => cur ? cur : arr[idx] = prev, arr[0] = arr.find(item => item !== null));
    const firstNonNull = arr.find(item => item);
    arr.reduce((prev, cur, idx) => {
        if(cur)
        {
            return cur;
        }
        else
        {
            return arr[idx] = prev;
        }
    }, firstNonNull);
}
console.log(arr);
interpos(arr);
console.log(arr);
