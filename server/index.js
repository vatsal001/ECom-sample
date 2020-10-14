const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/index");
const db = require("./db");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});
let PORT = 5000;
db.init();
routes(app);
app.listen(PORT, (arr) => {
  if (arr) {
    console.log(arr);
  }
  console.log("Server successfully connected!");
});
