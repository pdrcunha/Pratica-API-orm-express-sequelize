
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Unidades.belongsTo(models.ItensUnidades, {foreignKey: 'id_itensUnidades', as: 'ItensUnidades'})
    }
  }
  Unidades.init({
    id_unidade: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nome: {
        type: DataTypes.STRING(128)
      },
      fk_capacete: {
        type: DataTypes.INTEGER(11)
      },
      fk_colete: {
        type: DataTypes.INTEGER(11)
      },
      fk_armaPrimaria: {
        type: DataTypes.INTEGER(11)
      },
      fk_armaSecundaria: {
        type: DataTypes.INTEGER(11)
      },
      fk_kitAuxilo: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot1: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot2: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot3: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot4: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot5: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot6: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot7: {
        type: DataTypes.INTEGER(11)
      },
      fk_slot8: {
        type: DataTypes.INTEGER(11)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'Unidades',
  });
  return Unidades;
};