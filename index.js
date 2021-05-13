const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const routes = require('./routes/index');

app.use(routes);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});