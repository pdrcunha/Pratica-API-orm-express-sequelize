const express= require('express');
const app = express();
const conectDb = require('./db/conectDB');
const routes = require('./routes');

app.use(express.static('public'));
routes(app)

module.exports= app;