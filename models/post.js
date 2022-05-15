'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'userId'
      })

      // COMMENT ASSOCIATION: HAS-MANY 
      Post.hasMany(models.Comment, {
        foreignKey: 'postId'
      })
    }
  }
  Post.init({
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};