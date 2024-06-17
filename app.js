const express = require("express");
const app = express();
const port = 3000;

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

//renders
app.get("/", (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
});

app.get("/courses", (req, res) => {
  res.status(200).render("courses", {
    page_name: "courses",
  });
});

app.get("/dashboard", (req, res) => {
  res.status(200).render("dashboard", {
    page_name: "dashboard",
  });
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
