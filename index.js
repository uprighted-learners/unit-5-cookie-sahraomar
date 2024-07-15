const express = require("express");
const cookieParser = require("cookie-parser"); // Make sure this line is present and correct
const app = express();

app.use(express.static("public"));

const PORT = 3000;

app.use(cookieParser());

app.get("/light-mode", (req, res) => {
  res.cookie("theme", "light-mode");
  res.redirect("/");
});

app.get("/dark-mode", (req, res) => {
  res.cookie("theme", "dark-mode");
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
