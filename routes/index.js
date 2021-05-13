const express = require('express');
const router = express.Router();
const {sendMsg}= require('../controllers/homeController');


router.get('/',sendMsg);

module.exports = router;