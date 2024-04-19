const { Router } = require('express');
const pageImage = require('./pageImage.js')
const homeImages = require('./homeImages.js')
const router = Router();
const userImages = require('./userImages.js')
const mail = require('./mail.js')

router.use('/sendemail', mail )
router.use('/pageimages', pageImage);
router.use('/homeimages', homeImages);
router.use('/userimages', userImages);






module.exports = router;