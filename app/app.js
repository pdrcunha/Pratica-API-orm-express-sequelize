const expres=require('express');
const dbConfig=require('../app/database/connectDb')
const app=expres();
const routes = require('./routers')



routes(app)

module.exports= app;