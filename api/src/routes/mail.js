const { Router } = require('express');
const sendEmail = require("../controllers/mail/sendMail.js");
const sendContacto = require('../controllers/mail/sendContacto.js');
const router = Router();

router.post('/' , async function (req,res){
    const  {email}  = req.body
    try {
        if(!email) throw new Error('No Email has been provided');
        const resp = await sendEmail(req.body);
        res.status(200).send("mail has been sent")
    } catch (error) {
        res.status(400).send(error.message)
    }
});
router.post('/contact' , async function (req,res){ 
    const  {email , name , phone , text}  = req.body
    try {
        if(!email || !name || !text || !phone ) throw new Error('No information complete has been provided');
        const resp = await sendContacto(email , name , phone , text);
        res.status(200).send("mail has been sent")
    } catch (error) {
        res.status(400).send(error.message)
    }
})


module.exports = router;