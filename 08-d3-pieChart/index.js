const express = require("express");

const app = express();

app.use(express.static("./public", {
    maxAge: "7 days"
}));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`The server is running at ${port}`);
});
