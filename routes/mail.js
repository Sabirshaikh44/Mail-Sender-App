const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mail')

router.post('/mail',mailController.sendMail);

module.exports = router;