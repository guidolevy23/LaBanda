const { Router } = require('express');
const {PageImage} = require('../db.js');
const router = Router();

router.get('/', async (req,res) => {
    try {
        const images = await PageImage.findAll();
        res.status(200).send(images);
    } catch (error) {
        res.status(404).send(error.message)
    }
});

router.post('/', async (req,res) => {
    try {
        const {url , alt , description} = req.body
        const newImage = await PageImage.create({url , alt , description})
        res.status(200).send({newImage , added:true})
    } catch (error) {
        res.status(404).send(error.message)
    }
})



module.exports = router;