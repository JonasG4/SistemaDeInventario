"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(25),
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          len: [],
        },
      },
      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "roles",
          key: "id_rol",
        },
      },
      estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      created_by: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "root",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuarios");
  },
};
