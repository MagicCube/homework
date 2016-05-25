const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("./"));



app.listen(port, () => {
    console.log(`The server is now running at localhost:${port}`);
});
