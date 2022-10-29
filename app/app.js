const expres=require('express');
const dbConfig=require('../app/database/connectDb');
const app=expres();
const routes = require('./routers');
const path=require('path')
const bodyParser = require('body-parser')
const ejs=require('ejs')
const expressLayouts = require('express-ejs-layouts');
routes(app)

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.use(expres.static(path.join(__dirname, 'public')));
console.log(__dirname);

module.exports= app;