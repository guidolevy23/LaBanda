const {DataTypes} = require('sequelize');

const UserImages = (database) => {
    database.define("UserImage",{
        id_image: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        url:{
            type : DataTypes.STRING,
            allowNull:false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false
    })
};

module.exports = UserImages;