//after login, user can add, edit, view items (delete stretch...)
//item must have id, name, description, qty, category, (alert, link, image stretch)
//stretch -audit trail of who entered the item into the system

const {DataTypes} = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
    itemName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    itemDesc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    itemQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    itemCat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Item;

