const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get("/api/sum", (req, res) => {
    const values = req.query.values;
    if (values === undefined || values.trim() === "")
    {
        res.status(500).send("values empty");
    }
    else
    {
        const arr = values.split(" ").map((item) => parseInt(item));
        const sum = arr.reduce((pre, cur) => pre + cur, 0);
        res.send({ sum : sum });
    }
});

app.post("/api/map", (req, res) => {
    const resultArr = req.body.map((item) => item.num);
    res.send(resultArr);
});


app.use(express.static("./public"));

app.listen(8080, () => {
    console.log("The server is running at the http://localhost:8080....");
});
