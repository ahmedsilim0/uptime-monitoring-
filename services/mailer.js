const mailer = require('nodemailer');
const email='ahmedsilim0@gmail.com' //that should be the email that user looged with
const transporter = mailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'your-username',
        pass: 'your-password'
    }
});

function sendEmail(message){
    //sending the email
    transporter.sendMail({
        from: '"ahmed" <ahmed@gmail.com>',
        to: email,
        subject: 'Scheduled Email',
        text: message
    })
        .then(_ => {console.log("Email sent on " + new Date())})
        .catch(error => {console.log(error)});
}

exports.sendEmail=sendEmail;