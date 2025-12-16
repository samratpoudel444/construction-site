'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectTable.init({
    ProjectName: DataTypes.STRING,
    ProjectInterval: DataTypes.STRING,
    ProjectImage: DataTypes.STRING,
    Description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'projectTable',
  });
  return projectTable;
};