var mongoose = require('mongoose');
var schema = mongoose.Schema;

var actionSchema = new schema({hebrew_word:String}, {collection:'eMails'});
exports.actionSchema = actionSchema;