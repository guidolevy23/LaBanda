const { DataTypes } = require('sequelize');

const PageImage = (database) => {
    database.define("PageImage", {
        id_image: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}

module.exports = PageImage;