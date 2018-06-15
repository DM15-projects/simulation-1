require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const ctrl = require("./controller.js");
const massive = require("massive");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  //   console.log(dbInstance);
  return app.set("db", dbInstance);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Hey I'm listening on port ${port}`));
