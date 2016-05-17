const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/sum", (req, res, next) => {
    if (req.query.values === undefined || req.query.values.trim() === "")
    {
        res.status(500).send("values can not be empty");
    }
    else
    {
        const data = req.query.values.split(" ").map(item => parseInt(item))
                                                .reduce((prev, cur) => prev + cur );
        res.send({ sum: data});
    }
});
app.post("/api/map", (req, res, next) => {
    // console.log(req.body);
    if ( req.body === null )
    {
        res.status(500).send(" params can not be empty ");
    }
    else
    {
        const data = req.body.map(item => item.num);
        res.send(data);
    }
})

app.use(express.static("./public"));
app.listen(8080, () => {
    console.log("The server is now running at http://localhost:8080 ...");
});
