'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
            type: DataTypes.INTEGER
      },
      Name: {
          type: DataTypes.STRING
      },
      Genre: {
          type: DataTypes.STRING
      },
      Episodes: {
          type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
          type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
          type: DataTypes.DATE
      }
    });
  },
    async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Series');
  }
};