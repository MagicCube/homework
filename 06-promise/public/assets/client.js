const data = [{ num: 1 }, { num: 10 }, { num: 3}, { num: 4 }];
// const data = null;
function mapAsync(json)
{
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(json);
        fetch("api/map", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        }).then(
            res => {
                res.json().then(
                    jsonResult => resolve(jsonResult),
                    reject
                );
            },
            reject
        );
    } );
}
function sumAsync(arr){
    return new Promise((resolve, reject) => {
        fetch(`/api/sum?values=${arr.join("+")}`).then(
            res => {
                res.json().then(
                    jsonResult => resolve(jsonResult.sum),
                reject
            );
            },
            reject
        );
    });
}
function errorCallback(reason){
    console.error(reason);
}
mapAsync(data).then(result => {
    sumAsync(result).then(result => {
        console.log(result);
    },errorCallback);
},errorCallback);
