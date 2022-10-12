'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('paises', [{
      nome: 'Alemanha',
      lado: 'Eixo',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Itália',
      lado: 'Eixo',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Japão',
      lado: 'Eixo',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Estados Unidos',
      lado: 'Aliados',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'União Soviética',
      lado: 'Aliados',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Reino Unido',
      lado: 'Aliados',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'China',
      lado: 'Aliados',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('paises', null, {});
  }
};
