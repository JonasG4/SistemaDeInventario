'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('materiales', {
      id_material: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      min_stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fecha_ing: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      fecha_mod: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      user_ing: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id_usuario"
        }
      },
      user_mod: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id_usuario"
        }
      },
      estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('materiales');
  }
};