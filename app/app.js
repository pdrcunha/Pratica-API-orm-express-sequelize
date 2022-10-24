const express=require('express');
var app=express();
const conectDb=require('../app/database/connection');
const router = require('./routers');
conectDb();


module.exports=app;