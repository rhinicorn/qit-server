const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:939a3509bc414c76b9caecb53b8b2075@localhost:5432/postgres");

module.exports = sequelize;