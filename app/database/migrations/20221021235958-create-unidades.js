'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Unidades', {
      id_unidade: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      lado: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      hp: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      mp: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      speed: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      def: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      atk: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Unidades');
  }
};