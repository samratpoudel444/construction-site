'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddStaffs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AddStaffs.init({
    StaffName: DataTypes.STRING,
    StaffImage: DataTypes.STRING,
    StaffRole: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AddStaffs',
  });
  return AddStaffs;
};