const { DataTypes } = require('sequelize');

const HomeImage = (database) => {
    database.define("HomeImage", {
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
        date: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        timestamps: false
    })
}

module.exports = HomeImage;