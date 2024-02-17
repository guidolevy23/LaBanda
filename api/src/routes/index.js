const { Router } = require('express');
const pageImage = require('../routes/pageImage.js')
const router = Router();


router.use('/pageimages', pageImage);







module.exports = router;