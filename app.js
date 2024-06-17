const express = require("express");
const app = express();
const port = 3000;

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("INDEX");
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
