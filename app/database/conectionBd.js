const { Sequelize } = require('sequelize');

const conectBd= (async ()=> {
    // Option 3: Passing parameters separately (other dialects)
    const sequelize = new Sequelize('ww2', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()


module.exports = conectBd;