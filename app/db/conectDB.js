const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const conectDb = new Sequelize('ww2', 'root', '', {
  host: '127.0.0.1',
  dialect:'mysql' 
})

async function tryConectDb(){
    try {
        await conectDb.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
tryConectDb();

module.exports=conectDb;