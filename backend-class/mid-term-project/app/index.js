const express = require("express");
const app = express();
const port = 3000;

const { connectToMongo } = require("./src/config/mongoose");

const orderRouter = require("./src/routes/orders-route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/orders", orderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectToMongo();
});
