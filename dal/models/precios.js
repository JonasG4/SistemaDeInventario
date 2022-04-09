'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Precios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Precios.belongsTo(models.Productos, {
        foreignKey: 'product_id'
      })
    }
  }
  Precios.init({
    product_id: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Precios',
  });
  return Precios;
};