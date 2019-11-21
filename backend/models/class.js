'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    prepkitLink: DataTypes.STRING,
    classDate: DataTypes.STRING,
    zoomLink: DataTypes.STRING
  }, {});
  Class.associate = function (models) {
    // associations can be defined here
  };
  return Class;
};