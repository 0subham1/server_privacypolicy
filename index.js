const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
// app.use(express.urlencoded());
app.get("/privacy/social", (req, res) => {
    res.sendFile(__dirname + "/html/social.html");
});

app.get("/privacy/greentest", (req, res) => {
  res.sendFile(__dirname + "/html/greentest.html");
});

app.get("/privacy/chatapp", (req, res) => {
  res.sendFile(__dirname + "/html/chatapp.html");
});
app.get("/privacy/ecomm", (req, res) => {
  res.sendFile(__dirname + "/html/ecomm.html");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT,()=>{
    console.log("running on port:"+PORT)
});
