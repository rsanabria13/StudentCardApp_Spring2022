var express = require('express');
var router = express.Router();
const path = require("path");

router.get('/*', function(req, res, next) {
    //Potential for injection!
    res.sendFile(path.resolve('public/scripts/' + req.url) );

});



module.exports = router;