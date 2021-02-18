let express = require('express');
let router = express.Router();

const mongoose = require('../models/database');
const Tag= require('../models/tagSchema');

//ROUTES
// Root route
router.get('/', async (req, res, next) => {
  let data = await Tag.find({})
  .sort({text:1});
  res.send(data);
});

router.post('/', async (req, res)=>{
  const submittedTag= req.body
  try{
    let createdTag= await Tag.create(submittedTag)
    res.send(createdTag)
  } 
  catch (error) {
    res.send(error)
  }
})

/* to find a Fuze by its id */
router.get('/:id', async (req, res, next) => {
  let TagId = req.params.id;
  try{
    let data = await Tag.findById(TagId);
     res.send(data);
  }
   catch(error){
     res.sendStatus(404)
   }
});

router.put('/:id', async(req, res)=>{
  try{
    const foundTag= await Tag.findById(req.params.id)
    foundTag.set({
      key: req.body.key,
      text: req.body.text,
      value: req.body.value
    })
    res.send(foundTag)
  }
  catch(error){
    res.sendStatus(404)
  } 
})

router.delete('/:id', async(req,res)=>{
  try{
    const foundTag= await Tag.deleteOne({_id: req.params.id})
    console.log(`This is deleted!: ${foundTag}`)
    res.send(foundTag)
  }
  catch(error){
    res.sendStatus(404)
  } 
})

//so when we have get request for /Tags,function will be called
//Redundant route
/* router.get('/Tags', async (req, res, next) => {
  let data = await Tag.find({});
  console.log(`Here is the stuff!`,data )
  console.info(`Tags retrieved from mongoose:`, data?.length)
  res.send(data);
}); */



module.exports = router;