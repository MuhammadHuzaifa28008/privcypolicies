const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/static", express.static("static"));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/privacypolicy/tasker", (req, res) => {
  res.status(200).render("tasker.pug");
});

app.listen(port, () => {
  console.log(
    `The application started successfully on http://localhost:${port}`
  );
});
