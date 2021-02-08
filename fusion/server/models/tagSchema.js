const mongoose = require('./database');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  key: String,
  text: String
});

// first argument is the singular name of the collection your model is 4. 
//Mongoose automat looks for plural,lowercased version of your model name. 
//Thus, the model Fuse is for the fuses collection in the database.
module.exports = mongoose.model('tag', tagSchema, 'Tags');