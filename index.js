const express = require("express");
const say = require("./todo");
const app = express();
const port = 3000;

say.sayHello("New Year");
app.get("/", (req, res) => {
  if (req.query.search == "1") {
    res.send("hello");
  } else {
    res.send("world");
  }
});

app.get("/json", (req, res) => {
  const todos = say.getTodo();
  res.json(todos);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
