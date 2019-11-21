'use strict';
module.exports = (sequelize, DataTypes) => {
  const loginToken = sequelize.define('loginToken', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {});
  loginToken.associate = function(models) {
    // associations can be defined here
  };
  return loginToken;
};