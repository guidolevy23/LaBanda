const { Router } = require('express');
const pageImage = require('./pageImage.js')
const homeImages = require('./homeImages.js')
const router = Router();


router.use('/pageimages', pageImage);
router.use("/homeimages", homeImages);







module.exports = router;