'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DesignFrench extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DesignFrench.belongsTo(models.User, { foreignKey: 'designBy' });
    }
  };
  DesignFrench.init({
    designBy: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    cloudinaryId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'DesignFrench',
  });
  return DesignFrench;
};