const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { connectDB } = require("./src/utils/database");
const router = require("./src/routes/apiRoute");
const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());

connectDB()

app.use("/api/v1", router);


module.exports = app;