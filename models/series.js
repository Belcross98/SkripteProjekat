'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate({ Episode }) {
          this.hasMany(Episode, { foreignKey: 'episodeId', as: 'episode', onDelete: 'cascade', hooks: true });
    }
    };
  Series.init({
    Name: DataTypes.STRING,
    Genre: DataTypes.STRING,
    Episodes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Series',
  });
  return Series;
};