let Express = require("express");
let router =Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const {ItemModel} = require("../models");

const jwt = require("jsonwebtoken");
//const {UniqueConstraintError} = require("sequelize/lib/errors");



router.post("/create", validateJWT, async(req,res) => {
    const {itemName, itemDesc, itemQty, itemCat} = req.body.item;
    const {id} = req.user;
    const itemEntry = {
        itemName,
        itemDesc,
        itemQty,
        itemCat,
        owner: id
    }
    try {
        const newItem = await ItemModel.create(itemEntry);
        res.status(200).json(newItem);

        let token = jwt.sign({id: User.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
    
        res.status(201).json({  //add a status code and package the response in json
            message: "item successfully created",
            item: Item,
            sessionToken: token
        });
    } catch (err) {
        res.status(500).json({error: err});
    }
    ItemModel.create(itemEntry)

});


//get all items
router.get("/", async (req,res) => {
    try{
        const entries = await ItemModel.findAll();
        res.status(200).json(entries)
    } catch(err) {
        res.status(500).json({error: err});
    }
});

//get items by category
router.get("/:itemCat", async (req,res) => {
    const {itemCat} = req.params;

    try{
        const results = await ItemModel.findAll({
            where: { itemCat: itemCat }
        });
        res.status(200).json(results);
    } catch(err) {
        res.status(500).json({error: err});
    }
});


//edit item
router.put("/edit/:itemId", async (req,res) => {

    const {itemName, itemDescription, itemQty, itemCategory} = req.body.item; //dynamic data 
    const itemId = req.params.itemId;
    
    const query = {
        where: { id: itemId }
    };

    const editedItem = {
        itemName: itemName,
        itemDescription: itemDescription,
        itemQty: itemQty,
        itemCategory: itemCategory
    };

    try{
        const edit = await ItemModel.update(editedItem, query);
        res.status(200).json(edit);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//delete item
router.delete("/delete/:id", async (req, res) => {
    const itemId = req.params.id;

    try{
        const query = {
            where: {
                id: itemId
            }
        };
        await ItemModel.destroy(query);
        res.status(200).json({ message: "Item Removed" });
    } catch (err){
        res.status(500).json({error: err});
    }
});

module.exports = router;
