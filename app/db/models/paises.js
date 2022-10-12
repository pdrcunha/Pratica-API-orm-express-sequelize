'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paises.init({
    nome: DataTypes.STRING,
    lado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paises',
  });
  return paises;
};