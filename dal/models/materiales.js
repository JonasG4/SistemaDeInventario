'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materiales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materiales.hasOne(models.Usuario, {
        foreignKey: "id_usuario"
      })
    }
  }
  Materiales.init({
    id_material: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    min_stock: {
      type: DataTypes.INTEGER,
      autoIncrement: false
    },
    fecha_ing: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    fecha_mod: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    user_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_mod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  }, {
    sequelize,
    modelName: 'Materiales',
  });
  return Materiales;
};