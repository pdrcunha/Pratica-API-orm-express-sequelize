const Sequelize  = require('sequelize');
const sequelize = new Sequelize('ww2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

(async function testConectDb(){

   try {
        await sequelize.authenticate();
        console.log('Conecxão bem sucedida');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = sequelize;