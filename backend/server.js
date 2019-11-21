const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const cors = require('cors')

dotenv.config();

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(upload.array());

const routes = require("./routes/api");
app.use(routes);

app.listen(process.env.APP_PORT, function () {
    console.log(`Server started on ${process.env.APP_PORT}`)
})