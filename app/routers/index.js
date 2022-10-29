const bodyParser = require('body-parser')
const itensUnidade=require('./itensUnidadesRoute')
const unidades = require('./unidadesRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   unidades,
   itensUnidade
   )
 }
