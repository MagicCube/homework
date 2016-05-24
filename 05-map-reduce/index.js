const arr = [ null, null, 1, 3, null, 2, null, 1, null, null, 1, null, null ];

function interpo(arr)
{
    const first = arr.find(item => item !== null);
    arr.reduce((pre, cur, index) => {
        if(cur === null){
            arr[index] = pre;
        }
        return arr[index];
    }, first);
    // arr.reduce((pre, cur, index) => {cur === null ? arr[index] = pre : 0;return arr[index];},arr.find(item => item != null));
}

console.log(arr);
interpo(arr);
console.log(arr);

let target = null, source1 = {a:1}, source2 = {b:2};
Object.assign(target, source1 , source2);
console.log(target);
