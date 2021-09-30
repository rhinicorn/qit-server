let Express = require("express");
let router =Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const {ItemModel} = require("../models");
const Item = require("../models/item");

//const jwt = require("jsonwebtoken");
//const {UniqueConstraintError} = require("sequelize/lib/errors");


exports.index = function(req,res) {
    res.send("not implemented site home page");
}






//get all items
/* router.get("/findAll", async (req,res) => {
    try{
        res.send(req.params.id)
        //const items = await res.json(items);
        //console.log(items) 
    }
    catch(err) {
        res.json({error: err.message || err.toString()});
    }
});


//add item
router.post("/add", async (req,res) => {

    let {itemName, itemDescription, itemQty, itemCategory} = req.body.user; //dynamic data 

    try{
        const Item = await ItemModel.create({ //stores value of promise data that returns in the response
            itemName,
            itemDescription,
            itemQty,
            itemCategory
        });
    
        res.status(201).json({  //add a status code and package the response in json
            message: "Item successfully added",
            item: Item,
        });
    } catch (err) {
        if (error instanceof UniqueConstraintError) {
            res.status(409).json({
                message:"Value already in use",
            });
        } else {
            res.status(500).json({
                message: "Failed to add item"
            });
        }
    }
}); */

/* //edit item
router.post("/edit", async (req,res) => {

    let {itemName, itemDescription, itemQty, itemCategory} = req.body.user; //dynamic data 
    try{
        const ItemEdit = await UserModel.findOne({ 
            where: {
                itemName: itemName,
            },
        });

        if(ItemEdit){
            res.status(200).json({
                item: item,
                message: "User login successful!",
                sessionToken: token
            });
    } catch (error) {
        res.status(500).json({
            message: "Item update failed"
        })
    }
}); */

module.exports = router;
