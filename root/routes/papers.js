const express = require('express');
const router = express.Router();
const multer = require('multer');

let upload = multer({ dest: 'uploads/' })

// Bring in User Model
let Paper = require('../models/paper');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/addPaper', function(req, res) {
  res.render('addPaper');
});

var cpUpload = upload.fields([{ name: 'paper', maxCount: 1 }])
router.post('/addPaper', cpUpload, function(req, res) {
  console.log(req.body) // form fields
  console.log(req.files) // form files
  res.status(204).end()
});



module.exports = router;
