var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* Insert one new user into database. */
router.route('/').get(function (req, res) {
    var path = "/" + req.originalUrl.split('/')[1];
    var type = req.method;
    var model = global.actions_json[type + path].modelName;
    var view = global.actions_json[type + path].view;
    console.log('req.originalUrl : ', req.originalUrl);
    if (!req.query.hasOwnProperty("_id")) req.query._id = new ObjectId();
    global.schemas[model].create([req.query],
        function (err, result) {
            if (err) {
                throw err;
            }
            console.log('insertOne mongoose: ', result);
             // on refait une requête pour récupérer tous les enregs du modelName
             global.schemas[model].find({}, function (err, result2) {
                console.log("result into deleteUser : ", result2);
                res.render(view, {
                    title: "List of users",
                    data: result2
                });
            });
        } // fin callback de l'insert
    ); // fin de l'insert()
}); // fin de la gestion de la route

router.route('/').post(function (req, res) {
    var path = "/" + req.originalUrl.split('/')[1];
    var type = req.method;
    var model = global.actions_json[type + path].modelName;
    var view = global.actions_json[type + path].view;
    console.log('req.originalUrl : ', req.originalUrl);
    // On doit créer via Mongoose un _id pour faire l'insertion dans la base
    if (!req.query.hasOwnProperty("_id")) req.body._id = new ObjectId();
    global.schemas[model].create([req.body],
        function (err, result) {
            if (err) {
                throw err;
            }
            console.log('insertOne mongoose: ', result);
            // on refait une requête pour récupérer tous les enregs du modelName
            global.schemas[model].find({}, function (err, result2) {
                console.log("result into deleteUser : ", result2);
                res.render(view, {
                    title: "List of users",
                    data: result2
                });
            });
        } // fin callback de l'insert
    ); // fin de l'insert()
}); // fin de la gestion de la route
module.exports = router;