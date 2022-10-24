const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ww2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
async function conectDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }  
}

module.exports=conectDb;

