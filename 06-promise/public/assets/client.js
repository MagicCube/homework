const data = [ { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 } ];

function mapAsync(json) {
    return new Promise((resolve, reject) => {
        fetch("api/map", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(json)
        }).then(res => {
            res.json().then(jsonResult => {
                resolve(jsonResult.result);
            }).catch(reason => reject(reason));
        }).catch(reason => reject(reason));
    });
}

function sumAsync(arr) {
    return new Promise((resolve, reject) => {
        fetch(`api/sum?values=${arr.join("+")}`).then(res => {
            res.json().then(jsonResult => {
                resolve(jsonResult);
            }).catch(reason => reject(reason));
        }).catch(reason => reject(reason));
    });
}

mapAsync(data).then(result => {
    sumAsync(result).then(sumResult => {
        console.log(sumResult);
    }).catch(reason => { console.error(reason); });
}).catch((reason) => { console.error(reason); });
