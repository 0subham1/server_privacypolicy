const express = require("express");
const app = express();
console.log(__dirname, "dirr");

app.use(express.json());
app.use(express.urlencoded());
app.get("/privacy/social", (req, res) => {
    res.sendFile(__dirname + "/html/social.html");
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000);
