'use strict';
// const Student = require './student'

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    comments: DataTypes.STRING,
    date: DataTypes.DATE,
    task: DataTypes.STRING,
    hours: DataTypes.INTEGER

  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Company)
        Comment.belongsTo(models.User)
      }
    }
  });
  return Comment;
};