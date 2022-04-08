'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('permisos', [{
        nombre: 'Leer',
      },
    {nombre: 'Crear'},
    {nombre: 'Editar'},
    {nombre: 'Eliminar'}
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('permisos', null, {});
  }
};
