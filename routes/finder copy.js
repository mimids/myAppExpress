var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  var path = "/" + req.originalUrl.split('/')[1];
  var type = req.method;


global.schemas[actions_json[type + path].modelName].find({}, function(err, result) {
    if (err) {
    throw err;
    }
    console.log(result);
 
          res.render(actions_json[type + path].view, {
              stitle: actions_json[type + path].stitle,
              title: actions_json[type + path].title,
              data: result,
              liste: result
          });
    
    
  });
});
module.exports = router;