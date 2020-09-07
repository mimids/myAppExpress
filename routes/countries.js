var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
  var path = "/"+ req.originalUrl.split('/')[1];
  var type =req.method;


var fs = require('fs');
var json_countries = JSON.parse(fs.readFileSync("countries.json", 'utf8'));
// console.log(json_countries);
res.render(actions_json[type + path].view,{data: json_countries});
});
module.exports = router;
