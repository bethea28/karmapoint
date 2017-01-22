'use strict';
// const Student = require './student'

module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Company.hasMany(models.Comment)
      }
    }
  });
  return Company;
};
