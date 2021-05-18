const express = require('express');
const router = express.Router();
const {sendMsg}= require('../controllers/homeController');
const apiRoute = require('./apiRoute');

router.get('/',sendMsg);
router.use('/api',apiRoute);

module.exports = router;