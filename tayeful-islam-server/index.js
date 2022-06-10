const express = require("express");
const nodemailer = require("nodemailer");
require('dotenv').config()
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000;


// middel ware 

app.use(cors())
app.use(express.json())


let transporter = nodemailer.createTransport({
    host: "mail.mediquiz.xyz",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SENDER_ID, // generated ethereal user
        pass: process.env.SENDER_PASS, // generated ethereal password
    },
});





// create reusable transporter object using the default SMTP transport





app.post('/sendmail', async (req, res) => {
    const mailData = req.body;

    // console.log(mailData)
    const info = await transporter.sendMail({
        from: process.env.SENDER_ID, // sender address
        to: mailData?.email, // list of receivers
        subject: "NEW MESSAGE FORM Tayeful Islam", // Subject line
        text: mailData?.message, // plain text body
        html: `<p>${mailData?.message}</p>`, // html body
    });

    console.log(info.messageId)

    if (info.messageId) {
        res.send(true)
    }



})

app.get('/', (req, res) => {
    res.send('server is running')
})


app.listen(port, () => {
    console.log('server is running at', port)
})




