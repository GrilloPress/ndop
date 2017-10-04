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
// This doesn't handle sub-urls yet...
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/F/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'F/' + theView );
});

// // // // // // //

module.exports = router;