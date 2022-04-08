"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rol_permisos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "roles",
          key: "id_rol",
        },
      },
      id_permiso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "permisos",
          key: "id_permiso",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rol_permisos");
  },
};
