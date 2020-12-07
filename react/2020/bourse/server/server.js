const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/stock", (req, res) => {
  const rand = Math.random();
  const randomNumber = Math.floor((rand ? rand : 1) * 1000) * 7901;
  res.send({ value: randomNumber, name: "CodeCup Stock" });
});

app.listen(3001);
