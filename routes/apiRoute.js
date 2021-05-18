const express = require('express');
const router = express.Router();
const {create,read,del} = require('../controllers/apiController');

router.get('/',read);
router.post('/',create);
router.delete('/',del);


module.exports = router;