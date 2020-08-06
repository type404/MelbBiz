const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//the URI is where our database is stored
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB database connection established successfully`);
});

//starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
