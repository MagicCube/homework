const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null ];

function interpo(arr)
{
    const firstNotNull = arr.find(item => item !== null);

    arr.reduce((prev, cur, i) => cur ? cur : (arr[i] = prev), firstNotNull);
}

console.log(arr);
interpo(arr);
console.log(arr);
