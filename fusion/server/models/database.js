// SETUP MONGO/MONGOOSE
const mongoose = require('mongoose');

// Fuzes login original
//const mongoUser = 'testUserRO';
//const mongoPasswd = 'Dbt3st1nG';
//const mongoDBName = 'Fuzes';
//const mongoServer = '@cluster0.alihe.mongodb.net';

// Fuzes login Danny tester
/* const mongoUser = 'Debbietester';
const mongoPasswd = 'lcrS9w6vcxZbcXCV';
const mongoDBName = 'Fuzes';
const mongoServer = '@cluster0.alihe.mongodb.net'; */

// Fuses-Sandbox login
const mongoUser = 'kltestuser';
 const mongoPasswd = 'Dbt3st1ng';
 const mongoDBName = 'Fuses';
 const mongoServer = '@cluster0.qbxu5.mongodb.net';
const url = `mongodb+srv://${mongoUser}:${mongoPasswd}${mongoServer}/${mongoDBName}?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', (_) =>
  console.log(`MongoDB is now connected: ${mongoUser}${mongoServer}/${mongoDBName}`));
db.on('error', (err) => console.error('MongoDB connection error!', err));

module.exports = mongoose 