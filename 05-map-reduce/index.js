
const arr = [ null, null, 2, 3, null, 2, null, 1, null, null, 1, null, null ];

function interpo(arr) {

    let first = null;
    arr.forEach((item) => {
        if((first === null) && (item !== null)){
            first = item;
        }
    });

    arr.reduce((prev, cur, index) => {
        if(cur === null){
            arr[index] = prev;
        }else{
            prev = cur;
        }
        return prev;
    } , first);

}

console.log(arr);
interpo(arr);
console.log(arr);
