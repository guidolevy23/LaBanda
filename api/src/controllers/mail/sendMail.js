const nodemailer = require('nodemailer');

const sendEmail = async (data)=>{
    
    const { email } = data;

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

    
    if (email){
        const mensaje = {
            from: `"La Banda." <${mail.user}>`, // sender address
            to: email, // list of receivers
            subject: "Gracias por suscribirse al Newsletter de La Banda", // Subject line
            text: "", // plain text body not used in this case (using html instead)
            html: ` <div>
                        <h2>Estamos felices de tenerte!</h2>
                        <p>Vas a recibir muchisima informacion unica y que no circula por ningun lado!.</p>
                    </div>`
            }

    //Sending the email if everything was OK.
    const info = await trasport.sendMail(mensaje);
    return;

    }
           
}

module.exports = sendEmail;