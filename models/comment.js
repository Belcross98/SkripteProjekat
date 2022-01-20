'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate({ User }) {
          this.belongsTo(User, { foreignKey: 'userId', as:'user' });
    }
    };
    Comment.init({
        Body: {
            type: DataTypes.STRING(2048),
            allowNull: false
        }
    },
  {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};