'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsFrench extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NewsFrench.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  NewsFrench.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    cloudinaryId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'NewsFrench',
  });
  return NewsFrench;
};