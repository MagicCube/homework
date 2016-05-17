const arr = [{num: 1}, {num: 2}, {num: 3}, {num: 4}];


function mapAsync(arr)
{
    return new Promise((resolve, reject) => {
        fetch("/api/map", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(arr)
        }).then(
            res => {
                resolve(res.json());
            },
            reject
        );
    });
}

function sumAsync(arr)
{
    return new Promise((resolve, reject) => {
        fetch(`/api/sum?values=${arr.join("+")}`).then(
            res => {
                resolve(res.json());
            },
            reject
        );
    });
}

// mapAsync(json).then(res => {
//     console.log(res);
//     return sumAsync(res);
// }).then(sum => {
//     console.log(sum);
// }).catch(rej => {
//     console.error(rej);
// });
mapAsync(arr).then(res => {
    console.log(res);
    sumAsync(res).then(res => {
        console.log(res)
    }).catch(rej => {
        console.error(rej)
    });
}).catch(rej => {
    console.error(rej);
});
