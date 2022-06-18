'use strict';

const { default: strictTransportSecurity } = require("helmet/dist/types/middlewares/strict-transport-security");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('materia_primas', {
      id_material_prima: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      min_stock: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      fecha_ing: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false

      },
      fecha_mod: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      user_ing: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        refereces: {
          model: "tipo_mater"
        }
      },
      user_mod: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('materia_primas');
  }
};