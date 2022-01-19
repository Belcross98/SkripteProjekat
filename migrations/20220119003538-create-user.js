'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
            type: DataTypes.INTEGER
      },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Must be a valid email'
                }
            }
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
    await queryInterface.dropTable('Users');
  }
};