const { Router } = require('express');
const {HomeImage} = require('../db.js');
const router = Router();

router.get('/', async (req,res) => {
    try {
        const images = await HomeImage.findAll();
        // console.log(images[0].dataValues);
        res.status(200).send(images);
    } catch (error) {
        res.status(404).send(error.message)
    }
});

router.post('/', async (req,res) => {
    try {
        const {url , alt , date} = req.body
        const newImage = await HomeImage.create({url , alt , date})
        res.status(200).send({newImage , added:true})
    } catch (error) {
        res.status(404).send(error.message)
    }
})



module.exports = router;