const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/sum", (req, res, next) => {
    const values = req.query.values.split(" ").map(item => parseInt(item));
    const sum = values.reduce((prev, cur) => prev + cur);
    res.send({
        sum
    });
});

app.post("/api/map", (req, res, next) => {
    const result = req.body.map(item => item.num);
    res.send({
        result
    });
});

app.use(express.static("./public"));

app.listen(8080, () => {
    console.log("The server is now running at http://localhost:8080 ...");
});
