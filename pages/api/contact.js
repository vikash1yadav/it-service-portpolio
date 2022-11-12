let nodemailer = require('nodemailer')

export default function (req, res) {
    const { email, message, name } = req.body;
    
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: 'demod7112@gmail.com',
            pass: '0666595m',
        },
    });
    const mailData = {
        from: 'demod7112@gmail.com',
        to: `${email}`,
        subject: `Message From ${name}`,
        text: `${message}`,
        html: `<div>${message}</div><p>Sent from:${email}</p>`
    };
    transporter.sendMail(mailData, function (err, info) {
        if (err) return err;
    })
}