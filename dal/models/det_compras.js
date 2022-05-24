'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Det_Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Det_Compras.belongsTo(models.Compras,{
        foreignKey: "id_compra"
      })
      Det_Compras.hasOne(models.Materiales, {
        foreignKey: "id_material"
      })
    }
  }
  Det_Compras.init({
    id_det_compra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_compra: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_material: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0.01
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  }, {
    sequelize,
    modelName: 'Det_Compras',
  });
  return Det_Compras;
};