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
      // define association here
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      lado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      speed: {
        allowNull: false,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      def: {
        allowNull: false,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      atk: {
        allowNull: false,
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  }, {
    sequelize,
    modelName: 'Unidades',
  });
  return Unidades;
};