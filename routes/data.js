var express = require('express');
var router = express.Router();

const userController = require('../controller/datacontroller');

/* GET Fasilitas page. */
router.get('/dataumkm', userController.view_tabelumkm,)
router.get('/datamikro', userController.view_tabelmikro, function(req, res, next) {
  res.render('datamikro'); 
});
router.get('/datakecil', userController.view_tabelkecil, function(req, res, next) {
  res.render('datakecil');
});
router.get('/datamenengah', userController.view_tabelmenengah, function(req, res, next) {
  res.render('datamenengah');
});

module.exports = router;
