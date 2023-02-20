const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newbooks', function(req, res, next) {
  res.render('addbooks', { title: 'Add new books' });
});

router.get('/books', function(req, res, next) {
  res.render('Books', { title: 'Books' });
});

module.exports = router;

