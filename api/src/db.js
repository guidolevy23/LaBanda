const {Sequelize} = require('sequelize');

const database = new Sequelize(
    `postgres://postgres:admin@localhost:5432/labanda`
,{logging:false});

module.exports = {database , ...database.models};