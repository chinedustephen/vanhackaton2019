'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    userId: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    status: DataTypes.ENUM('active', 'inactive')
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};