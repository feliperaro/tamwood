const express = require("express");
const googleTranslateRouter = require("./routes/google-translate-route");
const nbaRouter = require("./routes/nba-route");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/google-translate", googleTranslateRouter);
app.use("/nba", nbaRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
