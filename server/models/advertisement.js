'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdvertisementFrench extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AdvertisementFrench.belongsTo(models.User, { foreignKey: 'advertisedBy' });
    }
  };
  AdvertisementFrench.init({
    advertisedBy: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.ENUM('internal','external'),
    advertisingCompany: DataTypes.STRING,
    image: DataTypes.STRING,
    cloudinaryId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'AdvertisementFrench',
  });
  return AdvertisementFrench;
};