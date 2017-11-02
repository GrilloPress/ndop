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

router.get('/F/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'F/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET BIT index page.
router.get('/bit', function(req, res, next) {
  res.render( 'bit/index' );
});

// GET all BIT URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/bit/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'bit/' + theView );
});

router.get('/bit/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'bit/' + theDir + '/' + theView );
});

router.get('/bit/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'bit/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET BIT index page.
router.get('/Y', function(req, res, next) {
  res.render( 'Y/index' );
});

// GET all Y URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/Y/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'Y/' + theView );
});

router.get('/Y/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'Y/' + theDir + '/' + theView );
});

router.get('/Y/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'Y/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

module.exports = router;
