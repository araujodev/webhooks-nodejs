const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

require("./app/controllers/index")(app)

app.listen(9000, () => {
    console.log("Node-Webhook has been stated at: http://localhost:9000");
})