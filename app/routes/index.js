const bodyParse = require('body-parser')
const paises=require('./paises')
module.exports = app => {
    app.use(bodyParse.json())
    app.get("/",(req,res)=>{
        res.send("index")
    })
    app.use(paises);
}

