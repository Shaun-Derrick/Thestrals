const mongoose = require('./database');
const Schema = mongoose.Schema;

const fuzeSchema = new Schema({
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime:String,
  Title:String,
  description: String,
  venue:String,
  tags:String,
  organizer:String,
  whereIFoundThisEvent2:String,
});



// first argument is the singular name of the collection your model is for. 
//Mongoose automat looks for plural,lowercased version of your model name. 
//Thus, the model Fuse is for the fuses collection in the database.
module.exports = mongoose.model('fuze', fuzeSchema, 'Fuzes')