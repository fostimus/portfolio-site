require("dotenv").config();
const express = require("express"); // Express web server framework
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const routes = require("./routes");

app.set("view engine", "ejs");

app
  .use(express.json())
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());

app.use("/spotify", routes.spotify);

const githubApiUrl = "https://api.github.com";

//serve html file
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/repo/:id", function(req, res) {
  // rate limits are pretty low for non-authenticated requests.
  const request = {
    method: "get",
    url: githubApiUrl + "/repos/fostimus/" + req.params.id,
    headers: { "User-Agent": "fostimus" }
  };

  axios(request)
    .then(response => {
      res.json(response.data);
    })
    .catch(e => console.error(e));
});

app.get("/resume", function(req, res) {
  res.sendFile(__dirname + "/public/resume.pdf");
});

console.log(`Listening on ${process.env.PORT || 3000}`);
app.listen(process.env.PORT || 3000);
