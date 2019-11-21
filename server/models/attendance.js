'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    classId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    attended: DataTypes.ENUM('yes', 'no')
  }, {});
  Attendance.associate = function(models) {
    // associations can be defined here
  };
  return Attendance;
};