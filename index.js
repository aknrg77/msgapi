const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const db = require('./config/mongoose');
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const routes = require('./routes/index');

app.use(routes);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});
