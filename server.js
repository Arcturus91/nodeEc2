const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("port working  w express"));
app.listen(3000);

console.log("server on port 3000");
