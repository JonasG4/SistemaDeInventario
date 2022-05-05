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
      Productos.hasMany(models.Precios, {
        foreignKey: 'id_precio'
      })
    }
  }
  Productos.init({
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom_producto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tam_producto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    des_producto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cod_categoria: {
      type:  DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updated_at:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};