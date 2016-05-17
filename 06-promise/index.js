const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/sum", (req, res) => {
    const values = req.query.values;
    if(values === undefined || values.trim() === "") {
        res.status(500).send("Values can't be empty.");
    }
    else {
        const sum = values.split("+")[0].split(" ").map(val => parseInt(val)).reduce((pre, cur) => { return pre + cur; }, 0);
        res.send({ sum });
    }
});

app.post("/api/map", (req, res) => {
    console.log(req.body);
    const arr = JSON.parse(req.body.arr);

    res.send(arr.map(val => { return val.num; }));
});

app.use(express.static("./public"));

app.listen(8080, () => {
    console.log("Server is running...");
});
