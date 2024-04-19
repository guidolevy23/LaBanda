const nodemailer = require('nodemailer');

const sendContacto = async (email , name , phone , text)=>{
    
    //General configuration for email sender
    const mail ={
        user: "labanda9122018@gmail.com",
        pass: "y l c j n t o l t g g c h g y c"
    }
    const configuration = {
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth: {
            user: mail.user,
            pass: mail.pass,
          },
    }
    // TRANSPORTER
    const trasport = nodemailer.createTransport(configuration);

    
    if (email , name , phone , text){
        const mensaje = {
            from: `"La Banda." <${mail.user}>`, // sender address
            to: email, // list of receivers
            subject: "Recibimos tu pedido de contacto.", // Subject line
            text: "", // plain text body not used in this case (using html instead)
            html: ` <div>
                        <h2>Recibimos tu pedido de contacto.</h2>
                        <p>Hola ${name}, gracias por ponerte en contacto con La Banda. Para poder brindarte la mejor atencion, nos contactaremos al ${phone} lo antes posible. 
                        Tu mensaje: '${text}' ha sido recibido."</p>
                        <p>Saludo millo!</p>
                    </div>`
            }

    //Sending the email if everything was OK.
    const info = await trasport.sendMail(mensaje);
    return;

    }
           
}

module.exports = sendContacto;