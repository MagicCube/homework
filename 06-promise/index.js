const express = require("express");
const app = express();

app.use(express.static("./assets"));
app.listen(8080, () => {
    console.log("Server is running at http://localhost:8080 ...");
});
