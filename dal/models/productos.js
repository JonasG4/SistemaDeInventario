'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productos.belongsTo(models.Categorias, {
        foreignKey: 'cod_categoria'
      })
      Productos.hasMany(model.Precios, {
        foreignKey: 'id'
      })
    }
  }
  Productos.init({
    nom_producto: DataTypes.STRING,
    tam_producto: DataTypes.STRING,
    des_producto: DataTypes.TEXT,
    cod_categoria: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Productos',
  });
  return Productos;
};