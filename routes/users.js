var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var path = "/"+ req.originalUrl.split('/')[1];
  var type =req.method;


  res.render('users',{
    name: "BEBE", 
    firstname: "ddd",
    data: [{ language: "HTML5", version: "5" },
           { language: "JavaScript", version: "ES5" },
           { language: "RUST", version: "1.46.0-nightly"}]
    }

);


});

module.exports = router;
