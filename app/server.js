const app = require("./app");
let port=process.env.PORT || 3000;


app.listen(port,(e)=>console.log(`Rodando na porta ${port}`));