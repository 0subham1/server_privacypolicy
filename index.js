const express = require("express");
const app = express();
console.log(__dirname, "dirr");
app.get("/privacy/social", (req, res) => {
  res.sendFile(__dirname + "/html/social.html");
});


app.listen(8000)
