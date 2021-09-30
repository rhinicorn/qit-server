const {DataTypes} = require("sequelize");
const db = require("../db");

const UserType = db.define("usertype", {
    typeName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    typeDesc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typePermission: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = UserType;