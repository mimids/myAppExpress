var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/gretajs', {useNewUrlParser: true},
function (err) {
if (err) {
throw err;
} else console.log('Connected');
}
);
// Schéma définissant une collection
var countriesSchema = new mongoose.Schema({
_id: {type : mongoose.Schema.ObjectId},
code: {type: String},
name: {type: String}
});
// Association entre le schéma et la collection retourne un Model Mongoose
var collection = mongoose.model('Countries', countriesSchema, 'countries');
collection.find(function (err, comms) {
if (err) {
throw err;
}
console.log(comms);
mongoose.connection.close();
});