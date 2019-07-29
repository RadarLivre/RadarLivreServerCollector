const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./app/routes");

const app = express();

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(3000);
