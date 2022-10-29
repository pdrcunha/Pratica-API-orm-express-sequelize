'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItensUnidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ItensUnidades.belongsTo(models.Tipos, {foreignKey: 'id_tipo', as: 'Tipos'})
    }
  }
  ItensUnidades.init({
    id_itensUnidades: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: DataTypes.STRING,
    fk_tipo: DataTypes.STRING,
    atk: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    spd: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    custo: DataTypes.INTEGER,
    img: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'ItensUnidades',
  });
  return ItensUnidades;
};