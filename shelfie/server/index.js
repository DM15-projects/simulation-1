require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const massive = require("massive");

const ctrl = require("./controller.js");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  //   console.log(dbInstance);
  return app.set("db", dbInstance);
});

app.get("/api/inventory", ctrl.getProducts);
app.post("/api/product", ctrl.addProduct);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Hey I'm listening on port ${port}`));
