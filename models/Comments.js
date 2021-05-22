const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userPostID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commentUserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commentText: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        timestamps: false,
        modelName: 'comments'
    }
)

module.exports = Comments;