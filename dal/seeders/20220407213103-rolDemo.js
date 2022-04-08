"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [{
      nombre: "admin"
    },
    {
      nombre: "superadmin"
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
