'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CreateEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CreateEvents.init({
    EventName: DataTypes.STRING,
    EventImage: DataTypes.STRING,
    EventDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CreateEvents',
  });
  return CreateEvents;
};