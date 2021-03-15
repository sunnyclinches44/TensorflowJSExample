// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require('path');

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "3000";

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname +'/PredictImage-FlowerDataSet.html'));
});

/**
 * Server Activation
 */
 app.use(express.static(__dirname + '/'));

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});