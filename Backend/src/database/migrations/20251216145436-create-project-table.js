'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projectTables", {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      ProjectName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ProjectStatus: {
        type: Sequelize.ENUM("Completed", "Running", "Pending"),
        allowNull: false,
      },
      ProjectInterval: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ProjectImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projectTables');
  }
};