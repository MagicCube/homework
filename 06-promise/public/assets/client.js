const data = [ {num: 1}, {num: 2}, {num: 3}, {num: 4} ];

function sumAsync(arr)
{
    return new Promise((resolve, reject) => {
        fetch(`api/sum?values=${arr.join("+")}`).then(
            res => {
                res.json().then(
                    json => {
                        resolve(json.sum);
                    },
                    reject
                );
            },
            reject
        );
    });
}

function mapAsync(jsonData)
{
    return new Promise((resolve, reject) => {
        params = { method: "POST" };
        params.headers = { "Content-Type": "application/json" };
        params.body = JSON.stringify(jsonData);
        fetch("api/map", params).then(
            res => {
                res.json().then(
                    json => {
                        resolve(json);
                    },
                    reject
                );
            },
            reject
        );
    });
}

function errorCallback(reason) {
    console.error(reason);
}

mapAsync(data).then(arr => {
    sumAsync(arr).then(sum => {
        console.log(sum);
    }).catch(errorCallback);
}).catch(errorCallback);
