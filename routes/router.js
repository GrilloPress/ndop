var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/F', function(req, res, next) {
  res.render( 'F/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/F/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'F/' + theView );
});

router.get('/F/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'F/' + theDir + '/' + theView );
});
// // // // // // //

module.exports = router;