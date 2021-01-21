var express = require('express');

// to perform middleware and routing functions
//we use it as an argument to app.use()
//or as argument to another router's use() method
var router = express.Router();

/* GET home page. */
// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/car', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
