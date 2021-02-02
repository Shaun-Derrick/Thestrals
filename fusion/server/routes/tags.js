let express = require('express');
let router = express.Router();

const mongoose = require('../models/database');
const Tag= require('../models/tagSchema');

//ROUTES
// Root route
router.get('/', async (req, res, next) => {
  let data = await Tag.find({})
  console.log(`hey i'm `, data);

  console.info(`Tags retrieved from mongoose:`, data?.length)
  res.send(data);
});
//so when we have get request for /Tags,function will be called
router.get('/Tags', async (req, res, next) => {
  let data = await Tag.find({});
  console.log(`Here is the stuff!`,data )

  console.info(`Tags retrieved from mongoose:`, data?.length)
  res.send(data);
});

/* to find a Fuze by its id */
router.get('/:id', async (req, res, next) => {
  let TagId = req.params.id;
  //console.info('I m here', FuzeId)

  //error handling by try/catch in case of wrong id

  try{
    let data = await Tag.findById(TagId);
     res.send(data);
  }
   catch(error){
     res.sendStatus(404)
   }
});

module.exports = router;