'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate({Series}) {
          // define association here
          this.belongsTo(Series, { foreignKey: 'episodeId', as: 'episode' });
    }
    };
  Episode.init({
    Name: DataTypes.STRING,
    EpisodeNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};