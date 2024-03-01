const { DataTypes } = require("sequelize");
const sequelize = require("../db/database.js");
const Workpackage = require("./Workpackage.js");

const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Project.hasMany(Workpackage, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Workpackage.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});

module.exports = Project;
