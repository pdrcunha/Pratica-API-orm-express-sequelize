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
        type: Sequelize.STRING(128)
      },
      fk_capacete: {
        type: Sequelize.INTEGER(11),
        references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_armaPrimaria: {
        type: Sequelize.INTEGER(11),
        references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_armaSecundaria: {
        type: Sequelize.INTEGER(11),
        references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_kitAuxilo: {
        type: Sequelize.INTEGER(11),
        references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot1: {
        type: Sequelize.INTEGER(11),
        references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot2: {
        type: Sequelize.INTEGER(11),
        references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot3: {
        type: Sequelize.INTEGER(11),
          references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot4: {
        type: Sequelize.INTEGER(11),
          references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot5: {
        type: Sequelize.INTEGER(11),
                references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot6: {
        type: Sequelize.INTEGER(11),
                references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot7: {
        type: Sequelize.INTEGER(11),
                references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      fk_slot8: {
        type: Sequelize.INTEGER(11),
                references: {         
          model: 'ItensUnidades',
          key: 'id_itensUnidades'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Unidades');
  }
};