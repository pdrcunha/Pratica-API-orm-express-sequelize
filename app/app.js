const express=require("express");
const conectBd = require("./database/conectionBd");

const app= express();

app.use(express.json());

module.exports=app;