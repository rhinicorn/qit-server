const {DataTypes} = require("sequelize");
const db = require("../db");

const Category = db.define("category", {
    categoryName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    categoryDesc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Category;

