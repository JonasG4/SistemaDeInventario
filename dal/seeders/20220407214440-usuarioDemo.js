'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [{
      nombre: "Jonas",
      apellido: "Garcia",
      email: "garciajonas899@gmail.com",
      password: "jonasgarcia8",
      id_rol: 1,
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
      created_by: "root"
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
