const express =require("express");
app=express();

app.use(express.static("./public"));

app.listen(8080,() => {
    console.log("the server is running at http://localhost:8080");
});
