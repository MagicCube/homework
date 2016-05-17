const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.listen(8080, () => {
    console.log("Server is now running on http://localhost:8080 ...");
});

app.use(bodyParser.json());

app.use(express.static("./public"));

app.post("/api/map", (req, res, next) => {
    const values = req.body.map(item => item.num);
    res.send(values);
});

app.get("/api/sum", (req, res, next) => {
    if(req.query.values === undefined || req.query.values.trim() === "")
    {
        res.status(400).send("Values paramter cannot be empty");
    }
    else
    {
        const sum = req.query.values.split(" ")
            .map(item => parseInt(item))
            .reduce((prev, cur) => prev + cur, 0);
        res.send({sum});
    }
});
