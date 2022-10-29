'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos', [{
      nome: 'capacete'
    },
    {
      nome: 'armaPrimaria'
    },
    {
      nome: 'armaSecundaria'
    },
    {
      nome: 'kitAuxilo'
    },
    {
      nome: 'comsumiveis'
    },
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
