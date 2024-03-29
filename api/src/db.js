const {Sequelize} = require('sequelize');
const UserImage = require('./models/userImages.js');
const PageImage = require('./models/pageImage.js');
const HomeImage = require('./models/homeImages.js');

const database = new Sequelize(
    `postgres://postgres:admin@localhost:5432/labanda`
,{logging:false});

UserImage(database);
PageImage(database);
HomeImage(database);

module.exports = {database , ...database.models};