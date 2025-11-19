const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => { res.render("index"); });

app.get("/search", (req, res) => {
  const query = req.query.q || "";
  res.render("get_result", { query });
});

app.post("/submit", (req, res) => {
  const text = req.body.text || "";
  res.render("post_result", { text });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
