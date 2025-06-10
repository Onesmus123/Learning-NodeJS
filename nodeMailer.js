// The Nodemailer module makes it easy to send emails from your computer.
// The Nodemailer module can be downloaded and installed using npm install nodemailer

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'spartayoung655@gmail.com',
        pass: '20302030' // Use an App Password here
    }
});

const mailOptions = {
    from: 'spartayoung655@gmail.com',
    to: 'spartayoung6383@gmail.com, spartayoung6384@gmail.com',
    subject: 'SENDING EMAIL FROM NODEJS',
    html: '<h2>My Heading</h2> <p>My paragraph!</p>',
};

transport.sendMail(mailOptions, (error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent successfully:", data.response);
    }
});
