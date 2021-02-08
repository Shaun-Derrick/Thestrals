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
  type:String,
  tags1:String,
  tags2:String,
  tags3:String,
  organizer:String,
  whereIFoundThisEvent1:String,
  whereIFoundThisEvent2:String,
  whereIFoundThisEvent3:String,
});

// first argument is the singular name of the collection your model is for. 
//Mongoose automat looks for plural,lowercased version of your model name. 
//Thus, the model Fuse is for the fuses collection in the database.
module.exports = mongoose.model('fuze', fuzeSchema, 'Fuzes')