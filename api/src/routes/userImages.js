const { Router } = require('express');
const {UserImage} = require('../db.js');
const router = Router();

router.get('/', async (req,res) => {
    try {
        const images = await UserImage.findAll();
        res.status(200).send(images);
    } catch (error) {
        res.status(404).send(error.message)
    }
});

router.post('/', async (req,res) => {
    try {
        const { url , user , description } = req.body
        const newImage = await UserImage.create({url , user , description })
        res.status(200).send({newImage , added:true})
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;