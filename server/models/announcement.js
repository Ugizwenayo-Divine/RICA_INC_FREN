'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnnouncementFrench extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AnnouncementFrench.belongsTo(models.User, { foreignKey: 'announcedBy' });
    }
  }
  AnnouncementFrench.init(
    {
      announcedBy: DataTypes.INTEGER,
      title: DataTypes.STRING,
      announcement: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'AnnouncementFrench',
    }
  );
  return AnnouncementFrench;
};
