const express = require("express");
const { getDemo } = require("./controllers/demoController");
const app = express();
const port = 3000;
const demoRouter = require("./routers/demoRouter");
const bodyParser = require("body-parser");
const sequelize = require("./db/database");

const Workpackage = require("./models/Workpackage");
const Project = require("./models/Project");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/demo", demoRouter);

app.listen(port, async () => {
  await sequelize.sync({ force: false });

  console.log(`Example app listening on port ${port}`);
});
