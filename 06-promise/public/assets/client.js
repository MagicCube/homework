const data = [ { num: 1 }, { num: 6 }, { num: 8 } ];

function mapAsync(jsonData) {
    return new Promise((resolve, reject) => {
        fetch(`/api/map`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `arr=${JSON.stringify(jsonData)}`
        }).then(
            (res) => {
                res.json().then(
                    (result) => {
                        resolve(result);
                    },
                    reject
                );
            },
            reject
        );
    });
}

function sumAsync(arr) {
    return new Promise((resolve, reject) => {
        fetch(`/api/sum?values=${arr.join("+")}`).then(
            (res) => {
                resolve(res);
            },
            reject
        );
    });
}

mapAsync(data).then(
    (result) => {
        sumAsync(result).then(
            (res) => {
                res.json().then(
                    (r) => {
                        console.log(r);
                    }
                ).catch((reason) => { console.log(reason);});
            }
        ).catch((reason) => { console.log(reason); });
    }
).catch((reason) => {
    console.error(reason);
});
