var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Empleos', title2:'Busca Empleo' });
});

module.exports = router;
