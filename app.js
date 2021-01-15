require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const favicon = require("serve-favicon");
const routes = require("./routes");

app.set("view engine", "ejs");

app
  .use(express.json())
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser())
  .use(favicon(__dirname + "/public/images/favicon/favicon.ico"));

app.use("/spotify", routes.spotify);
app.use("/github", routes.github);
app.use("/database", routes.database);

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/resume", function(req, res) {
  res.sendFile(__dirname + "/public/resume.png");
});

console.log(`Listening on ${process.env.PORT || 4000}`);
app.listen(process.env.PORT || 4000);
