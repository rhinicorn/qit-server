
require("dotenv").config();
const Express = require("express"); //import express framework
const app = Express();  //store express method in a variable - app
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



const dbConnection = require("./db"); //database import


const controllers = require("./controllers"); //import controllers as a bundle

app.use(Express.json()); //middleware function - use json when processing requests

app.use("/user", controllers.userController);
app.use("/userLogin",controllers.userController);

app.use("/inventory", controllers.inventoryController); //setup the parameter call and link subroutes (inventorycontroller.js)
app.use("/item", controllers.itemController);
app.use("/edit", controllers.itemController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`[Server]: App is listening on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });

app.use('/test', (req,res) => {
    res.send('This is a message from the test endpoint')
});
