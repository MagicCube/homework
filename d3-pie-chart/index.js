const express = require("express");
const app = express();

app.use(express.static("./public"));

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("The server is running...");
});
