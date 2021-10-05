
require('dotenv').config();
const Express = require("express"); //import express framework
const app = Express();  //store express method in a variable - app
const dbConnection = require("./db"); //database import

const cors = require('cors');
app.use(cors());

const controllers = require("./controllers"); //import controllers as a bundle
app.use(Express.json()); //middleware function - use json when processing requests

app.use("/user", controllers.userController);
app.use("/userLogin",controllers.userController);

app.use(require('./middleware/validate-jwt'));
app.use(require('./middleware/headers'));

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


