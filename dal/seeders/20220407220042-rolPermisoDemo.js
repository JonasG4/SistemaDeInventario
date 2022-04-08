'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('rol_permisos', [{
        id_rol: 1,
        id_permiso: 1
      },
      {
        id_rol: 1,
        id_permiso: 2
      },
      {
        id_rol: 1,
        id_permiso: 3
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rol_permisos', null, {});
  }
};
