'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
      },
        Body: {
            type: DataTypes.STRING(2048),
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
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
    await queryInterface.dropTable('Comments');
  }
};