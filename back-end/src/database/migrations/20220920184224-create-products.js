'use strict';
module.exports = {
    /**
   * @param {import('sequelize').queryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false
      },
      urlImage: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'url_image'
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('products');
  }
};