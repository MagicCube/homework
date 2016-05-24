const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/api/sum", (req, res) => {
    if (req.query.values === undefined || req.query.values.trim() === "")
    {
        res.status(500).send("The values can not be null");
    }
    else {
        const arr = req.query.values.split(" ").map(item => parseInt(item));
        const sum = arr.reduce((pre, cur) => pre + cur, 0);
        res.send({ sum });
        
    }
});

app.post("/api/map", (req, res) => {
    const arr = req.body.map(item => item.num);
    res.send(arr);
});




app.use(express.static("./public"));

app.listen(8080, () => {
    console.log("The server is now running at http://localhost:8080...");
});
