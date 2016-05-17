const arr = [{ num: 1 },{ num: 2 },{ num: 3 },{ num: 4 }];

function mapAsync(jsonData)
{
    const json = JSON.stringify(jsonData);
    return new Promise((resolve, reject) => {
        fetch("/api/map", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: json
        }).then(
            res => {
                res.json().then(
                    jsonResult => {
                        resolve(jsonResult);
                    },
                    reject
                );
            },
            reject
        );
    });
}

function sumAsync(arrTemp)
{
    const arrStr = arrTemp.join("+");
    return new Promise((resolve, reject) => {
        fetch(`/api/sum?values=${arrStr}`).then(
            res => {
                res.json().then(
                    result => {
                        resolve(result.sum);
                    },
                    reject
                );
            },
            reject
        );
    });
}

function mainClient()
{
    mapAsync(arr).then(
        data => {
            sumAsync(data).then(
                sum => {
                    console.log(sum);
                },
                reason => {
                    console.error(reason);
                }
            )
        },
        reason => { console.error(reason); }
    );
}

function errorCallback()
{
    console.error(reason);
}

mapAsync(arr).then(
    data => {
        sumAsync(data).then(
            sum => {
                console.log(sum);
            }
        ).catch(errorCallback);
    }
).catch(errorCallback);
