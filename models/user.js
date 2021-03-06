'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate({ Comment }) {
            // define association here
            this.hasMany(Comment, { foreignKey: 'userId', as: 'comments', onDelete: 'cascade', hooks: true });
        }
    };
  User.init({
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
      }
  }, {
    sequelize,
    modelName: 'User',
  });

return User;
};