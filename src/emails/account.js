const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'johnson.casey1211@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}.  Let me know how you like it!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'johnson.casey1211@gmail.com',
        subject: "We're sorry to see you go!",
        text: `${name},
        
        Let us know if there is anything we could have done better!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}