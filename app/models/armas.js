'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Armas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Armas.init({
    nome: DataTypes.STRING(64),
    tipo: DataTypes.STRING,
    fk_pais: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'armas',
  });
  return Armas;
};