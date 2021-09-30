const Express = require("express");
const router = Express.Router();  //return a router object when used
let validateJWT = require("../middleware/validate-jwt");


//router object GET the specific route path with anonymous callback function with response method and parameter
router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey - a practice route')
});

router.get('/about', (req, res) => {
    res.send('Hey - an about route')
});

//export module for use outside of file
module.exports = router; 