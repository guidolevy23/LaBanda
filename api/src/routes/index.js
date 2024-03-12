const { Router } = require('express');
const pageImage = require('./pageImage.js')
const homeImages = require('./homeImages.js')
const router = Router();
const userImages = require('./userImages.js')


router.use('/pageimages', pageImage);
router.use('/homeimages', homeImages);
router.use('/userimages', userImages);







module.exports = router;