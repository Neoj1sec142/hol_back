'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogComm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BlogComm.belongsTo(models.User, {
        foreignKey: 'userId'
      }),

      BlogComm.belongsTo(models.Blog, {
        foreignKey: 'blogId'
      })
    }
  }
  BlogComm.init({
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'blogs',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    type: DataTypes.STRING,
    thoughts: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BlogComm',
    tableName: 'blogcomms'
  });
  return BlogComm;
};